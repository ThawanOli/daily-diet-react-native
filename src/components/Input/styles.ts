import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-bottom: 4px;
`;

export const InputElement = styled.TextInput`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;