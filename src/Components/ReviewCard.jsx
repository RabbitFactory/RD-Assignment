import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const ReviewCard = ({ shopName, review, rating, date, handleDeleteReview }) => {

  return (
    <div className="bg-white shadow rounded p-4 mb-4 flex flex-col">
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
      <p className="text-gray-700 mb-2 break-words whitespace-pre-wrap">{review}</p>
      <div className='flex justify-between items-center'>
        <div>
          
          <small className="text-gray-500">{date}</small>
        </div>
        <div>
          {/* <button
            // onClick={onEdit}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Edit
          </button> */}
          <button
            onClick={handleDeleteReview}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;
