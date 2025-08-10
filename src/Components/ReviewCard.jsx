import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const ReviewCard = ({ shopName, review, rating, date }) => {

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">{shopName}</h3>
        <div className="">
          
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            isRequired
            readOnly
          />
        </div>
      </div>
      <p className="text-gray-700 mb-2">{review}</p>
      <small className="text-gray-500">{date}</small>
    </div>
  )
}

export default ReviewCard;
