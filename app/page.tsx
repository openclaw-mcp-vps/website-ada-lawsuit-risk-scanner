export default function Home() {
  const faqs = [
    {
      q: "What ADA issues does the scanner detect?",
      a: "It checks for missing alt text, poor color contrast, unlabeled form fields, missing ARIA roles, keyboard navigation failures, and other WCAG 2.1 violations commonly cited in ADA lawsuits."
    },
    {
      q: "Will this guarantee I won't get sued?",
      a: "No tool can guarantee legal immunity, but fixing the issues we flag dramatically reduces your exposure. Our risk score is based on the most common violations cited in real ADA lawsuits."
    },
    {
      q: "Do I need technical knowledge to use this?",
      a: "No. Just enter your URL and we generate a plain-English report with step-by-step remediation instructions your developer or agency can act on immediately."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          ADA Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Your Website for<br />
          <span className="text-[#58a6ff]">ADA Lawsuit Risk Factors</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ADA web accessibility lawsuits hit 4,000+ businesses last year. Enter your URL, get a risk score, and receive a prioritized fix list before a plaintiff's attorney finds you first.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start Scanning — $13/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. Instant access.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$13<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay protected</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited URL scans",
              "WCAG 2.1 AA violation detection",
              "Risk score & severity breakdown",
              "Step-by-step remediation guide",
              "Downloadable PDF reports",
              "Re-scan to track progress"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
