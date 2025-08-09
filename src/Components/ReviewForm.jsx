import { useState } from "react";

export default function ReviewForm({ onAddReview }) {

    const [shopName, setShopName] = useState("");
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!shopName.trim()) {
            alert("Please fill in the name field");
            return;
        }

        if (!review.trim()) {
            alert("Please fill in the review field");
            return;
        }

        const newReview = {
            id: Date.now(),
            shopName,
            review,
            date: new Date().toLocaleString(),
        };

        onAddReview(newReview);
        setShopName("");
        setReview("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-4 bg-white shadow rounded my-6 max-w-md mx-auto"
        >
            <h2 className="text-xl font-bold mb-4">Add a Review</h2>

            {/* Shop Name */}
            <div className="mb-3">
                <label className="block font-medium mb-1">Shop Name</label>
                <input
                    type="text"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter a shop name"
                />
            </div>

            {/* Review Text */}
            <div className="mb-3">
                <label className="block font-medium mb-1">Review</label>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Write your experience..."
                ></textarea>
            </div>

            {/* Rating */}


            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}
