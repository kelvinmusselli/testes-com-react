import React from 'react';
import { FaShopify } from 'react-icons/fa';

import {
  Container,
  AlignData,
  ItemData,
  IconData,
  ElementData,
  ValuesData,
  ButtonPageData,
  Category,
  CategoryItem,
  CategoryValueName,
  CategoryValue,
} from './styles';

const ListData = () => {
  return (
    <Container>
      <AlignData>
        <ItemData>
          <IconData>
            <div>
              <FaShopify size={20} color="#7159c1" />
            </div>
          </IconData>
          <ElementData>
            <Category>Categoria</Category>
            <CategoryItem>Banana</CategoryItem>
          </ElementData>
          <ValuesData>
            <CategoryValueName>Local</CategoryValueName>
            <CategoryValue>- R$ 20,00</CategoryValue>
          </ValuesData>
        </ItemData>
      </AlignData>
      <ButtonPageData>
        <button>Ant</button>
        <button>Prox</button>
      </ButtonPageData>
    </Container>
  );
};

export default ListData;
