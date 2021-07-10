import styled from 'styled-components/native';
import { COLORS } from '../../../utils/styles/colors';
import { Text as TextStyle } from '../../../utils/styles/styles';

export const Text = styled(TextStyle)`
  font-size: 12px;
  font-weight: bold;
`;

interface IContainerITem {
  background: boolean;
}

export const ContainerItem = styled.TouchableOpacity`
  margin-right: 20px;
  height: 50%;
  min-width: 80px;
  border-radius: 24px;
  border-color: white;
  border-width: 0.5px;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ background }: IContainerITem) =>
    background ? COLORS.BACKGROUND_BUTTON : 'transparent'};
`;
