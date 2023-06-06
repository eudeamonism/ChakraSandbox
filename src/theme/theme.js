import { extendTheme } from '@chakra-ui/react';
import {brand} from './libraries/brand'
import '@fontsource/poppins';



const theme = {
  fonts: {
    body: '"Poppins", sans-serif',
  },
  colors: {
    brand
  },
  semanticTokens:{
    colors: {
      navB: {
        default: 'brand.dark',
        _dark: 'brand.light',
      },
    }
  },
};

export default extendTheme(theme);
