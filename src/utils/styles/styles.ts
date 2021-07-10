import styled from 'styled-components/native';
import { COLORS } from './colors';

interface IText {
  bold?: boolean;
  size?: number;
}

export const Text = styled.Text`
  color: ${COLORS.TEXT};
  font-size: ${({ size }: IText) => size || 14}px;
  font-weight: ${({ bold }: IText) => (bold ? 'bold' : 'normal')};
`;
