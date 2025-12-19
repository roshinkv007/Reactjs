
const ResCard = (props) => {
 
  /* console.log(props.resDetails.info.name) */
  return (
    <div className="res-container">
      <img className="food-img" src={props?.products?.thumbnail} />
      <h2>{props?.products?.title}</h2>
      <h4>{props?.products?.price}</h4>
      <h4>{props?.products?.category}</h4>
      <h4>{props?.products?.stock} in stock</h4>
      <h5>{props?.products?.rating} ⭐</h5>
    </div>
  );
};

export default ResCard