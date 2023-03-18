import React from "react";
import {
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import ModifyHours from "./modals/ModifyHours";

const CardAddHours = ({ hours, setHours, setHoursPrice }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleHours = (value) => {
    setHours(value);
  };

  return (
    <div className="lg:w-1/3 sm:w-full  relative">
      <ModifyHours
        isOpen={isOpen}
        onClose={onClose}
        setHoursPrice={setHoursPrice}
      />
      <Card className="w-full" align="center">
        <CardHeader className="mt-14 sm:mt-15 lg:mt-0">
          <Heading size="md">Calculadora Horas España</Heading>
        </CardHeader>
        <CardBody className="w-3/4">
          <FormControl>
            <FormLabel>Cantidad de Horas</FormLabel>
            <Input
              type="number"
              defaultValue={1}
              onChange={(e) => handleHours(e.target.value)}
            />
          </FormControl>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <span className="absolute top-2 right-4 cursor-pointer">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<EditIcon />} onClick={onOpen}>
              Cambiar precio/hora
            </MenuItem>
          </MenuList>
        </Menu>
      </span>
    </div>
  );
};

export default CardAddHours;
