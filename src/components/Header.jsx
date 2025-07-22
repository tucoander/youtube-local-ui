import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/youtube-local.ico";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Box bg="#000000" px={4} py={2} boxShadow="sm">
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
        gap={4}
        flexWrap="wrap"
      >
        {/* Logo + nome */}
        <Flex align="center" gap={2} minW="200px">
          <IconButton
            icon={<FiMenu />}
            variant="ghost"
            color="white"
            aria-label="Menu"
          />
          {logo && (
            <Image src={logo} alt="Logo" boxSize="30px" objectFit="contain" />
          )}
          <Text fontWeight="bold" fontSize="lg" color="white">
            YouTube
            <Text as="span" color="red.400">
              Local
            </Text>
            <Text as="span" fontSize="xs" ml={1} color="gray.400">
              BR
            </Text>
          </Text>
        </Flex>

        {/* Campo de busca */}
        <Box flex="1" maxW="600px" w="100%">
          <form onSubmit={handleSearch}>
            <InputGroup
              size="md"
              bg="#121212"
              borderRadius="full"
              border="1px solid #303030"
              overflow="hidden"
              w="100%"
            >
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar"
                bg="#121212"
                color="white"
                border="none"
                _focus={{ boxShadow: "none" }}
                _placeholder={{ color: "gray.500" }}
                px={4}
              />
              <InputRightElement width="3rem" justifyContent="center">
                <Button
                  type="submit"
                  bg="transparent"
                  borderRadius="full"
                  _hover={{ bg: "#222" }}
                  _active={{ bg: "#333" }}
                  px={2}
                  minW="auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    width="20"
                    height="20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>

        {/* Espaço reservado para alinhamento ou ícones futuros */}
        <Box w="40px" />
      </Flex>
    </Box>
  );
}
