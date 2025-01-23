import { createContext, useContext } from "react";
import { useState } from "react";

const ReviewContext = createContext();


const useReview = () => useContext(ReviewContext);

export default useReview;


export  function ReviewProvider({ children }) {
  const initailReviewItems = [
    {
      url: "https://github.com/repo1",
      isReviewed: false,
    },
    {
      url: "https://github.com/repo2",
      isReviewed: false,
    },
    {
      url: "https://github.com/repo3",
      isReviewed: false,
    },
  ];

  const [reviewItems, setReviewItems] = useState(initailReviewItems);

  function toggleReviewUpdate(selectedUrl) {
    const updatedReviewItem = reviewItems.map((reviewItem) => {
      if (reviewItem.url !== selectedUrl) {
        return reviewItem;
      }
      return {
        ...reviewItem,
        isReviewed: !reviewItem.isReviewed,
      };
    });

    setReviewItems(updatedReviewItem);
  }

  return (
    <ReviewContext.Provider value={{ reviewItems, toggleReviewUpdate }}>
      {children}
    </ReviewContext.Provider>
  );
}