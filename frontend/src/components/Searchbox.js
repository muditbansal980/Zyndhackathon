import { useEffect, useState } from "react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Open with CTRL + K
  useEffect(() => {
    function handleKey(e) {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Options to show (example)
  const suggestions = [
    { label: "Home", link: "/" },
    { label: "Check Eligibility", link: "/CheckEligibility" },
    { label: "Benefits", link: "/Benefits" },
    { label: "My Applications", link: "/MyApplications" },
    { label: "Profile", link: "/Profile" },
    { label: "Interpreter Law", link: "/InterpreterLaw" },
  ];

  // Filter search
  const filtered = suggestions.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-40 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-xl bg-white shadow-lg p-4">

        {/* Search Box */}
        <input
          autoFocus
          type="text"
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
        />

        {/* Results */}
        <div className="mt-3 max-h-64 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))
          ) : (
            <p className="text-gray-500 px-3 py-2">No results found…</p>
          )}
        </div>

      </div>
    </div>
  );
}
// export default function CommandPalette(){
//     return(
//         <div className="fixed "
//     )
// }