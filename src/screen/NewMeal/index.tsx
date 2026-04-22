import { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ScrollView } from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  BackIcon, 
  BackButton, 
  Form, 
  ContentRow, 
  Label 
} from './styles';
import { mealCreate } from '../../storage/meal/mealCreate';

export function NewMeal() {
  const navigation = useNavigation();
  const [isItemInDiet, setIsItemInDiet] = useState<'yes' | 'no' | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  function handleGoBack() {
    navigation.goBack();
  }
  async function handleNewMealRegister() {
    try {
      const data = { name, description, date, hour, isItemInDiet };
      await mealCreate(data);
      navigation.navigate('feedback', { isInDiet: isItemInDiet === 'yes' });
  } catch (error) {
    console.log(error);
    alert('Não foi possível cadastrar a refeição.');
  }
}
  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
        <Title>Nova refeição</Title>
      </Header>

      <Form>
        <Input 
        label="Nome" 
        onChangeText={setName} 
        value={name}
        />
        <Input 
          label="Descrição" 
          multiline 
          onChangeText={setDescription}
          value={description}
          numberOfLines={4} 
          style={{ textAlignVertical: 'top', height: 120, minHeight: 120, maxHeight: 120 }} 
          />

       <ContentRow style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ flex: 1 }}>
            <Input 
              label="Data" 
              onChangeText={setDate} 
              value={date} 
            />
          </View>

          <View style={{ width: 20 }} /> 

          <View style={{ flex: 1 }}>
            <Input 
              label="Hora" 
              onChangeText={setHour} 
              value={hour} 
            />
          </View>
        </ContentRow>

        <Label style={{ marginTop: 24, marginBottom: 8 }}>
          Está dentro da dieta?
        </Label>

        <ContentRow>
          <Button 
            title="Sim" 
            type="PRIMARY" 
            style={{ flex: 1, opacity: isItemInDiet === 'yes' ? 1 : 0.4 }} 
            onPress={() => setIsItemInDiet('yes')}
          />          
          <View style={{ width: 8 }} />

          <Button 
            title="Não" 
            type="SECONDARY" 
            style={{ flex: 1, opacity: isItemInDiet === 'no' ? 1 : 0.4 }} 
            onPress={() => setIsItemInDiet('no')}
          />
        </ContentRow>
        <View style={{  height: 40 }} />
       <Button 
          title="Cadastrar refeição" 
          onPress={handleNewMealRegister}
          style={{ marginBottom: 40 }} 
        />
      </Form>
    </Container>
  );
}