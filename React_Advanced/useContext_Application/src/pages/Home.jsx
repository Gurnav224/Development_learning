import useReview from "../context/ReviewContext"

const Home = () => {
    const { reviewItems} = useReview()

  return (
    <div>
      <h1>Pending</h1>
      <p>{reviewItems.filter((item) => !item.isReviewed).length}</p>
      <h1>Reviewed:</h1>
      <p>{reviewItems.filter((item) => item.isReviewed).length} </p>
    </div>
  )
}

export default Home
