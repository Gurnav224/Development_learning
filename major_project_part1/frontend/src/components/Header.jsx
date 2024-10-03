/* eslint-disable react/no-unknown-property */

const Header = () => {
  return (
    <header className="container-fluid bg-secondary ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand    w-25">
            MyShoppingSite
          </a>

          <div className="d-flex align-items-center  position-relative  mx-2 w-25">
            <svg
              style={{ left: 9 }}
              className="position-absolute"
              fill="#000000"
              height="24px"
              width="24px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488.4 488.4"
            >
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <input
              className="form-control ps-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          <div className="d-flex align-items-center justify-content-end gap-2 w-25 ">
            <a href="#" className="btn btn-dark ">
              Login
            </a>

            <button className="btn btn-outline-dark ">
              <svg
                width={25}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="3"
                stroke="#000000"
                fill="none"
              >
                <g id="SVGRepo_iconCarrier">
                  <path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"></path>
                </g>
              </svg>
            </button>

            <button className="btn btn-outline-dark d-flex  ">
              Cart
              <svg
                width={24}
                className="ps-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
