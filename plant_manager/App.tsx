import React from 'react';
import { useFonts, Jost_600SemiBold, Jost_400Regular } from '@expo-google-fonts/jost';

// routes
import Routes from './src/routes/app.routes';

// components
import Loading from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  return (
    fontsLoaded ? <Routes /> : <Loading />
  );
}
