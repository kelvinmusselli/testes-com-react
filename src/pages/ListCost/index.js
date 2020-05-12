import React, { useState } from 'react';
import {
  Container,
  ContentHeaderList,
  ItemHeader,
  ContentListDepot,
  ContentFooter,
  ButtonFooter,
} from './styles';

import { Modal } from '@material-ui/core';
import Graphics from '../../components/Graphics';
import ListData from '../../components/ListData';
import { FaPlus } from 'react-icons/fa';
import Transaction from '../../components/Transaction';

const ListCost = () => {
  const [modalStatus, setStatus] = useState(false);

  const openModal = () => {
    setStatus(true);
  };

  const closeModal = () => {
    setStatus(false);
  };

  return (
    <Container>
      <ContentHeaderList>
        <ItemHeader>Kelvin R$ 20,00</ItemHeader>
      </ContentHeaderList>
      <ContentListDepot>
        <Graphics />
        <ListData />
      </ContentListDepot>
      <ContentFooter>
        <ButtonFooter onClick={() => openModal()}>
          <FaPlus size={16} color="#fff" />
        </ButtonFooter>
      </ContentFooter>
      <Modal
        open={modalStatus}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Transaction />
      </Modal>
    </Container>
  );
};

export default ListCost;
