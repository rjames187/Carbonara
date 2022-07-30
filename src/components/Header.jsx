import * as React from "react";
import { Text, Flex, Spacer, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <>

      <Flex p={"3rem 10%"} align={"center"} position={"relative"}>
        <Text className="logo-text" fontSize={"2.4rem"}>Carbonara</Text>
        <Spacer />
        <Link href="/need" textDecoration={"none"}  >
          <Text className="navbar-text" mr={"8rem"} color={"#FFF"} fontSize={"1.4rem"}>Need</Text>
        </Link>
        <Link href="/calculate" textDecoration={"none"} >
          <Text className="navbar-text" mr={"8rem"} color={"#FFF"} fontSize={"1.4rem"}>Calculate</Text>
        </Link>
        <Link href="/about" textDecoration={"none"} >
          <Text className="navbar-text" mr={"1rem"} color={"#FFF"} fontSize={"1.4rem"}>The Crew</Text>
        </Link>
      </Flex>
    </>
    // pls look at footer.jsx
  );
}
