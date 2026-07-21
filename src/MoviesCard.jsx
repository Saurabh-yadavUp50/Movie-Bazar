const MoviesCard = (props) => {
  return (
    <div className="bg-blue-950 rounded-lg p-4 md:h-full flex-col  flex">
      <img src={props.posterimg} className="md:h-72 rounded-xl md:w-60  m-2 ml-2 " alt="image" />
     <div className="mr-20">
       <h6 className="text-lg text-blue-500">{props.title}</h6>
      <p className="text-lg text-blue-500">Rating:{props.rating}</p>
     </div>
    </div>
  );
};

export default MoviesCard;