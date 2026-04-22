import React from 'react';
import { Container, Hour, Divider, Description, Status, MealStatusTypeStyleProps } from './styles';

type Props = {
  hour: string;
  description: string;
  statusType: MealStatusTypeStyleProps;
}

export function MealCard({ hour, description, statusType }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Divider />
      <Description numberOfLines={1}>{description}</Description>
      <Status type={statusType} />
    </Container>
  );
}