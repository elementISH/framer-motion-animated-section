export default function Terminal() {
  return (
    <div
      className={`h-fit w-[50vw] rounded-xl p-8`}
      style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
    >
      <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
        <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-2">
          <p className="font-mono text-sm text-slate-200">
            <span className="text-green-300">~</span> Show a part of your
            product that explains what{" "}
            <span className="inline-block rounded bg-indigo-600 px-1 font-semibold">
              "They're all here"
            </span>{" "}
            means.
          </p>
        </div>
        <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
      </div>
    </div>
  );
}
