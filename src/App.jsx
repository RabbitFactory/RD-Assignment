import { useState, useEffect } from "react";
import ReviewForm from "./Components/ReviewForm";
import ReviewList from "./Components/ReviewList";

export default function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ReviewForm handleAddReview={handleAddReview} />
      <ReviewList reviews={reviews}></ReviewList>
    </div>
  );
}
