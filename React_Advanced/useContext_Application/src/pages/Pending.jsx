import useReview from "../context/ReviewContext"

const Pending = () => {
  const { reviewItems } = useReview();
  const pendingItems = reviewItems.filter((item) => !item.isReviewed);
  return (
    <div>
      <h1>Pending</h1>
        {
         pendingItems.length > 0 ? (
          <ul>
          {
           pendingItems.map((item) => (
            <li key={item.url}>
              {item.url}
            </li>
           ))
          }
        </ul>
         ):(
         <h1>All Items are Reviewed</h1>
         )

        }
    </div>
  )
}

export default Pending
