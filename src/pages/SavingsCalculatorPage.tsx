

import { useState } from "react";
import Header from "../components/Header";
import CalculatorForm from "../components/CalculatorForm";
import SavingsResults from "../components/SavingsResults";
import type { SavingsData } from "../components/SavingsResults";
import AIInsight from "../components/AIInsight";
import CTAFooter from "../components/ctaFooter";

/*
 * Add to tailwind.config.ts → theme.extend:
 */

const COUNTRY_RATIO: Record<string, number> = {
  "United States": 0.30,
  "United Kingdom": 0.32,
  "Canada": 0.33,
  "Australia": 0.31,
  "Germany": 0.34,
  "France": 0.34,
  "Netherlands": 0.33,
  "Sweden": 0.32,
};

function parseSalary(str: string): number {
  return Number(str.replace(/[^0-9]/g, "")) || 0;
}

export default function SavingsCalculatorPage() {
  const [role, setRole] = useState<string>("Frontend Developer");
  const [country, setCountry] = useState<string>("United States");
  const [salary, setSalary] = useState<string>("$7,000");
  const [hires, setHires] = useState<number>(3);
  const [results, setResults] = useState<SavingsData | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleCalculate = (): void => {
    const monthlySalary = parseSalary(salary);
    const numHires = hires || 1;
    const ratio = COUNTRY_RATIO[country] ?? 0.30;

    const annualLocal = monthlySalary * 12 * numHires * 1.3;
    const outsourcedCost = annualLocal * ratio;
    const annualSavings = annualLocal - outsourcedCost;
    const monthlySavings = annualSavings / 12;

    setResults({ annualLocal, outsourcedCost, annualSavings, monthlySavings });
    setShowResults(true);
  };

  return (
    // Mobile (<lg): full-screen white, no card styling
    // Desktop (lg+): gray bg, centered floating card with shadow
    <main className="min-h-screen flex flex-col bg-white lg:bg-gray-100 lg:items-center lg:justify-center lg:p-8">
      <div className="
        flex flex-col flex-1 w-full bg-white px-6 py-10
        lg:flex-none lg:min-h-0 lg:max-w-[480px] lg:rounded-2xl lg:px-8 lg:py-8
        lg:shadow-[0_8px_40px_rgba(0,0,0,0.10)]
      ">
        <Header />
        <CalculatorForm
          role={role} setRole={setRole}
          country={country} setCountry={setCountry}
          salary={salary} setSalary={setSalary}
          hires={hires} setHires={setHires}
          onCalculate={handleCalculate}
        />
        {showResults && results && (
          <>
            <SavingsResults results={results} visible={showResults} />
            <AIInsight results={results} visible={showResults} />
          </>
        )}
        <CTAFooter />
      </div>
    </main>
  );
}