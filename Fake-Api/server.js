import pkg from "json-server";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const { create, router: _router, defaults } = pkg;
const server = create();
const router = _router("db.json");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const middlewares = defaults();
server.use(middlewares);

const secretKey = "your-secret-key";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
};

server.post("/login", (req, res) => {
  const { email, password } = req.body;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const user = dbJson.users.find(user => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ email: user.email, id: user.id }, secretKey);

  return res.status(201).json({
    id: user.id,
    type: user.type,
    token: token
  });
});

server.post("/users", (req, res) => {
  const newUser = req.body;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const existingUser = dbJson.users.find(user => user.email === newUser.email);
  if (existingUser) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  const existingCpf = dbJson.users.find(user => user.cpf === newUser.cpf);
  if (existingCpf) {
    return res.status(409).json({ error: 'Cpf already exists' });
  }

  const userId = uuidv4();
  newUser.id = userId;

  dbJson.users.push(newUser);

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  return res.status(201).json({ id: newUser.id, type: newUser.type });
});

server.get("/users", (req, res) => {
  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  return res.status(200).json(dbJson.users);
});

server.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const user = dbJson.users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.status(200).json(user);
});

server.patch("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const userIndex = dbJson.users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  dbJson.users[userIndex] = { ...dbJson.users[userIndex], ...updatedUserData };

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  return res.status(200).json({ id: userId, ...updatedUserData });
});

server.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const userIndex = dbJson.users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  dbJson.users.splice(userIndex, 1);

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  return res.status(204).send();
});

server.post("/anouncements", authenticateToken, (req, res) => {
  const newAnouncement = req.body;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  newAnouncement.id = uuidv4();

  dbJson.anouncements.push(newAnouncement);

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  const { id, ...anouncementWithoutId } = newAnouncement;

  return res.status(201).json(anouncementWithoutId);
});

server.get("/anouncements", (req, res) => {
  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  return res.status(200).json(dbJson.anouncements);
});

server.get("/anouncements/user/:userId", (req, res) => {
  const userId = req.params.userId;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const userAnouncements = dbJson.anouncements.filter(anouncement => anouncement.userId === userId);
  return res.status(200).json(userAnouncements);
});

server.get("/anouncements/:anouncementId", (req, res) => {
  const anouncementId = req.params.anouncementId;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const anouncement = dbJson.anouncements.find(anouncement => anouncement.id === anouncementId);
  if (!anouncement) {
    return res.status(404).json({ error: 'Anouncement not found' });
  }

  return res.status(200).json(anouncement);
});

server.patch("/anouncements/:anouncementId", authenticateToken, (req, res) => {
  const anouncementId = req.params.anouncementId;
  const updatedAnouncementData = req.body;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const anouncementIndex = dbJson.anouncements.findIndex(anouncement => anouncement.id === anouncementId);
  if (anouncementIndex === -1) {
    return res.status(404).json({ error: 'Anouncement not found' });
  }

  dbJson.anouncements[anouncementIndex] = { ...dbJson.anouncements[anouncementIndex], ...updatedAnouncementData };

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  const { id, ...updatedAnouncementWithoutId } = dbJson.anouncements[anouncementIndex];

  return res.status(200).json(updatedAnouncementWithoutId);
});

server.delete("/anouncements/:anouncementId", authenticateToken, (req, res) => {
  const anouncementId = req.params.anouncementId;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  const anouncementIndex = dbJson.anouncements.findIndex(anouncement => anouncement.id === anouncementId);
  if (anouncementIndex === -1) {
    return res.status(404).json({ error: 'Anouncement not found' });
  }

  dbJson.anouncements.splice(anouncementIndex, 1);

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  return res.status(204).send();
});

server.post("/comments/:anouncementId", authenticateToken, (req, res) => {
  const { anouncementId } = req.params;
  const { comment } = req.body;
  const { userId } = req.user;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  // Verificar se o anúncio existe
  const existingAnouncementIndex = dbJson.anouncements.findIndex(a => a.id === anouncementId);
  if (existingAnouncementIndex === -1) {
    return res.status(404).json({ error: 'Anouncement not found!' });
  }

  // Criar o novo comentário
  const newComment = {
    id: uuidv4(),
    comment,
    commentDate: new Date().toISOString(),
    userId,
    anouncementId
  };

  dbJson.comments.push(newComment);

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  res.status(201).json(newComment);
});

server.get("/comments/:anouncementId", (req, res) => {
  const { anouncementId } = req.params;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  // Verificar se o anúncio existe
  const existingAnouncementIndex = dbJson.anouncements.findIndex(a => a.id === anouncementId);
  if (existingAnouncementIndex === -1) {
    return res.status(404).json({ error: 'Anouncement not found!' });
  }

  // Filtrar os comentários relacionados ao anúncio
  const comments = dbJson.comments.filter(c => c.anouncementId === anouncementId);

  res.status(200).json(comments);
});

server.patch("/comments/:commentId", authenticateToken, (req, res) => {
  const { commentId } = req.params;
  const updatedCommentData = req.body;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  // Verificar se o comentário existe
  const existingCommentIndex = dbJson.comments.findIndex(c => c.id === commentId);
  if (existingCommentIndex === -1) {
    return res.status(404).json({ error: 'Comment not found!' });
  }

  // Verificar se o usuário tem permissão para editar o comentário
  const userId = req.user.id;
  if (dbJson.comments[existingCommentIndex].userId !== userId) {
    return res.status(403).json({ error: 'You dont have permissions' });
  }

  // Atualizar o comentário
  dbJson.comments[existingCommentIndex] = {
    ...dbJson.comments[existingCommentIndex],
    ...updatedCommentData
  };

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  // Retornar o comentário atualizado
  const updatedComment = dbJson.comments[existingCommentIndex];
  return res.status(200).json(updatedComment);
});

server.delete("/comments/:commentId", authenticateToken, (req, res) => {
  const { commentId } = req.params;

  const dbData = fs.readFileSync('db.json');
  const dbJson = JSON.parse(dbData);

  // Verificar se o comentário existe
  const existingCommentIndex = dbJson.comments.findIndex(c => c.id === commentId);
  if (existingCommentIndex === -1) {
    return res.status(404).json({ error: 'Comment not found!' });
  }

  // Verificar se o usuário tem permissão para excluir o comentário
  const userId = req.user.id;
  if (dbJson.comments[existingCommentIndex].userId !== userId) {
    return res.status(403).json({ error: 'You dont have permissions' });
  }

  // Remover o comentário
  dbJson.comments.splice(existingCommentIndex, 1);

  fs.writeFileSync('db.json', JSON.stringify(dbJson, null, 2));

  return res.status(204).send();
});


server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

export default server;
