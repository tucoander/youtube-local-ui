// src/components/SearchBar.jsx
import { Input, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <HStack spacing={2}>
        <Input
          placeholder="Pesquisar vídeos no YouTube"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" colorScheme="red">
          Buscar
        </Button>
      </HStack>
    </form>
  );
}

export default SearchBar;
