const DetailProject = ({ data }) => {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-sm mt-2 mb-4">"{data.description}"</p>
      <h2 className="text-xl font-semibold">Tools:</h2>
      <div className="flex gap-4 mb-4 my-2">
        {data.tools.map((tool) => (
          <div className="px-2 py-1 rounded-xl bg-gray-300/10 text-gray-50">{tool}</div>
        ))}
      </div>
      <h2 className="mt-8 text-xl font-semibold">Description: </h2>
      <p className="mt-4">{data.fullDescription}</p>
      <a href={data.link}>View Demo</a>
      <div className="relative block my-8 w-28 group py-1 mx-auto">
        <div className="flex justify-center px-2 z-50 rounded-full relative bg-slate-950">
          { data.status }
        </div>
        <div className={`absolute inset-0 group-hover:blur-md transition-all ease-in w-full animate-tilt rounded-full blur-sm bg-conic ${data.status === 'Complete' ? 'from-blue-600 to-emerald-400' : 'from-amber-400 to-orange-500'} to-50%`}></div>
      </div>
    </div>
  );
};

export default DetailProject;
