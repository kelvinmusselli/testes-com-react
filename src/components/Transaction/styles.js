import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 300px;
`;

export const ContentModal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
`;

export const FormButtons = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  button {
    width: 110px;
  }
`;

export const HeaderModal = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  color: #a0a0a0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;
