export default function Header() {
  return (
    <div className="mb-7">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-5">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <circle cx="15" cy="19" r="12" fill="#FF6B35" opacity="0.95" />
          <circle cx="26" cy="14" r="10" fill="#FF9A3C" opacity="0.85" />
        </svg>
        <span className="text-base font-bold text-gray-800 tracking-tight">SnappyCX</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-2">
        Estimate Your Outsourcing Savings
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-gray-400 leading-relaxed">
        Instantly visualize how much your company could save by outsourcing.
      </p>
    </div>
  );
}