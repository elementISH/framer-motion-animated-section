export default function Text({ odd, id, className }) {
  return (
    <div
      className={` flex w-full ${
        odd ? "justify-end " + className : "justify-start " + className
      } `}
      id={id}
    >
      <div style={{ opacity: 1, transform: "none" }} className="w-1/2">
        <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
          Get noticed
        </span>
        <p className="my-3 text-5xl font-bold">It's simple</p>
        <p className="text-slate-600 w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto
          quaerat qui, illo incidunt suscipit fugiat distinctio officia earum
          eius quae officiis quis harum animi.
        </p>
      </div>
    </div>
  );
}
