import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
export type StatisticsTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: StatisticsTypeStyleProps;
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  padding: 33px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
`;

export const StatisticsTitle = styled.Text`
  margin-bottom: 20px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 14px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const CardBase = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const CardFull = styled(CardBase)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const CardHalf = styled(CardBase)<Props>`
  width: 48%;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 24px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Label = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 14px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const Header = styled.View`
  width: 100%;
  padding: 50px 24px;
  align-items: center;
  justify-content: center;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 32px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 50px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK // ou uma lógica para mudar de cor
}))``;