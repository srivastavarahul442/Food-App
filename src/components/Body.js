import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   if(!listOfRestaurants) return <h1>Loading...</h1>

  return !listOfRestaurants ? (
    <h1>Loading...</h1>
  ) : (
    <div className="Body">
      <div className="filter-search" >
      <div>
            <label>City:</label>
            <button>Delhi</button>
            <button>Kolkata</button>
            <button>Bengalore</button>
        </div>
        <div className="search-container">
          <input
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button
            className="btn"
            onClick={() => {
              const filtredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(input.toLowerCase())
              );
              console.log(filtredRes);
              setFilteredList(filtredRes);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
