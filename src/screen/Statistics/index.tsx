import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { mealsGetAll } from '../../storage/meal/mealsGetAll';

import { 
  Container, 
  Content, 
  StatisticsTitle, 
  CardFull, 
  CardHalf, 
  Row, 
  Value, 
  Label,
  Header,
  Percentage,
  BackButton,
  BackIcon
} from './styles';

export function Statistics() {
  const [meals, setMeals] = useState<any[]>([]);
  const navigation = useNavigation();
  const totalMeals = meals.length;
  const mealsInDiet = meals.filter(m => m.isItemInDiet === 'yes').length;
  const mealsOffDiet = totalMeals - mealsInDiet;
  const percentage = totalMeals > 0 ? (mealsInDiet / totalMeals) * 100 : 0;
  const bestStreak = meals.reduce((acc, meal) => {
    if (meal.isItemInDiet === 'yes') {
      acc.current += 1;
      acc.best = Math.max(acc.best, acc.current);
    } else {
      acc.current = 0;
    }
    return acc;
  }, { current: 0, best: 0 }).best;

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));

  return (
    <Container type={percentage >= 50 ? 'PRIMARY' : 'SECONDARY'}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        
        <Percentage>{percentage.toFixed(2).replace('.', ',')}%</Percentage>
        <Label>das refeições dentro da dieta</Label>
      </Header>

      <Content>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>

        <CardFull>
          <Value>{bestStreak}</Value>
          <Label>melhor sequência de pratos dentro da dieta</Label>
        </CardFull>

        <CardFull>
          <Value>{totalMeals}</Value>
          <Label>refeições registradas</Label>
        </CardFull>

        <Row>
          <CardHalf type="PRIMARY">
            <Value>{mealsInDiet}</Value>
            <Label>refeições dentro da dieta</Label>
          </CardHalf>

          <CardHalf type="SECONDARY">
            <Value>{mealsOffDiet}</Value>
            <Label>refeições fora da dieta</Label>
          </CardHalf>
        </Row>
      </Content>
    </Container>
  );
}