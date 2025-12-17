import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredList,setFilteredList] = useState([])
  const [serachText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json.data.cards);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-container">
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
              console.log(filtered)
              setFilteredList(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              value={serachText}
              onChange={(e) => {
                setSearchText(e.target.value);
                
              }}
            />{" "}
            <button onClick={()=>{
             const filtered= listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(serachText.toLocaleLowerCase()))
             setFilteredList(filtered)
            }} >search</button>
          </div>
        </div>
        <div className="restau-cards">
          {filteredList?.map((res) => (
            <ResCard resDetails={res} key={res.info.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
