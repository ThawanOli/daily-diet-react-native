import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  height: 100vh; /* A propriedade deve ficar aqui, dentro das crases! */
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Header = styled.View`
  width: 100%;
  height: 132px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  padding: 0 24px;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 32
  },
  showsVerticalScrollIndicator: false
})`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -30px;
  padding: 40px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``;

export const ContentRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
  margin-bottom: 8px;
`;
