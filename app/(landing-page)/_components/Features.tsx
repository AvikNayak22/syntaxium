import { Zap, Code2, Globe, ChartGantt } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Zero setup time. Start coding instantly with our browser-based IDE.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Supports JavaScript, Typescript, Python, Java, C++, and many more programming languages.",
  },
  {
    icon: Code2,
    title: "Code Formatting",
    description:
      "Automatic code formatting and indentation for clean, consistent code.",
  },
  {
    icon: ChartGantt,
    title: "IntelliSense",
    description:
      "Smart completions based on variable types, function definitions, and imported modules.",
  },
];

export function Features() {
  return (
    <div className="bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need to Code Better
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built for developers who want to write code, not configure tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#252526] p-6 rounded-xl border border-[#2d2d2d] hover:border-[#404040] transition-colors"
            >
              <feature.icon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
