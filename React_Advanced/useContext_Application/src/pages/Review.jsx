import useReview from "../context/ReviewContext"

const Review = () => {
  const {reviewItems , toggleReviewUpdate} = useReview()
  return (
    <div>
          <h1>To Review</h1>
            <p>is Reviewed {reviewItems.filter((item) => !item.isReviewed).length}</p>
            <ul>
              {
                reviewItems.map((reviewItem) => (
                  <li 
                  key={reviewItem.url}
                  onClick={() => toggleReviewUpdate(reviewItem.url)}
                  style={{textDecoration: reviewItem.isReviewed ? "line-through":"none"}}
                  >
                    {reviewItem.url}
                  </li>
                ))
              }
            </ul>
    </div>
  )
}

export default Review
