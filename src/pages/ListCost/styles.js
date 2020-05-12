import styled from 'styled-components';

export const Container = styled.div`
  background: #f7f7f7;
  height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContentHeaderList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #7159c1;
  padding: 8px 2px 0px 2px;
  height: 30px;
`;

export const ItemHeader = styled.div`
  color: #fff;
`;

export const ContentListDepot = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  background: #fff;
  padding: 8px 2px 0px 2px;
`;

export const ContentFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px 5px 10px 0px;
`;

export const ButtonFooter = styled.button`
  float: right;
  border-radius: 50px;
  background: none;
  width: 50px;
  background-color: #7159c1;
  height: 50px;
  border: none;
  color: #fff;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  &:active {
    background-color: #8673c3;
  }
`;
