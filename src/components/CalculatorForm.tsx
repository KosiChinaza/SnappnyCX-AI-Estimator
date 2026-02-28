interface CalculatorFormProps {
  role: string;
  setRole: (val: string) => void;
  country: string;
  setCountry: (val: string) => void;
  salary: string;
  setSalary: (val: string) => void;
  hires: number;
  setHires: (val: number) => void;
  onCalculate: () => void;
}

const ROLES: string[] = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "DevOps Engineer",
  "Data Scientist",
  "Product Manager",
  "QA Engineer",
];

const COUNTRIES: string[] = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
];

const fieldClass =
  "w-full px-3 py-3.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-800 bg-white outline-none appearance-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition";

export default function CalculatorForm({
  role, setRole,
  country, setCountry,
  salary, setSalary,
  hires, setHires,
  onCalculate,
}: CalculatorFormProps) {
  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setSalary(raw ? `$${Number(raw).toLocaleString()}` : "");
  };

  return (
    <div className="mb-6">
      {/* Row 1: Role + Country */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500">Role</label>
          <div className="relative">
            <select className={fieldClass} value={role} onChange={(e) => setRole(e.target.value)}>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500">Country</label>
          <div className="relative">
            <select className={fieldClass} value={country} onChange={(e) => setCountry(e.target.value)}>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
          </div>
        </div>
      </div>

      {/* Row 2: Salary + Hires */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500">Average Monthly Salary ($)</label>
          <input
            type="text"
            className={fieldClass}
            value={salary}
            onChange={handleSalaryChange}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500">Number of Hires</label>
          <input
            type="number"
            min={1}
            className={fieldClass}
            value={hires}
            onChange={(e) => setHires(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={onCalculate}
        className="w-full py-4 rounded-2xl text-white font-extrabold text-base tracking-wide
          bg-gradient-to-r from-[#FF6B35] to-[#FF9A3C]
          shadow-[0_4px_20px_rgba(255,107,53,0.4)]
          hover:shadow-[0_6px_28px_rgba(255,107,53,0.5)]
          hover:-translate-y-0.5 active:translate-y-0
          transition-all duration-150"
      >
        Calculate Savings
      </button>
    </div>
  );
}