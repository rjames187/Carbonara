import * as React from "react";
import { Text, Flex, Spacer, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex>
        <Text>Carbonara</Text>
        <Spacer />
        <Link href="#" textDecoration={"none"}>
          <Text mr={"1rem"}>Need</Text>
        </Link>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"1rem"}>Calculate</Text>
        </Link>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"1rem"}>The Crew</Text>
        </Link>

      </Flex>
    </>
  );
}
