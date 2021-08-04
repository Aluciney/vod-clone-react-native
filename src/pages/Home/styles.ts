import styled, { ThemeProps } from 'styled-components/native';
import { CustomThemeProps } from '../../contexts/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
`;
