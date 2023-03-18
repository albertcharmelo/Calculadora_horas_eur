import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Box,
  Heading,
  Text,
  StackDivider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
const ResultsHours = ({ eur, usd, hours, hoursPrice }) => {
  const [loadingText, setLoadingText] = useState("Cargando..");
  return (
    <div className="w-full sm:w-full lg:w-1/3 relative">
      <Card>
        <CardHeader>
          <Heading size="md">Resultados</Heading>
        </CardHeader>

        <CardBody>
          <HStack divider={<StackDivider />} justify={"center"} spacing={"50"}>
            <Box>
              <Stat>
                <StatLabel>Euros (España)</StatLabel>
                <StatNumber>
                  {isFinite(parseFloat(hours * hoursPrice).toFixed(2))
                    ? "€" + parseFloat(hours * hoursPrice).toFixed(2)
                    : loadingText}
                </StatNumber>
                <StatHelpText>
                  {new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
                </StatHelpText>
              </Stat>
            </Box>
            <Box>
              <Stat>
                <StatLabel>Dólares USDT (EEUU)</StatLabel>
                <StatNumber>
                  {isFinite(parseFloat(hours * hoursPrice).toFixed(2) / eur)
                    ? "$" +
                      (parseFloat(hours * hoursPrice).toFixed(2) / eur).toFixed(
                        2
                      )
                    : loadingText}
                </StatNumber>
                <StatHelpText>
                  {new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
                </StatHelpText>
              </Stat>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResultsHours;
