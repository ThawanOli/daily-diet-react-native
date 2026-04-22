import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Title, Subtitle, Bold, Photo } from './styles';
import { Button } from '../../components/Button';
import successImg from '../../assets/Sucesso.png';
import failImg from '../../assets/Falha.png';

type RouteParams = {
  isInDiet: boolean;
}

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { isInDiet } = route.params as RouteParams;

  return (
    <Container>
      <Title type={isInDiet ? 'PRIMARY' : 'SECONDARY'}>
        {isInDiet ? 'Continue assim!' : 'Que pena!'}
      </Title>

      <Subtitle>
        {isInDiet ? (
          <>Você continua <Bold>dentro da dieta</Bold>. Muito bem!</>
        ) : (
          <>Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!</>
        )}
      </Subtitle>

      <Photo source={isInDiet ? successImg : failImg} />

      <Button 
        title="Ir para a página inicial" 
        style={{ width: 191, marginTop: 32 }}
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  );
}