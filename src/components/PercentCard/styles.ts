import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export type PercentCardTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: PercentCardTypeStyleProps;
}

export const Container = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;