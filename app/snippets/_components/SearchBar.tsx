import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search snippets by title, language, or author..."
          className="w-full pl-12 pr-4 py-4 bg-white/10 text-white
            rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200
            placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
    </div>
  );
};

export default SearchBar;
