import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  flex-basis: 100%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const AlignData = styled.div`
  height: 100%;
  max-height: 500px;
`;

export const ItemData = styled.div`
  padding: 5px;
  justify-content: space-between;
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

export const IconData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.625rem;
  position: relative;
  flex-shrink: 0;
  border-radius: 50%;
`;

export const ElementData = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const ValuesData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  flex-grow: 0;
`;

export const ButtonPageData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const Category = styled.span`
  font-size: 10px;
  color: #676767;
`;

export const CategoryItem = styled.div`
  font-size: 14px;
  color: #676767;
  margin-top: 5px;
`;

export const CategoryValueName = styled.span`
  font-size: 10px;
  color: #676767;
`;

export const CategoryValue = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;
