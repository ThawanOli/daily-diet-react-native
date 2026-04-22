import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Logo, Avatar, Title, BackButton, BackIcon } from './styles';
import logoImg from '../../assets/logo.png';

type Props = {
  showBackButton?: boolean;
  title?: string;
}

export function Header({ showBackButton = false, title }: Props) {
  const navigation = useNavigation();

  return (
    <Container showBackButton={showBackButton}>
      {showBackButton ? (
        <>
          <BackButton onPress={() => navigation.navigate('home')}>
            <BackIcon />
          </BackButton>
          {title && <Title>{title}</Title>}
          {/* View vazia para manter o título centralizado no flexbox */}
          <React.Fragment /> 
        </>
      ) : (
        <>
          <Logo source={logoImg} />
          <Avatar source={{ uri: 'https://github.com/thawanoli.png' }} />
        </>
      )}
    </Container>
  );
}