import type { SavingsData } from "./SavingsResults";

interface AIInsightProps {
  results: SavingsData;
  visible: boolean;
}

const fmt = (n: number): string => "$" + Math.round(n).toLocaleString();

export default function AIInsight({ results, visible }: AIInsightProps) {
  if (!visible) return null;

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-4 animate-[fadeSlideIn_0.4s_ease]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[18px]">💡</span>
        <span className="text-sm font-extrabold text-[#1a1a2e]">AI Insight</span>
      </div>

      {/* Body */}
      <p className="text-[13px] font-medium text-gray-600 leading-relaxed">
        By outsourcing, your company could potentially redirect{" "}
        <strong className="text-[#FF6B35] font-extrabold">
          {fmt(results.annualSavings)}
        </strong>{" "}
        annually into growth, marketing, or product innovation while maintaining
        operational efficiency.
      </p>
    </div>
  );
}