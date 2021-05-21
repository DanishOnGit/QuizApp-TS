import { Box, Heading, Text } from "@chakra-ui/layout";
import { MdSettings } from "react-icons/md";

import {
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { colors } from "../../Database";
export function Instructions() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h4">Instructions</Heading>
        <UnorderedList listStyleType="none" textAlign="left">
          <ListItem m="0.5rem 0">
            <ListIcon as={MdSettings} color="green.500" />
            Each correct answer awards 2 marks.
          </ListItem>
          <ListItem m="0.5rem 0">
            <ListIcon as={MdSettings} color="green.500" />
            Each incorrect answer deducts 1 mark.{" "}
          </ListItem>
          <ListItem m="0.5rem 0">
            <ListIcon as={MdSettings} color="green.500" />
            You can also skip any question.
          </ListItem>
          <ListItem m="0.5rem 0">
            <ListIcon as={MdSettings} color="green.500" />
            Score will be shown at the end of the Quiz.
          </ListItem>
        </UnorderedList>
        <Button
          bgColor={colors.orange[700]}
          color="whiteAlpha.900"
          m="1rem"
          _hover={{
            background: "tomato",
          }}
        >
          Start Quiz <ChevronRightIcon />
        </Button>
      </Box>
    </>
  );
}
