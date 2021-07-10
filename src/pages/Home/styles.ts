import styled from 'styled-components/native';
import { COLORS } from '../../utils/styles/colors';
import { Text as TextStyle } from '../../utils/styles/styles';
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.PRIMARY};
`;

export const Toolbar = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ToolbarItems = styled.View`
  flex-direction: row;
  width: 45%;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContainerLists = styled.View`
  flex: 1;
  padding-right: 20px;
  padding-left: 20px;
`;

export const ContainerCategories = styled.View`
  height: 100px;
  width: 100%;
  align-items: center;
`;

export const ContainerListMain = styled.View`
  background-color: blue;
  height: 200px;
  width: 100%;
`;

export const Text = styled(TextStyle)``;
