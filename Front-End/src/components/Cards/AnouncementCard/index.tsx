/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BaseCards,
  StyledCradsAnouncementContainer,
  StyledNextOrReturn,
} from "./styles";

export const AnouncementCard = ({ cards }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const navigate = useNavigate();

  const toProduct = (id: string) => {
    localStorage.setItem("motors:IDProduct", id);
    navigate("/Product");
  };

  return (
    <BaseCards>
      <StyledCradsAnouncementContainer>
        {currentItems.map((card: any) => {
          const name = card.user.name.split(" ");
          const spanColor = ["blue", "rose", "brown", "green"];
          const indexSpanColor = Math.floor(Math.random() * spanColor.length);
          return (
            <li key={card.id} onClick={() => toProduct(card.id)}>
              <img src={card.cover_img} />
              <h1>
                {card.brand} - {card.model}
              </h1>
              <h2>{card.description.slice(0, 30) + "..."}</h2>
              <div className="nameUser">
                <span className={spanColor[indexSpanColor]}>
                  {name.length > 2
                    ? `${name[0][0].toUpperCase()} ${name[1][0].toUpperCase()}`
                    : `${name[0][0].toUpperCase()}`}
                </span>
                <p>{card.user.name}</p>
              </div>
              <div className="infos">
                <span>{`${card.mileage} KM`}</span>
                <span>{`${card.year}`}</span>
              </div>
              <h1 className="price">{`R$ ${card.price.toFixed(2)}`}</h1>
            </li>
          );
        })}
      </StyledCradsAnouncementContainer>

      {cards?.length > 12 ? (
        <StyledNextOrReturn>
          {currentPage > 1 ? (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              {" "}
              {"< Anterior"}{" "}
            </button>
          ) : null}
          <div className="textPage">
            <p className="current">{currentPage}</p>
            <p className="next">
              {" "}
              {" de"} {` ${Math.ceil(cards.length / 12)}`}
            </p>
          </div>

          {indexOfLastItem >= cards.length ? null : (
            <button
              className="nextPage"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {" "}
              {"Seguinte >"}{" "}
            </button>
          )}
        </StyledNextOrReturn>
      ) : null}
    </BaseCards>
  );
};
