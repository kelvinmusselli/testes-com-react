import React, { useState } from 'react';
import {
  Container,
  ContentHeaderList,
  ItemHeader,
  ContentListDepot,
  ContentFooter,
  ButtonFooter,
  ModalContainer,
  ContentModal,
  FormButtons,
  ButtonContainer,
  HeaderModal,
} from './styles';
import {
  Modal,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from '@material-ui/core';
import Graphics from '../../components/Graphics';
import ListData from '../../components/ListData';
import {
  FaPlus,
  FaDolly,
  FaMapMarkedAlt,
  FaShoppingBasket,
  FaMoneyBill,
} from 'react-icons/fa';

const ListCost = () => {
  const [modalStatus, setStatus] = useState(false);

  const openModal = () => {
    setStatus(true);
  };

  const closeModal = () => {
    setStatus(false);
  };

  const body = (
    <ModalContainer>
      <ContentModal>
        <HeaderModal>
          <span>Nova transação</span>
        </HeaderModal>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Categoria</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <FaDolly size={16} color="#7159c1" />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment2">Local</InputLabel>
          <Input
            id="input-with-icon-adornment2"
            startAdornment={
              <InputAdornment position="start">
                <FaMapMarkedAlt size={16} color="#7159c1" />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment2">
            Produto/Serviço
          </InputLabel>
          <Input
            id="input-with-icon-adornment2"
            startAdornment={
              <InputAdornment position="start">
                <FaShoppingBasket size={16} color="#7159c1" />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment2">Preço</InputLabel>
          <Input
            id="input-with-icon-adornment2"
            startAdornment={
              <InputAdornment position="start">
                <FaMoneyBill size={16} color="#7159c1" />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormButtons>
          <ButtonContainer>
            <Button variant="contained" color="primary">
              Entrou
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant="contained" color="secondary">
              Saiu
            </Button>
          </ButtonContainer>
        </FormButtons>
      </ContentModal>
    </ModalContainer>
  );

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
        {body}
      </Modal>
    </Container>
  );
};

export default ListCost;
