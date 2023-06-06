import React from 'react';
import { ChakraProvider, Box, VStack, Grid } from '@chakra-ui/react';

import GradientText from './components/GradientText';
import NavBar from './components/NavBar';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box textAlign="center">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <GradientText />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
