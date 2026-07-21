const MoviesCard = ({ posterimg, title, rating }) => {
  return (
    <div className="bg-blue-950 rounded-lg p-4 flex flex-col items-center">
      <img
        src={posterimg}
        alt={title}
        className="w-full h-72 object-cover rounded-xl"
      />

      <div className="w-full mt-3">
        <h2 className="text-lg font-semibold text-blue-500 truncate">
          {title}
        </h2>

        <p className="text-blue-400">
          Rating: {rating}
        </p>
      </div>
    </div>
  );
};

export default MoviesCard;