import React from 'react';
import Svg, { Path } from 'react-native-svg';

import GenerationIcon from '../../assets/icons/generation.svg';
import SortIcon from '../../assets/icons/sort.svg';
import FiterIcon from '../../assets/icons/filter.svg';
import { Container, Btn } from './styles';

export const Menu: React.FC = () => {
  return (
    <Container>
      <Btn>
        <GenerationIcon width={30} />
      </Btn>
      <Btn>
        <FiterIcon width={30} />
      </Btn>
      <Btn>
        <SortIcon width={25} />
      </Btn>
    </Container>
  );
};
