import { HStack, Button, Text } from '@chakra-ui/react';
import { AiFillBulb, AiFillSound } from 'react-icons/ai';
import {ColorModeSwitcher} from '../ColorModeSwitcher'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <HStack spacing="8">
        <Button
          variant="ghost"
          color="brand.bg"
          leftIcon={<AiFillBulb color="error" />}
          rightIcon={<AiFillSound color="blue" />}
        >
          main
        </Button>
        <Text color='error'>NavLink</Text>
        <Text>NavLink</Text>
        <Text>NavLink</Text>
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
};

export default NavBar;
