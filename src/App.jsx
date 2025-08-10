import { useState, useEffect } from "react";
import ReviewForm from "./Components/ReviewForm";
import ReviewList from "./Components/ReviewList";

export default function App() {
  const [reviews, setReviews] = useState(() => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  });
  const [searchTerm, setSearchTerm] = useState(""); // ✅ new state

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]);
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const filteredReviews = reviews.filter(r =>
    r.shopName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <input
        type="text"
        placeholder="Search by shop name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-md mx-auto block"
      />
      <ReviewForm handleAddReview={handleAddReview} />
      <ReviewList
        reviews={filteredReviews}
        handleDeleteReview={handleDeleteReview}
      ></ReviewList>
    </div>
  );
}
