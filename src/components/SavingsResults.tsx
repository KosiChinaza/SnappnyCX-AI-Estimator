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
    <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 mb-4 animate-[fadeSlideIn_0.35s_ease]">
      <h2 className="text-[15px] font-extrabold text-[#1a1a2e] mb-4">
        Your Estimated Savings
      </h2>

      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {/* Annual Local Cost */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">
            Annual Local Cost
          </span>
          <span className="text-sm sm:text-base font-extrabold text-gray-600">
            {fmt(annualLocal)}
          </span>
        </div>

        {/* Outsourced Cost */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">
            Outsourced Cost
          </span>
          <span className="text-sm sm:text-base font-extrabold text-gray-600">
            {fmt(outsourcedCost)}
          </span>
        </div>

        {/* Annual Savings */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">
            Annual Savings
          </span>
          <span className="text-sm sm:text-base font-extrabold text-green-600">
            {fmt(annualSavings)}{" "}
            <span className="text-xs align-middle">↗</span>
          </span>
          <span className="text-[11px] font-semibold text-gray-400">
            {fmt(monthlySavings)}/mo
          </span>
        </div>
      </div>
    </div>
  );
}