export interface SavingsData {
  annualLocal: number;
  outsourcedCost: number;
  annualSavings: number;
  monthlySavings: number;
}

interface SavingsResultsProps {
  results: SavingsData;
  visible: boolean;
}

const fmt = (n: number): string => "$" + Math.round(n).toLocaleString();

export default function SavingsResults({ results, visible }: SavingsResultsProps) {
  if (!visible) return null;

  const { annualLocal, outsourcedCost, annualSavings, monthlySavings } = results;

  return (
    <div className="bg-orange-50 rounded-2xl p-4 mb-4 animate-[fadeSlideIn_0.35s_ease]">
      <h2 className="text-base font-extrabold text-gray-900 mb-4">
        Your Estimated Savings
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {/* Annual Local Cost */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-gray-400 leading-tight">Annual Local Cost</span>
          <span className="text-base font-extrabold text-gray-700">{fmt(annualLocal)}</span>
        </div>

        {/* Outsourced Cost */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-gray-400 leading-tight">Outsourced Cost</span>
          <span className="text-base font-extrabold text-gray-700">{fmt(outsourcedCost)}</span>
        </div>

        {/* Annual Savings */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-gray-800 leading-tight">Annual Savings</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-extrabold text-[#FF6B35] leading-tight">
              {fmt(annualSavings)}
            </span>
            <span className="text-[#FF6B35] text-sm font-bold">↗</span>
          </div>
          <span className="text-xs font-semibold text-gray-400">{fmt(monthlySavings)}/mo</span>
        </div>
      </div>
    </div>
  );
}