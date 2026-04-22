import React from 'react';
import { Container, Title, Subtitle, Icon, PercentCardTypeStyleProps } from './styles';

type Props = {
  percentage: string;
  type?: PercentCardTypeStyleProps;
}

export function PercentCard({ percentage, type = 'PRIMARY' }: Props) {
  return (
    <Container type={type}>
      <Icon color={type === 'PRIMARY' ? '#639339' : '#BF3B44'} />
      <Title>{percentage}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}