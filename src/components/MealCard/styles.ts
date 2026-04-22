import styled from 'styled-components/native';

export type MealStatusTypeStyleProps = 'IN_DIET' | 'OUT_DIET';

export const Container = styled.View`
  width: 100%;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0 12px;
`;

export const Description = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Status = styled.View<{ type: MealStatusTypeStyleProps }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, type }) => type === 'IN_DIET' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;