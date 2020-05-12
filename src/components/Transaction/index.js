import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from '@material-ui/core';

import {
  ModalContainer,
  ContentModal,
  FormButtons,
  ButtonContainer,
  HeaderModal,
} from './styles';

import {
  FaDolly,
  FaMapMarkedAlt,
  FaShoppingBasket,
  FaMoneyBill,
} from 'react-icons/fa';

const Transaction = () => {
  return (
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
};

export default Transaction;
