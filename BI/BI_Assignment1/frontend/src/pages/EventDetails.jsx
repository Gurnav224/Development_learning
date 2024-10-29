import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";
import moment from "moment";

const EventDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://meetup-app-puce.vercel.app/events/${id}`
  );

  const event = data?.event;

  console.log(event);

  if (error) return <p>error {error}</p>;

  return (
    <div>
      <Header />
      <div className="container">
        {event ? (
          <div className="row mt-5">
            <div className="col-md-8">
              <h1 className="pb-2">{event.title}</h1>
              <span>Hosted By</span>
              <br />
              <h2>{event.host}</h2>
              <img
                src={event.thumbnail}
                alt="event-thumbnail-image"
                className="img-fluid rounded shadow-sm"
              
              />
              <h4 className="pt-4 fs-2">Details:</h4>
              <p>{event.details}</p>
              <h4 className="pt-4 fs-2">Additional Information:</h4>
              <p>
                <strong>Dress Code: </strong>
                {event.dressCode}
              </p>
              <p>
                <strong>Age Restrictions: </strong>
                {event.ageRestrictions}
              </p>

              <h4 className="pt-4 fs-2">Event Tags:</h4>
              {event.tags.map((tag) => (
                <button className="btn btn-danger fs-4 mx-2 fw-bold" key={tag}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="col-md-4">
  <div className="card  shadow-sm">
    <div className="card-body">
      
      {/* Date and Time */}
      <div className="d-flex justify-content-start align-items-center mb-3">
        <svg
          width={30}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="me-2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4.51555 7C3.55827 8.4301 3 10.1499 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V6M12 12L8 8"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
        <p className="mb-0">
          {moment(event.startingTime).format("llll")} to <br />
          {moment(event.endingTime).format("llll")}
        </p>
      </div>

      {/* Location */}
      <div className="d-flex justify-content-start align-items-center mb-3">
        <svg
          width={30}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="me-2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
        <p className="mb-0">{event.venue}, {event.location}</p>
      </div>

      {/* Price */}
      <div className="d-flex justify-content-start align-items-center">
        <svg
          width={30}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="me-2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
        <p className="fs-5 mb-0">{event.price}</p>
      </div>
      
    </div>
  </div>

  <div className="card shadow-sm my-5">
  <div className="card-header">
  <h3>Speakers: {event.speakers.length}</h3>

  </div>
  <div className="card-body">

    <div className="row">
       {
        event.speakers.map((speaker) => (
       

        <div className="col-md-6" key={speaker.id}>
  <div className="card shadow-sm p-3 d-flex align-items-center text-center">
    <img 
      src={speaker.profilePic} 
      alt={`${speaker.name} Profile`} 
      className="rounded-circle mb-3" 
      style={{ width: '100px', height: '120px', objectFit: 'cover' ,   objectPosition: 'top center'}} 
    />
    <div className="card-body">
      <p className="fw-bold mb-1">{speaker.name}</p>
      <p className="text-muted">{speaker.department}</p>
    </div>
  </div>
</div>

        ))
       }
    </div>
  </div>
  </div>
</div>

          </div>
        ) : (
          <>
            {loading && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
