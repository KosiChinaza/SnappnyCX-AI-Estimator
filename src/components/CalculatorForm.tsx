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

const selectInputClass =
  "w-full px-3 py-[11px] border border-gray-200 rounded-xl text-sm font-semibold text-[#1a1a2e] bg-white outline-none appearance-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition";

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
    <div className="mb-5">
      {/* Form Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-5">
        {/* Role */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Role
          </label>
          <div className="relative">
            <select
              className={selectInputClass}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
              ▾
            </span>
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Country
          </label>
          <div className="relative">
            <select
              className={selectInputClass}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
              ▾
            </span>
          </div>
        </div>

        {/* Salary */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Average Monthly Salary ($)
          </label>
          <input
            type="text"
            className={selectInputClass}
            value={salary}
            onChange={handleSalaryChange}
          />
        </div>

        {/* Hires */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Number of Hires
          </label>
          <input
            type="number"
            min={1}
            className={selectInputClass}
            value={hires}
            onChange={(e) => setHires(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={onCalculate}
        className="w-full py-3.5 rounded-xl text-white font-extrabold text-[15px] tracking-wide
          bg-linear-to-r from-[#FF6B35] to-[#FF9A3C]
          shadow-[0_4px_18px_rgba(255,107,53,0.35)]
          hover:shadow-[0_6px_24px_rgba(255,107,53,0.45)]
          hover:-translate-y-0.5 active:translate-y-0
          transition-all duration-150"
      >
        Calculate Savings
      </button>
    </div>
  );
}