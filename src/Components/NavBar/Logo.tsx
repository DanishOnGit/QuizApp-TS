import { Box} from "@chakra-ui/layout";
import{
Image
} from "@chakra-ui/react";
import logo from "../../images/logo-black.svg"
export function Logo() {
  return (
    <Box>
      <Image src={logo} boxSize="60px" alt="logo" />
    </Box>
  );
}
