import * as React from "react";
import { Text, Flex, Spacer, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex p={"3rem 10%"} align={"center"} position={"relative"}>
        <Text className="logo-text" fontSize={"2.4rem"}>Carbonara</Text>
        <Spacer />
        <Link href="/" textDecoration={"none"} >
          <Text className="navbar-text" mr={"8rem"} color={"white"} fontSize={"1.4rem"}>Home</Text>
        </Link>
        <Link href="/calculate" textDecoration={"none"} >
          <Text className="navbar-text" mr={"8rem"} color={"white"} fontSize={"1.4rem"}>Calculate</Text>
        </Link>
        <Link href="/about" textDecoration={"none"} >
          <Text className="navbar-text" mr={"1rem"} color={"white"} fontSize={"1.4rem"}>The Crew</Text>
        </Link>
      </Flex>
    </>
    // pls look at footer.jsx
  );
}
