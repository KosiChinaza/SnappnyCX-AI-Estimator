export default function Header() {
  return (
    <div className="mb-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-3">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="10" cy="14" r="9" fill="#FF6B35" opacity="0.9" />
          <circle cx="19" cy="10" r="7" fill="#FF9A3C" opacity="0.85" />
        </svg>
        <span className="text-[17px] font-extrabold text-[#1a1a2e] tracking-tight">
          SnappyCX
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] leading-tight tracking-tight">
        Estimate Your Outsourcing Savings
      </h1>
    </div>
  );
}