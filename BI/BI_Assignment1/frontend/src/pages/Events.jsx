import { useState } from "react";
import Header from "../components/Header";
import useFetch from "../useFetch";
import moment from "moment";
import { Link } from "react-router-dom";

const Events = () => {
  const { data, loading, error } = useFetch("https://meetup-app-puce.vercel.app/events");

  const [search, setSearch] = useState("");
  const [eventType, setEventType] = useState("Both");


  const events = data?.events;

 
  let filterByEventType = events?.filter((event) => eventType === "Both" || event.eventType === eventType)




  let filterBySearch = search ? events.filter((event) => 
    event.title.toLowerCase().includes(search.toLowerCase())  || 

  event.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))

) : events

    
    let filterEvents = filterByEventType?.filter((event) => 
      filterBySearch.includes(event)
    )

  if (error) return <p>error: {error}</p>;

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1 className="fw-bold display-5">Meetup Events</h1>
        <div className="my-4 row">
        <div className="col-md-6">
        <label className="form-label" htmlFor="searchInput">
            Search Event
          </label>
          <input
            placeholder="search by title or tags"
            className="form-control"
            id="searchInput"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
         <div className="col-md-6">
          <label className="form-label" htmlFor="eventType">Filter By Event Type</label>
          <select onChange={(e) => setEventType(e.target.value)} className="form-select" name="eventType" id="eventType">
            <option defaultValue={""}>Choose event Type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both">Both</option>
          </select>
         </div>
        </div>

        <div className="row">
          {filterEvents ? (
            <>
              {filterEvents.map((event) => (
                <div
                  key={event._id}
                  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                >
                  <Link
                    className="text-decoration-none"
                    to={`/events/${event._id}`}
                  >
                    <div className="card h-100 shadow-sm">
                      <div className="position-relative">
                        <img
                          src={event.thumbnail}
                          alt=""
                          className="card-img-top object-fit-cover border rounded"
                          style={{ height: "250px" }}
                        />
                        <span
                          className={`fs-5 badge position-absolute top-0 start-0 m-2 ${
                            event.eventType === "Online"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                          style={{ zIndex: 1 }}
                        >
                          {event.eventType}
                        </span>
                      </div>

                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text text-secondary-emphasis mt-auto">
                          {moment(event.startingTime).format("LLLL")}
                        </p>
                        <p className="card-text text-dark fw-bold">Tags: {event.tags.join(', ')}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
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
      </main>
    </>
  );
};

export default Events;
