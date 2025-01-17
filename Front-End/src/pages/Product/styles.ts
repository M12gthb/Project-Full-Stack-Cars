import styled from "styled-components";

export const StyledBaseDiv = styled.div`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 0;
  z-index: 0;
  background-color: var(--color-brand-brand-1);
`;

export const ImgCover = styled.img`
  width: 90%;
  max-width: 752px;
  margin: 20px auto 12px auto;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  @media (min-width: 1225px) {
    margin: 12px 10%;
  }
  @media (max-width: 1225px) {
    left: 50%;
    transform: translateX(-50%);
  }

  height: 320px;
  border-radius: 4px;
`;

export const ImagesUl = styled.div`
  width: 90%;
  max-width: 690px;
  background-color: var(--color-colors-fixed-white-fixed);
  z-index: 2;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 2%;
  border-radius: 4px;
  background-color: black;

  @media (min-width: 1440px) {
    position: absolute;
    top: 75px;
    right: 2%;
    width: 440px;
    max-height: 180px;
    overflow-y: auto;
  }
  img {
    width: 130px;
    height: 130px;
    border-radius: 4px;
  }
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  h1 {
    margin-bottom: 12px;
  }
`;

export const Infos = styled.div`
  width: 90%;
  max-width: 690px;
  color: white;
  background-color: black;
  z-index: 2;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 2%;
  border-radius: 4px;
  @media (min-width: 1225px) {
    margin: 24px 10%;
  }
  div {
    margin: 12px 0;
    display: flex;
    gap: 6px;
    span {
      color: var(--color-brand-brand-1);
      background-color: var(--color-brand-brand-3);
      padding: 3px;
      border-radius: 4px;
    }
  }
  p {
    margin: 12px 0;
  }
  button {
    width: 100px;
    height: 38px;
    border-radius: 4px;
    border: none;
    background-color: var(--color-brand-brand-1);
    color: var(--color-colors-fixed-white-fixed);
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Descripition = styled.div`
  width: 90%;
  max-width: 690px;
  background-color: black;
  color: white;
  z-index: 2;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 2%;
  gap: 5px;
  @media (min-width: 1225px) {
    margin: 24px 10%;
  }
`;

export const UserInfos = styled.div`
  width: 90%;
  max-width: 690px;
  background-color: var(--color-colors-fixed-white-fixed);
  z-index: 2;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  color: white;
  background-color: black;
  @media (min-width: 1440px) {
    position: absolute;
    top: 300px;
    right: 2%;
    width: 440px;
    max-height: 160px;
    overflow-y: auto;
  }
  .blue {
    background-color: var(--color-brand-brand-1);
    height: 68px;
    width: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }
  .rose {
    background-color: var(--color-random-random-1);
    height: 68px;
    width: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }
  .brown {
    background-color: var(--color-random-random-3);
    height: 68px;
    width: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }
  .green {
    background-color: var(--color-feedback-sucess-1);
    height: 68px;
    width: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-colors-fixed-white-fixed);
    font-size: 32px;
    font-family: "Lexend";
    font-weight: 600;
    font-style: normal;
  }
  h1 {
    color: black;
  }
  p {
    color: var(--color-grey-scale-grey-2);
    width: 100%;
    word-wrap: break-word;
  }
  button {
    width: 206px;
    height: 48px;
    border: none;
    border-radius: 4px;
    color: var(--color-colors-fixed-white-fixed);
    font-weight: 600;
    background-color: var(--color-grey-scale-grey-0);
    cursor: pointer;
  }
`;

export const Comments = styled.div`
  width: 90%;
  max-width: 690px;
  background-color: black;
  color: white;
  z-index: 2;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 2%;
  border-radius: 4px;
  @media (min-width: 1225px) {
    margin: 24px 10%;
  }
  h1 {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  li {
    margin-bottom: 12px;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 12px;
    .blue {
      background-color: var(--color-brand-brand-1);
      height: 24px;
      width: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
    .rose {
      background-color: var(--color-random-random-1);
      height: 24px;
      width: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
    .brown {
      background-color: var(--color-random-random-3);
      height: 24px;
      width: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
    .green {
      background-color: var(--color-feedback-sucess-1);
      height: 24px;
      width: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
  }
  .edit {
    height: 24px;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--color-grey-scale-grey-2);
    border: 1.5px solid var(--color-grey-scale-grey-2);
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
  }
  .delete {
    height: 24px;
    margin-left: 5px;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--color-feedback-alert-1);
    border: none;
    border-radius: 4px;
    background-color: var(--color-feedback-alert-2);
    cursor: pointer;
  }
  .date {
    color: var(--color-grey-scale-grey-4);
  }
`;

export const NewComment = styled.div`
  width: 90%;
  max-width: 690px;
  background-color: var(--color-colors-fixed-white-fixed);
  z-index: 2;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  padding: 2%;
  border-radius: 4px;
  background-color: black;
  color: white;
  @media (min-width: 1225px) {
    margin: 24px 10%;
  }
  .formName {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 12px;
    .blue {
      background-color: var(--color-brand-brand-1);
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
    .rose {
      background-color: var(--color-random-random-1);
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
    .brown {
      background-color: var(--color-random-random-3);
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
    .green {
      background-color: var(--color-feedback-sucess-1);
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-colors-fixed-white-fixed);
      font-size: 12px;
      font-family: "Lexend";
      font-weight: 600;
      font-style: normal;
    }
  }
  form {
    position: relative;
    width: 96%;
    height: 70px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    textarea {
      border: 1.5px solid var(--color-grey-scale-grey-4);
      border-radius: 4px;
      height: 120px;
      padding-top: 16px;
      padding-left: 16px;
    }
    button {
      background-color: var(--color-brand-brand-1);
      color: var(--color-colors-fixed-white-fixed);
      border-radius: 4px;
      width: 109px;
      border: none;
      height: 36px;
      cursor: pointer;
    }

    @media (min-width: 1440px) {
      height: 100px;
      textarea {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 0;
        border: 1.5px solid var(--color-grey-scale-grey-4);
        border-radius: 4px;
      }
      button {
        position: absolute;
        z-index: 1;
        bottom: 6px;
        right: 6px;
      }
    }
  }
`;

export const Recomend = styled.div`
  button {
    margin-top: 12px;
    margin-right: 6px;
    border: none;
    border-radius: 13px;
    height: 24px;
    cursor: pointer;
    background-color: var(--color-grey-scale-grey-6);
    color: var(--color-grey-scale-grey-3);
  }
`;
