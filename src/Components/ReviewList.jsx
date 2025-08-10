import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews ,handleDeleteReview }) => {
  if (reviews.length === 0) {
    return <p className="text-center text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="max-w-md mx-auto">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          shopName={review.shopName}
          review={review.review}
          rating={review.rating}
          date={review.date}
          handleDeleteReview = {() => handleDeleteReview(review.id)}
        />
      ))}
    </div>
  );
}

export default ReviewList;