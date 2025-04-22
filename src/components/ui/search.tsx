
import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function Search({ onSearch, placeholder = "Поиск ресторанов, кухонь...", className = "" }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-12 rounded-full border-bistro-200 focus-visible:ring-bistro-500"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-bistro-600"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="sr-only">Поиск</span>
      </Button>
    </form>
  );
}
