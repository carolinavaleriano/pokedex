import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { FadeAnimation } from '../../components/FadeAnimation';
import api from '../../services/api';
import circleImage from '../../assets/items/circle.png';
import dotsImage from '../../assets/items/dots.png';

import {
  Header,
  BackButton,
  ContentImage,
  Circleimage,
  PokemonImage,
  Content,
  PokemonId,
  PokemonName,
  PokemonTypeContainer,
  PokemonType,
  PokemonTypeText,
  DotsImage,
  Container,
  Title,
  StatusBar,
  Attribute,
  AttributeValue,
  ContentBar,
  ProgressBar,
  Ability,
} from './styles';

type RouteParams = {
  pokemonId: number;
};

type Stats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type Ability = {
  ability: {
    name: string;
  };
};

export type TypeName =
  | 'grass'
  | 'fire'
  | 'water'
  | 'poison'
  | 'normal'
  | 'bug'
  | 'flying'
  | 'eletric'
  | 'ground';

type PokemonType = {
  type: {
    name: TypeName;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  stats: Stats[];
  abilities: Ability[];
  color: string;
  types: PokemonType[];
};

const Details: React.FC = () => {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { colors } = useTheme();

  const { goBack } = useNavigation();

  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemonDetail = async () => {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);
        const { stats, abilities, id, name, types } = response.data;

        const currentType = types[0].type.name as TypeName;

        const color = colors.backgroundCard[currentType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
        });
      } catch (err) {
        Alert.alert('Ops, ocorreu um erro!');
      } finally {
        setLoading(false);
      }
    };
    getPokemonDetail();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
          <Header type={pokemon.types[0].type.name}>
            <BackButton onPress={goBack}>
              <Feather name="chevron-left" size={24} color="#FFF" />
            </BackButton>

            <ContentImage>
              <Circleimage source={circleImage} />
              <FadeAnimation>
                <PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                  }}
                />
              </FadeAnimation>
            </ContentImage>

            <Content>
              <PokemonId>#{pokemon.id}</PokemonId>
              <PokemonName>{pokemon.name}</PokemonName>
              <PokemonTypeContainer>
                {pokemon.types.map(({ type }) => (
                  <PokemonType key={type.name} type={type.name}>
                    <PokemonTypeText>{type.name}</PokemonTypeText>
                  </PokemonType>
                ))}
              </PokemonTypeContainer>
            </Content>

            <DotsImage source={dotsImage} />
          </Header>

          <Container>
            <Title type={pokemon.types[0].type.name}>Base States</Title>
            {pokemon.stats.map(attribute => (
              <StatusBar key={attribute.stat.name}>
                <Attribute>{attribute.stat.name}</Attribute>
                <AttributeValue>{attribute.base_stat}</AttributeValue>

                <ContentBar>
                  <ProgressBar
                    type={pokemon.types[0].type.name}
                    borderWidth={0}
                    progress={100}
                    width={attribute.base_stat}
                    color={pokemon.color}
                    borderColor={pokemon.color}
                  />
                </ContentBar>
              </StatusBar>
            ))}

            <Title type={pokemon.types[0].type.name}>Abilities</Title>

            {pokemon.abilities.map(currentAbility => (
              <Ability key={currentAbility.ability.name}>
                {currentAbility.ability.name}
              </Ability>
            ))}
          </Container>
        </ScrollView>
      )}
    </>
  );
};

export default Details;
