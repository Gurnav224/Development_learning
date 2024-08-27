import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("");
  const [frequency, setFrequency] = useState("");
  const [comment, setComment] = useState("");
  const [experience, setExperience] = useState("");
  const [agree, setAgree] = useState(false);

  const [formData , setFormData] = useState(false)

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (agree) {
      setFormData(true)
    }


  };

  return (
    <div>
      <h1>Transportation Preference Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="mode">Preferred Mode Of Transportation:</label>
          <select
            name="mode"
            id="mode"
            onChange={(event) => setMode(event.target.value)}
            required
          >
            <option value="">select</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Walk">Walk</option>
          </select>
        </div>

        <div>
          <label htmlFor="frequency">Frequency of Usage:</label>
          <select
            name="frequency"
            id="frequency"
            onChange={(event) => setFrequency(event.target.value)}
            required
          >
            <option value="">select</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Occaionally">Occasionally</option>
          </select>
        </div>

        <div>
          <label htmlFor="comment">comment (if any)</label>
          <textarea
            onChange={(event) => setComment(event.target.value)}
            name="comment"
            id="comment"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div>
          <label htmlFor="experience">Experience Level: </label>
          <br />

          <label htmlFor="beginner">
            <input
              type="radio"
              name="experience"
              id="beginner"
              required
              value="beginner"
              onChange={(event) => setExperience(event.target.value)}
            />
            Beginner
          </label>
          <br />
          <label htmlFor="intermediate">
            <input
              type="radio"
              name="experience"
              required
              id="intermediate"
              value="intermediate"
              onChange={(event) => setExperience(event.target.value)}
            />
            Intermediate
          </label>
          <br />
          <label htmlFor="advanced">
            <input
              type="radio"
              name="experience"
              required
              id="advanced"
              value="advanced"
              onChange={(event) => setExperience(event.target.value)}
            />
            Advanced
          </label>
        </div>

        <div>
          <label htmlFor="agree">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              onChange={(event) => setAgree(event.target.checked)}
              required
            />
            I agree to terms and conditions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div>
          <h2>Submitted Details</h2>
          <p>Preferred Mode Of Transportation: {mode}</p>
          <p>Frequency of Usage: {frequency}</p>
          <p>Comments: {comment || "none"}</p>

          <p>Experience Level: {experience}</p>
        </div>
      )}
    </div>
  );
};

export default App;
