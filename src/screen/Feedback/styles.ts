import styled, { css } from 'styled-components/native';

export type TitleColorProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: TitleColorProps;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 32px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: 24px;
    color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;
  margin-top: 8px;
`;

export const Bold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Photo = styled.Image`
    width: 224px;  
    height: 161px; 
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #000000;
    border-radius: 12px;
    resize-mode: contain;
`;