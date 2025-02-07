import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const EmptyState = ({ icon: Icon, title, description }: EmptyStateProps) => (
  <div className="text-center py-12">
    <Icon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-400 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

export default EmptyState;
