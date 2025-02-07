import { Snippet } from "@/types";
import { Star } from "lucide-react";
import StarredSnippetCard from "./StarredSnippetCard";
import EmptyState from "./EmptyState";

interface StarredTabProps {
  snippets: Snippet[];
}

const StarredTab = ({ snippets }: StarredTabProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {snippets?.map((snippet) => (
      <StarredSnippetCard key={snippet._id} snippet={snippet} />
    ))}

    {(!snippets || snippets.length === 0) && (
      <div className="col-span-full">
        <EmptyState
          icon={Star}
          title="No starred snippets yet"
          description="Start exploring and star the snippets you find useful!"
        />
      </div>
    )}
  </div>
);

export default StarredTab;
