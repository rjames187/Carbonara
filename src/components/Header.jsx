import * as React from "react";
import { Text, Flex, Spacer, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex>
        <Text>Carbonara</Text>
        <Spacer />
        <Link href="#" textDecoration={"none"}>
          <Text mr={"10px"}>Need</Text>
        </Link>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"10px"}>Calculate</Text>
        </Link>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"10px"}>The Crew</Text>
        </Link>
        

      </Flex>
    </>
    // pls look at footer.jsx
  );
}