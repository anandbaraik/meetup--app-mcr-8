import {Button,Divider,FormControl,FormLabel,Input,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay, Text, useToast} from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import { useState } from "react";
const RsvpModal = ({ isOpen, onClose, event }) => {
    const { dispatch } = useAppContext();
    const toast = useToast()
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
    });

    const submitHandler = () => {
        if (userDetail.name.trim() === "" || userDetail.email.trim() === "") {
            toast({
                title: 'Please enter both details',
                status: 'error',
                duration: 1000,
                position: 'top-right',
                isClosable: true,
            })
            return;
        }
        dispatch({ type: "MAKE_RSVP", payload: event.id });
        toast({
            title: 'RSVPed',
            status: 'success',
            duration: 1000,
            position: 'top-right',
            isClosable: true,
        })
        onClose();
    };

    return (
      <Modal isOpen={isOpen} onClose={onClose} variant="pink" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="1rem">
          <ModalCloseButton />
          <ModalHeader fontSize="1.2rem">
            Complete your RSVP
            <Text fontSize={'sm'} color={'grey'}>Fill in your personal information</Text>
          </ModalHeader>
          <Divider color={'grey.700'}/>
          <ModalBody pb={4} mt={4}>
            <FormControl isRequired>
              <FormLabel fontSize="1.2rem">Name: </FormLabel>
              <Input type="text" name="name" value={userDetail.name}
              onChange={(e) => setUserDetail(prev => ({...prev, name:e.target.value}))}/>
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel fontSize="1.2rem">Email:</FormLabel>
              <Input type="email" name="email" value={userDetail.email}
                onChange={(e) => setUserDetail(prev => ({...prev, email:e.target.value}))}/>
            </FormControl>
            {
                event?.isPaid && (
                    <Text fontSize={'sm'} color={'grey.400'} mt={5}>
                        * You have to make the payment at the venue
                    </Text>
                )
            }
          </ModalBody>
          <Divider color={'grey.700'}/>
          <ModalFooter>
            <Button colorScheme="pink" onClick={submitHandler}>
              RSVP
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
};
export default RsvpModal;