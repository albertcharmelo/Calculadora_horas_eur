import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

function ModifyHours({ isOpen, onClose, setHoursPrice }) {
  const inputHoursPrice = useRef(null);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input
                  placeholder="Introduzca monto por hora"
                  ref={inputHoursPrice}
                  defaultValue={5.5}
                />
                <InputRightElement />
              </InputGroup>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setHoursPrice(inputHoursPrice.current.value);
                onClose();
              }}
            >
              Guardar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cerrar{" "}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModifyHours;
