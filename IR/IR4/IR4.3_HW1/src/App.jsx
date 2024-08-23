import { useState } from "react";

const Feedback = () => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  function handleChange(e) {
    setVisible(false);
    setText(e.target.value);
  }

  function handleSubmit() {
    setVisible(true);
  }

  return (
    <>
      <label htmlFor="feedbackInput">Give your feedback</label>
      <textarea
        id="feedbackInput"
        onChange={handleChange}
        value={text}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      {visible && <p>Your Feedback: {text}</p>}
    </>
  );
};

const MovieReview = () => {
  const [review, setReview] = useState("");
  const [visible, setVisible] = useState(false);

  function handleChange(e) {
    setVisible(false);
    setReview(e.target.value);
  }

  function handleReview() {
    setVisible(true);
  }

  return (
    <>
      <label htmlFor="reviewInput">write your movie review</label>
      <textarea
        id="reviewInput"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={review}
      ></textarea>
      <button onClick={handleReview}>submit Review</button>
      {visible && <p>your review: {review}</p>}
    </>
  );
};

const GreetMessage = () => {
  const [message, setMessage] = useState("");

  function messageDisplay() {
    alert(message.toUpperCase() + "!");
    // if(message.includes('!')){
    //   alert(message.toUpperCase() + "!")
    // }
    // else{
    //   alert(message.toUpperCase() + "!")
    // }
  }

  return (
    <>
      <label htmlFor="messageInput">Enter your message </label>
      <textarea
        id="messageInput"
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={messageDisplay}>Display Message</button>
    </>
  );
};

const SavedNotes = () => {
  const [notes, setNotes] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setVisible(false);
    setNotes(e.target.value);
  };

  const handleSubmit = () => {
    setVisible(true);
  };

  return (
    <>
      <label htmlFor="noteInput">Take your notes</label>
      <textarea
        id="noteInput"
        cols="30"
        rows="10"
        value={notes}
        onChange={handleChange}
      ></textarea>
      <button onClick={handleSubmit}>save Notes</button>
      {visible && <p>saved Notes: {notes}</p>}
    </>
  );
};

const AskQuestion = () => {
  const [question ,setQuestion] = useState('');
  const [visible, setVisible] = useState(false)

  const handleChange = (e) =>{
    setVisible(false)
    setQuestion(e.target.value)
  }

  const handleSubmit = () =>{
  
    setVisible(true)
  }


  return(
    <>
      <label htmlFor="questionInput">ask your question ? </label>
      <textarea value={question} id="questionInput" cols="30" rows="10" onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>submit question</button>
      {visible && <p>Your question: {question.includes("?") ? `${question}` : `${question} ?`}</p>}
    </>
  )
}

const Comment = () =>{
  const [comment , setComment] = useState('');
  const [showComment , setShowComment] = useState('');

  return(
    <>
      <label htmlFor="commentInput">Leave your comment</label>
      <textarea value={comment}  id="commentInput" cols="30" rows="10" onChange={(e)=>setComment(e.target.value)}></textarea>
      <button onClick={()=>setShowComment(comment)}>submit Comment</button>
     {showComment &&  <p>{`// ${showComment}`}</p>}
    </>
  )
}


function App() {
  return (
    <>
      <Feedback />
      <br />
      <br />
      <MovieReview />
      <br />
      <br />
      <GreetMessage />
      <br />
      <br />
      <SavedNotes />
      <br />
      <br />
      <AskQuestion/>
      <br />
      <Comment/>
    </>
  );
}

export default App;
