import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex as="main" flexDir="column" gap={8}>
      <Heading as="h1" size="lg" mt={4} textAlign="center">
        meetup--app-mcr-8
      </Heading>
    </Flex>
  );
};

export default HomePage;
