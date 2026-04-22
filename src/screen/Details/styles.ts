import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 20px;
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${theme.COLORS.GRAY_2};
  `};
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 14px;
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-bottom: 8px;
`;
export const DateHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${theme.COLORS.GRAY_2};
  `};
`;