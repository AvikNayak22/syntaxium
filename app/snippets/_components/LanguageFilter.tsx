import { Tag, X } from "lucide-react";
import Image from "next/image";

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string | null;
  setSelectedLanguage: (language: string | null) => void;
}

const LanguageFilter = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}: LanguageFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/10">
        <Tag className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-400">Languages:</span>
      </div>

      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() =>
            setSelectedLanguage(lang === selectedLanguage ? null : lang)
          }
          className={`
            group relative px-3 py-1.5 rounded-lg transition-all duration-200
            ${
              selectedLanguage === lang
                ? "text-white bg-white/20 border-2 border-white/20"
                : "text-gray-400 hover:text-gray-300 bg-white/10 hover:bg-white/20 border border-white/10"
            }
          `}
        >
          <div className="flex items-center gap-2">
            <Image
              src={`/${lang}.png`}
              alt={lang}
              className="w-4 h-4 object-contain"
              width={200}
              height={200}
            />
            <span className="text-sm">{lang}</span>
          </div>
        </button>
      ))}

      {selectedLanguage && (
        <button
          onClick={() => setSelectedLanguage(null)}
          className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded-lg text-xs text-gray-400 hover:text-gray-300 transition-colors"
        >
          <X className="w-3 h-3" />
          Clear
        </button>
      )}
    </div>
  );
};

export default LanguageFilter;
