import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { PRODUCT_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const[filteredList,setFilteredList] = useState([])
  const [serachText, setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(PRODUCT_API);
    const json = await data.json();
    /* console.log(json.data.cards); */
    setListOfProducts(
      json?.products || []
    );
    setFilteredList(
      json?.products || []
    );
  };

  return listOfProducts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-container">
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filtered = listOfProducts.filter((product) => product?.rating > 4.5);
              
              setFilteredList(filtered);
            }}
          >
            Top Rated Products
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
             const filtered= listOfProducts.filter((product) => product?.title?.toLowerCase().includes(serachText.toLocaleLowerCase()))
             setFilteredList(filtered)
            }} >search</button>
          </div>
        </div>
        <div className="restau-cards">
          {filteredList?.map((product) => (
            <Link className="link" key={product.id} to={`products/${product.id}`}>
            <ResCard products={product}  />
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Body;