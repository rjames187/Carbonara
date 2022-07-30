import * as React from "react";
import { Text, Flex, Spacer, Link } from "@chakra-ui/react";
import '../App.css';
export default function Footer() {
  return (
    <>
      <Flex class="footer" flexDirection={"column"} justifyContent={"flex-start"} w={"100%"} bgColor={"#1a1a1a"} h={"50rem"} p={"7rem 7%"}>
        <Text color={"#ffffff"} className="logo-text" fontSize={"2.4rem"} fontWeight={"800"}>Carbonara</Text>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"1rem"} mb={"2rem"} mt={"7.5rem"} fontSize={"1.5rem"} color={"#ffffff"} fontWeight={"700"}>Home</Text>
        </Link>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"1rem"} my={"2rem"} color={"#ffffff"} fontSize={"1.5rem"} fontWeight={"700"}>Need</Text>
        </Link>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"1rem"} my={"2rem"} color={"#ffffff"} fontSize={"1.5rem"} fontWeight={"700"}>Calculate</Text>
        </Link>
        <Link href="#" textDecoration={"none"}>
          <Text mr={"1rem"} my={"2rem"} color={"#ffffff"} fontSize={"1.5rem"} fontWeight={"700"}>The Crew</Text>
        </Link><h2 fontSize={"19rem"}  className="right-footer-position big-font font-white ">CONTACT</h2>
      </Flex>
   
    </>
  );
}
