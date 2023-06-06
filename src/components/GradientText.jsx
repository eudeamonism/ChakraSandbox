import {
  Box,
  Button,
  useColorModeValue,
  useColorMode,
  Text,
} from '@chakra-ui/react';

function GradientText() {
  const color = useColorModeValue("linear(to-l, red, yellow)", "linear(to-l, #FF0080, #7928CA)");

  return (
    <>
      <Text
        bgGradient={color}
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        This box's style will change based on the color mode.
      </Text>
      <Text fontSize='2xl' fontWeight='bold' textShadow='1px 1px red'>Text with Shadows</Text>
    </>
  );
}

export default GradientText;
