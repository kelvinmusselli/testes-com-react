import React from 'react';
import {
  Container,
  ContentHeaderList,
  ItemHeader,
  ContentHeaderBody,
  ContentListDepot,
} from './styles';
import Graphics from '../../components/Graphics';

function ListCost() {
  return (
    <Container>
      <ContentHeaderList>
        <ItemHeader>Kelvin R$ 20,00</ItemHeader>
      </ContentHeaderList>
      <ContentHeaderBody>
        <Graphics />
      </ContentHeaderBody>
      <ContentListDepot></ContentListDepot>
    </Container>
  );
}

export default ListCost;
