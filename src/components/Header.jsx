import * as React from "react";
import { Text, Flex, Spacer, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      
        <Flex p={"5px 10%"} textAlign={"center"}>
          
          <Text className="logo-text" fontSize={"24px"}>Carbonara</Text>
          <Spacer />
          <Link href="#" textDecoration={"none"} color={"#000"} >
            <Text mr={"5rem"}>Need</Text>
          </Link>
          <Link href="#" textDecoration={"none"} color={"#000"}>
            <Text mr={"5rem"}>Calculate</Text>
          </Link>
          <Link href="#" textDecoration={"none"} color={"#000"}>
            <Text mr={"0.6rem"}>The Crew</Text>
          </Link>
            
        </Flex>
      
    </>
    // pls look at footer.jsx
  );
}
