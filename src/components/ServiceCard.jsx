export default function ServiceCard({
  icon,
  titleHigh,
  description,
  titleRest,
  checklist,
}) {
  return (
    <>
      <div className="rounded-xl shadow-2xl border p-8 border-white/10 hover:-translate-y-5 md:hover:shadow-yellow-400/50 md:hover:border-yellow-500 transition-all duration-300">
        <div className="flex flex-col items-start justify-start">
          <div>{icon}</div>
          <h3 className="font-bold text-lg mb-3 text-white">
            <span className="text-yellow-500">{titleHigh} </span>
            {titleRest}
          </h3>
          <p className="text-white text-base text-left leading-relaxed">
            {description}
          </p>

          {checklist && checklist.length > 0 && (
            <ul className="text-left px-4 py-4 text-white">
              {checklist.map((isi, index) => {
                return (
                  <li
                    className="flex md:items-start text-justify gap-2"
                    key={index}>
                    <span>&#10003;</span>
                    {isi}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
