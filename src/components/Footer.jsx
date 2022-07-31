import * as React from "react";
import { Text, Flex, Spacer, Link } from "@chakra-ui/react";
import '../App.css';
export default function Footer() {
  return (
    <>
      <Flex class="footer" flexDirection={"column"} justifyContent={"flex-start"} w={"100%"} bgColor={"#1a1a1a"} p={"7rem 7%"} position={"relative"}>
        <Text color={"#ffffff"} className="logo-text" fontSize={"3.2rem"} fontWeight={"500"} mb={"2.8rem"}>Carbonara</Text>

        <Link href="/" textDecoration={"none"}>
          <Text mr={"1rem"} my={"2rem"} color={"#ffffff"} fontSize={"1.5rem"} fontWeight={"500"} fontFamily={"poppins"}>Home</Text>
        </Link>
        <Link href="/calculate" textDecoration={"none"}>
          <Text mr={"1rem"} my={"2rem"} color={"#ffffff"} fontSize={"1.5rem"} fontWeight={"500"} fontFamily={"poppins"}>Calculate</Text>
        </Link>
        <Link href="/about" textDecoration={"none"}>
          <Text mr={"1rem"} my={"2rem"} color={"#ffffff"} fontSize={"1.5rem"} fontWeight={"500"} fontFamily={"poppins"}>The Crew</Text>
        </Link>
      </Flex>
   
    </>
  );
}
