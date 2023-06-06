import { HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import MenuBtnComponent from './MenuBtnComponent/MenuBtnComponent';


const NavBar = (name) => {
  const navText = useColorModeValue('brand.dark', 'brand.light');
  
  return (
    <HStack justifyContent="space-between">
      <HStack spacing="8">
        <MenuBtnComponent name='menu'/>
        <Text color={navText}>NavLink</Text>
        <Text color="cola">NavLink</Text>
      </HStack>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
