import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

type Props = {
  showBackButton?: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ showBackButton }) => showBackButton ? 'center' : 'space-between'};
  margin-top: 30px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain' 
})`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2
}))``;

