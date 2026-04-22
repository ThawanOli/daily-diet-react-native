import React from 'react';
import { Header } from '../../components/Header';
import { PercentCard } from '../../components/PercentCard'; 
import { Container } from './styles';
import { MealCard } from '../../components/MealCard';
import { Button } from '../../components/Button';
import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { mealsGetAll } from '../../storage/meal/mealsGetAll';
import { groupMealsByDate } from '../../utils/groupMealsByDate';
import { TouchableOpacity, Text, SectionList, View } from 'react-native';

const MEALS = [
  {
    title: '12.08.22',
    data: [
      { id: '1', hour: '20:00', description: 'X-Tudo', statusType: 'OUT_DIET' },
      { id: '2', hour: '16:00', description: 'Whey Protein', statusType: 'IN_DIET' },
    ]
  },
  {
    title: '11.08.22',
    data: [
      { id: '3', hour: '12:00', description: 'Arroz, feijão e frango', statusType: 'IN_DIET' },
    ]
  }
];

export function Home() {
    const navigation = useNavigation<any>();
    const [meals, setMeals] = useState<any[]>([]); 

    async function fetchMeals(){
      try {
        const data = await mealsGetAll();
        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    }
    function calculatePercentage() {
      if (meals.length === 0) return "0,00";
      const mealsInDiet = meals.filter(meal => meal.isItemInDiet === 'yes').length;
      const percentage = (mealsInDiet / meals.length) * 100;
      return percentage.toFixed(2).replace('.', ',');
    }
    const numericPercentage = meals.length > 0 
      ? (meals.filter(meal => meal.isItemInDiet === 'yes').length / meals.length) * 100 
      : 0;
    const percentageType = numericPercentage >= 50 ? 'PRIMARY' : 'SECONDARY';

    useFocusEffect(useCallback(() => {
      fetchMeals();
    }, []));

  function handleNewMeal() {
    navigation.navigate('newmeal');
    console.log("Deu certo o erro")
  }
 
  return (
    <Container>
      <Header />
      <TouchableOpacity onPress={() => navigation.navigate('statistics')}>
      <PercentCard 
        percentage={calculatePercentage()}
        type={percentageType}
        />
      </TouchableOpacity>
      
      <Text style={{ marginTop: 40, marginBottom: 8 }}>Refeições</Text>
      
      <Button 
        title="Nova refeição" 
        showIcon 
        onPress={handleNewMeal}
      />
      <SectionList 
        sections={groupMealsByDate(meals)}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('details', { meal: item })}
            activeOpacity={0.7}
            >
          <MealCard 
            hour={item.hour} 
            description={item.name} 
            statusType={item.isItemInDiet === 'yes' ? 'IN_DIET' : 'OUT_DIET' as any} 
          />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            marginTop: 32, 
            marginBottom: 8,
            color: '#1B1D1E' 
          }}>
            {title}
          </Text>
        )}

        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', marginTop: 50 }}>
            Nenhuma refeição registrada ainda.
          </Text>
        )}

        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </Container>
  );
}