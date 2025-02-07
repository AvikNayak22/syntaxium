import Image from "next/image";
import CodeBlock from "./CodeBlock";
import { codeExecution } from "@/types";

interface ExecutionCardProps {
  execution: codeExecution;
}

const ExecutionCard = ({ execution }: ExecutionCardProps) => (
  <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20">
    <div className="flex items-center justify-between p-4 bg-[#1a1a1a] border border-[#333333] rounded-t-xl">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-white/5 rounded-lg blur group-hover:opacity-30 transition-opacity" />
          <Image
            src={"/" + execution.language + ".png"}
            alt=""
            className="rounded-lg relative z-10 object-cover"
            width={40}
            height={40}
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white">
              {execution.language.toUpperCase()}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">
              {new Date(execution._creationTime).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                execution.error
                  ? "bg-red-500/10 text-red-400"
                  : "bg-green-500/10 text-green-400"
              }`}
            >
              {execution.error ? "Error" : "Success"}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 bg-[#1a1a1a] rounded-b-xl border border-t-0 border-[#333333]">
      <CodeBlock code={execution.code} language={execution.language} />
      {(execution.output || execution.error) && (
        <div className="mt-4 p-4 rounded-lg bg-black/40">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Output</h4>
          <pre
            className={`text-sm ${execution.error ? "text-red-400" : "text-green-400"}`}
          >
            {execution.error || execution.output}
          </pre>
        </div>
      )}
    </div>
  </div>
);

export default ExecutionCard;
