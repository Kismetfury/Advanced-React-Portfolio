import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack w="100%" bg="white" shadow="md" rounded="md" px="4" py="2" spacing="4">
      <Image src={imageSrc} alt={title} rounded="md" boxSize="120px" objectFit="cover" />
      <VStack align="flex-start" spacing="2" flex="1">
        <Heading as="h3" size="md">{title}</Heading>
        <Text color="gray.500">{description}</Text>
        <HStack>
          <Text color="blue.500" fontWeight="bold" fontSize="sm">Learn more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
  </HStack>
  );
};

export default Card;
