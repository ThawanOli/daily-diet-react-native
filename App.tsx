import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Routes } from './src/routes';
import theme from './src/theme';
import { Home } from './src/screen/Home'; 

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
         />
    </ThemeProvider>
  );
}