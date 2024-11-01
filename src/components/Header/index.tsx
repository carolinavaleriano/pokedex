import React from 'react';

import pokeballHeader from '../../assets/items/pokeball.png';
import { Menu } from '../Menu';

import { Container, TextWrapper, Title, SubTitle } from './styles';

export const Header: React.FC = () => {
  return (
    <>
      <Container source={pokeballHeader}>
        <Menu />
        <TextWrapper>
          <Title>Pokédex</Title>
          <SubTitle>
            Search for Pokémon by name or using the National Pokédex number.
          </SubTitle>
        </TextWrapper>
      </Container>
    </>
  );
};
