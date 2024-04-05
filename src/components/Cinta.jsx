const Cinta = ({ cinta, cabezal }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8 ">
      {cinta.map((simbolo, index) => (
        <span
          key={index}
          className={`text-lg font-bold px-3 py-1 rounded-lg  ${
            cabezal === index ? "bg-blue-500 text-white " : "bg-gray-300"
          }`}
        >
          {simbolo}
        </span>
      ))}
    </div>
  );
};

export default Cinta;
