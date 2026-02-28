import type { SavingsData } from "./SavingsResults";

interface AIInsightProps {
  results: SavingsData;
  visible: boolean;
}

const fmt = (n: number): string => "$" + Math.round(n).toLocaleString();

export default function AIInsight({ results, visible }: AIInsightProps) {
  if (!visible) return null;

  return (
    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-8 animate-[fadeSlideIn_0.4s_ease]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-base leading-none">💡</span>
        </div>
        <span className="text-sm font-extrabold text-gray-900">AI Insight</span>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed">
        By outsourcing, your company could potentially redirect{" "}
        <span className="text-[#FF6B35] font-bold">{fmt(results.annualSavings)}</span>{" "}
        annually into growth, marketing, or product innovation while maintaining
        operational efficiency.
      </p>
    </div>
  );
}