import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import {Card,CardBody,CardFooter,CardHeader,Avatar,Box,Button,Divider,Flex,Grid,GridItem,Heading,Image,Tag,Text,useDisclosure, Center} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { getFormattedDate } from "../util/util";
import RsvpModal from "../components/RsvpModal";
import { BiTime, BiLocationPlus } from "react-icons/bi";
import { BsCurrencyRupee } from "react-icons/bs";
const EventDetailsPage = () => {
  const { id: eventId } = useParams();
  const {state: { events }} = useAppContext();
  const event = events.find(({ id }) => id === eventId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex as="main" flexDir="column" gap={4} p={8}>
      <Navbar />
      <Divider />
      <Grid gridTemplateColumns={"3fr 2fr"}>
        <GridItem>
          <Flex p={4} gap={8} flexDir="column">
            <Heading>{event.title}</Heading>
            <Flex flexDir="column">
              <Text>Hosted By:</Text>
              <Text fontWeight="bold">{event.hostedBy}</Text>
            </Flex>
            <Box height="20rem">
              <Image
                src={event.eventThumbnail}
                alt={event.title}
                h="full"
                objectFit="cover"
              />
            </Box>
            <Heading fontSize="1.5rem">Details</Heading>
            <Text w="30rem">{event.eventDescription}</Text>
            <Flex flexDir="column" gap={2}>
              <Heading fontSize="1.5rem">Additional Information:</Heading>
              <Text>Dress code: {event.additionalInformation.dressCode}</Text>
              <Text>
                Age Restrictions: {event.additionalInformation.ageRestrictions}
              </Text>
            </Flex>
            <Heading fontSize="1.5rem">Event Tags:</Heading>
            <Flex gap={2}>
              {event.eventTags.map((tag, i) => (
                <Tag key={i} size="lg" bg="pink.300" color="white">
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex flexDir="column" gap={8} alignItems="center">
            <Card w="25rem">
              <CardHeader display={'flex'} gap={5} alignItems={'center'}>
				<Text><BiTime /></Text>
                <Text>
					{`${getFormattedDate(event.eventStartTime)} to`}
					{getFormattedDate(event.eventEndTime)}
				</Text>
              </CardHeader>
			  <Divider color={'grey.700'}/>
              <CardBody display={'flex'} gap={5} alignItems={'center'}>
				<Text><BiLocationPlus /></Text>
                <Text>
					{event.location} <br />
					{event.address}
				</Text>
              </CardBody>
			  <Divider color={'grey.700'}/>
              <CardFooter display={'flex'} gap={5} alignItems={'center'}> <BsCurrencyRupee />{event.price}</CardFooter>
            </Card>
            <Heading fontSize="1.5rem">{`Speakers: (${event.speakers.length})`}</Heading>
            <Flex gap={4}>
              {event.speakers.map((speaker) => {
                return (
                  <Flex gap={2} key={speaker.name}>
                    <Flex
                      flexDir="column"
                      p={4}
                      alignItems="center"
                      border="1px solid #f7f7f7"
                      boxShadow="0 0 8px 0 rbga(0,0,0,0.3)"
                      borderRadius="lg"
                    >
                      <Avatar src={speaker.image} size="md" />
                      <Text fontWeight="bold">{speaker.name}</Text>
                      <Text>{speaker.designation}</Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>

            <Button
              colorScheme="pink"
              alignSelf="center"
              w="10rem"
              onClick={onOpen}
              isDisabled={event?.RSVP}
            >
              {event?.RSVP ? "Already RSVPed" : "RSVP"}
            </Button>
            <RsvpModal isOpen={isOpen} onClose={onClose} event={event} />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default EventDetailsPage;