import useReview from "../context/ReviewContext";

function ReviewItemsCounter() {
  const { reviewItems } = useReview();
  return (
    <span>
      ({reviewItems.filter((item) => !item.isReviewed).length} /{" "}
      {reviewItems.length})
    </span>
  );
}

export default ReviewItemsCounter;
