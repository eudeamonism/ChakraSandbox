import {
  HStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineDown } from 'react-icons/ai';

const MenuBtnComponent = ({name}) => {

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        color='navB'
        rightIcon={<AiOutlineDown color='navB' />}
      >
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem color='navB'>Hello</MenuItem>
        <MenuItem>Hello</MenuItem>
        <MenuItem>Hello</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuBtnComponent;
