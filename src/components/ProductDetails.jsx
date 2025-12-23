import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useProductDetails from "../utils/hooks/useProductDetails";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const ProductDetails = () => {
  const { productId } = useParams();
  const productDetails = useProductDetails(productId);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Oops! your offline check your internet</h1>;

  if (productDetails === null) return <Shimmer />;
  const { title, category, price, description } = productDetails;
  return (
    <div className="product-details">
      <h1>{title}</h1>
      <h4>{category}</h4>
      <h4>{price}</h4>
      <p>{description}</p>
      {productDetails.reviews.map((review, index) => (
        <div key={index}>
          <h4>{review.comment}</h4>
          <p>{review.rating}</p>
          <p>{review.reviewerName}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
