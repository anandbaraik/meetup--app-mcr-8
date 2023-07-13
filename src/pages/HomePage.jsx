import React from "react";
import { Divider, Flex, Heading, Select, SimpleGrid, Box,Card,CardBody,Image,Text } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import { getFilteredEvents, getSearchedEvents, getFormattedDate } from "../util/util";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const {state: { events, filter, search },dispatch} = useAppContext();

  const filterHandler = (e) => {
    dispatch({ type: "SET_FILTER", payload: e.target.value });
  };

  const filteredEvents = getFilteredEvents(events, filter);
  const eventsList = getSearchedEvents(filteredEvents, search);

  return (
    <Flex as="main" flexDir="column" gap={4} p={8}>
      <Navbar />
      <Divider />
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>Meetup Events</Heading>
        <Select value={filter} w="15rem" onChange={filterHandler}>
          <option value="Both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </Select>
      </Flex>
      <SimpleGrid minChildWidth="20rem" spacing={10} justifyItems="center">
        {eventsList.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id}>
            <Card w="20rem">
				<CardBody p={0}>
					<Box pos="relative">
						<Image
							src={event.eventThumbnail}
							alt={event.title}
							h="15rem"
							objectFit="cover"
							borderTopRadius="0.5rem"
						/>
						<Text
							bg="white"
							p={2}
							borderRadius="lg"
							position="absolute"
							top="1rem"
							left="1rem"
						>
							{event.eventType} Event
						</Text>
					</Box>
					<Flex flexDir="column" gap={1} p={4}>
						<Box fontSize="0.9rem" color="gray.700">
							<Text>{getFormattedDate(event.eventStartTime)}</Text>
						</Box>
						<Heading fontSize="1.2rem">{event.title}</Heading>
					</Flex>
				</CardBody>
				</Card>
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default HomePage;