import {Box,Flex,Input,InputGroup,InputLeftElement,Text, Image} from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { Link } from "react-router-dom";
import meetUpLogo from "../assets/meetup.svg"
const Navbar = () => {
    const {state: { search },dispatch} = useAppContext();
    return (
      <Flex w="full" justifyContent="space-between">
        <Link to="/">
          <Image src={meetUpLogo} alt="meetup"/>
        </Link>
        <Box w="15rem">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
                </svg>
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by title and tags"
              value={search}
              onChange={(e) => {
                dispatch({ type: "SET_SEARCH", payload: e.target.value })
              }}
            />
          </InputGroup>
        </Box>
      </Flex>
    );
  };

  export default Navbar;