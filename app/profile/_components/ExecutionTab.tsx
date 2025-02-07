import { codeExecution } from "@/types";
import { Loader2, Code } from "lucide-react";
import ExecutionCard from "./ExecutionCard";
import EmptyState from "./EmptyState";
import LoadMoreButton from "./LoadMoreButton";

interface ExecutionsTabProps {
  executions: codeExecution[];
  isLoading: boolean;
  canLoadMore: boolean;
  onLoadMore: () => void;
}

const ExecutionsTab = ({
  executions,
  isLoading,
  canLoadMore,
  onLoadMore,
}: ExecutionsTabProps) => (
  <div className="space-y-6">
    {executions?.map((execution) => (
      <ExecutionCard key={execution._id} execution={execution} />
    ))}

    {isLoading ? (
      <div className="text-center py-12">
        <Loader2 className="w-12 h-12 text-gray-600 mx-auto mb-4 animate-spin" />
        <h3 className="text-lg font-medium text-gray-400 mb-2">
          Loading code executions...
        </h3>
      </div>
    ) : (
      executions.length === 0 && (
        <EmptyState
          icon={Code}
          title="No code executions yet"
          description="Start coding to see your execution history!"
        />
      )
    )}

    {canLoadMore && <LoadMoreButton onClick={onLoadMore} />}
  </div>
);

export default ExecutionsTab;
