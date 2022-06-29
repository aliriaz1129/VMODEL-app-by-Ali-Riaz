import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'black',
   // primary: '#560CCE',
    primary: 'rgb(128,0,0)',
    secondary: 'rgb(160,82,45)',
    error: 'red',
  },
}
