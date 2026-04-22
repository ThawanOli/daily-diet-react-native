import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Content, Title, Description, Label, DateHour } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Alert, Platform } from 'react-native';
import { mealRemoveByName } from '../../storage/meal/mealRemoveByName';

type RouteParams = {
  meal: {
    name: string;
    description: string;
    date: string;
    hour: string;
    isItemInDiet: string;
  }
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params as RouteParams;
  
  async function mealRemove() {
  try {
    await mealRemoveByName(meal.name);
    navigation.navigate('home');
  } catch (error) {
    console.log(error);
    Alert.alert('Remover Refeição', 'Não foi possível remover a refeição.');
  }
}

function handleEditMeal() {
  // @ts-ignore
  navigation.navigate('newmeal', { meal: meal as any });
}

function handleDeleteMeal() {
  console.log("BOTÃO EXCLUIR CLICADO!");

  // Se estiver no navegador, usa o window.confirm nativo do browser
  if (Platform.OS === 'web') {
    const confirm = window.confirm("Deseja realmente remover o registro da refeição?");
    if (confirm) {
      mealRemove();
    }
  } else {
    // Se estiver no celular, usa o Alert bonitão do sistema
    Alert.alert(
      'Remover',
      'Deseja realmente remover o registro da refeição?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => mealRemove() }
      ]
    );
  }
}
  return (
    <Container>
      <Header title="Refeição" />
      
      <Content>
        <Title>{meal.name}</Title>
        <Description>{meal.description}</Description>

        <Label>Data e hora</Label>
        <DateHour>{meal.date} às {meal.hour}</DateHour>

      </Content>

      <Button title="Editar refeição" 
      onPress={handleEditMeal} 
      />

      <Button title="Excluir refeição" 
      type="SECONDARY" 
      onPress={handleDeleteMeal}
      />
    </Container>
  );
}