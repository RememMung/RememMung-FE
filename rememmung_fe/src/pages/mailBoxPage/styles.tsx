import styled from "styled-components";

const styles = {
  Container: styled.div`
    font-family: "Pretendard";

    display: flex;
    flex-direction: column;
    width: 84%;
    margin: 0 auto;
  `,
  ElementBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 580px;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 32px 16px 32px 32px;
    background-color: #f6f6f8;
    overflow: hidden;

    margin: 0 auto;
  `,
  LowerContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ButtonContainer: styled.div`
    display: flex;
    margin-top: 16px;

    > * {
      margin-left: 12px;
    }
  `,
  WriteButton: styled.div`
    cursor: pointer;
    padding: 10px 16px;
    background-color: #946233;
    color: #ffffff;
    border-radius: 8px;
  `,
  DeleteButton: styled.div`
    cursor: pointer;
    padding: 10px 16px;
    background-color: #8a8e99;
    color: #ffffff;
    border-radius: 8px;
  `,
  NoData: styled.div`
    color: #939393;
    text-align: center;
  `,
  PetImage: styled.img`
    width: 248px;
    height: 248px;
    border-radius: 50%;

    margin-bottom: 42px;
  `,
};

export default styles;
