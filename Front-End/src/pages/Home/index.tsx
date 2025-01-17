import { Header } from "../../components/Header";
import { StyledSection } from "./styles";
import background from "../../assets/aston-martin-valour-4.avif";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  IAnouncement,
  IAnouncementWithUser,
  IUsers,
} from "../../interfaces/interfaces";
import { AnouncementCard } from "../../components/Cards/AnouncementCard";
import { ModalEditUser } from "../../components/Modal/ModalEditUser";
import { ModalEditAddress } from "../../components/Modal/ModalEditAddress";

export const Home = () => {
  const [cards, setCards] = useState<IAnouncementWithUser[]>([]);
  const [user, setUser] = useState<IUsers | undefined>(undefined);
  const [modalEditUserOpen, setmodalEditUserOpen] = useState(false);
  const [modalEditAddressOpen, setmodalEditAddressOpen] = useState(false);

  const toggleModalEditAddress = () =>
    setmodalEditAddressOpen(!modalEditAddressOpen);

  const toggleModalEditUser = () => setmodalEditUserOpen(!modalEditUserOpen);
  useEffect(() => {
    const userId = localStorage.getItem("motors:UserId");

    if (userId) {
      getUser();
    }

    async function getUser() {
      const response = await api.get(`/users/${userId}`);

      setUser(response.data);
    }
    async function getAnouncements() {
      try {
        const response = await api.get("/anouncements");

        const promises = response.data.map(async (element: IAnouncement) => {
          const userResponse = await api.get(`/users/${element.userId}`);
          const user: IUsers = userResponse.data;
          return { ...element, user };
        });

        const anouncementsWithUsers = await Promise.all(promises);

        setCards(anouncementsWithUsers);
      } catch (error) {
        console.error(error);
      }
    }
    getAnouncements();
  }, []);

  return (
    <>
      <Header
        user={user}
        toggleModalEditUser={toggleModalEditUser}
        toggleModalEditAddress={toggleModalEditAddress}
      />
      {modalEditAddressOpen ? (
        <ModalEditAddress toggleModal={toggleModalEditAddress} />
      ) : null}

      {modalEditUserOpen ? (
        <ModalEditUser toggleModal={toggleModalEditUser} />
      ) : null}
      <StyledSection>
        <img src={background} alt="background" />
      </StyledSection>
      <AnouncementCard cards={cards} />

      <Footer />
    </>
  );
};
