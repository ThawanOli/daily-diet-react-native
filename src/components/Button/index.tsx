import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps; 
  showIcon?: boolean;
}

export function Button({ title, type = 'PRIMARY', showIcon = false, style, ...rest }: Props) {
  return (
    <Container 
      type={type} 
      style={style}
      {...rest}           
    >
      <Title>{title}</Title>
    </Container>
  );
}