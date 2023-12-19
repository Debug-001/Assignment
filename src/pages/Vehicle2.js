import React from "react";
import { Fade, Zoom } from "react-reveal";
import "./Vehicle.css";
// import us from '/united-states.png'
import { MdOutlineMailLock } from "react-icons/md";

const Vehicle2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Fade left>
            <a className="navbar-brand" href="#">
              Logo
            </a>
          </Fade>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <Fade left>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Business
                  </a>
                </li>
              </Fade>
              <Fade left>
                <li className="nav-item px-4">
                  <a className="nav-link" href="#">
                    Driver Partner
                  </a>
                </li>
              </Fade>
              <Fade right>
                <li className="nav-item px-4">
                  <a className="nav-link" href="#">
                    Vehicles
                  </a>
                </li>
              </Fade>
              <Fade right>
                <li className="nav-item px-4">
                  <a className="nav-link " aria-disabled="true">
                    About Us
                  </a>
                </li>
              </Fade>
              <Fade right>
                <li className="nav-item px-4">
                  <a className="nav-link " aria-disabled="true">
                    Contact Us
                  </a>
                </li>
              </Fade>
              <Fade right>
                <li className="nav-item">
                  <div class="dropdown ">
                    <button
                      class="btn btn-secondary dropdown-toggle mx-4 btn-clr text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="/united-states.png"
                        alt=""
                        className="mx-2"
                        style={{ width: "20px" }}
                      />{" "}
                      English
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </nav>

      <div className="top-div container mt-5">
        <div className="row top-div-img">
          <div className="col ">
            <Fade bottom>
              <div className="">
                <span
                  class="our-zero-emission text-adjusting"
                  style={{ fontSize: "3rem" }}
                >
                  Our Zero Emission
                </span>
                <br />
                <span
                  class="champions text-adjusting2"
                  style={{ fontSize: "3rem" }}
                >
                  Champions!
                </span>
              </div>
            </Fade>
            <div className="adjusting">
              <img className="w-100 top-img" alt="" src="/map-1-2@2x.png" />
            </div>
            <div className="d-flex flex-row top-div-margin">
              <div className="col">
                <Fade left>
                  <div className="d-flex flex-column align-items-end">
                    <p className="text-white">Feature 2</p>
                    <img
                      className=""
                      style={{ width: "10%" }}
                      alt=""
                      src="/group-9088@2x.png"
                    />
                  </div>
                </Fade>
                <Fade left>
                  <div className="d-flex justify-content-end  mt-5">
                    <div className="d-flex">
                      <p className="text-white">Feature 1</p>
                      <span>
                        <img
                          className="mx-4"
                          style={{ width: "20%" }}
                          alt=""
                          src="/group-9088@2x.png"
                        />
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col">
                <Zoom bottom>
                  <img
                    className="w-100 top-div-custom-img"
                    alt=""
                    src="/kisspngcarfawgroupdumptrucksemitrailertrucktrucks5abe85e1ecdd71-2@2x.png"
                  />
                </Zoom>
              </div>
              <div className="col">
                <Fade right>
                  <div className="d-flex flex-column ">
                    <p className="text-white">Feature 3</p>
                    <img
                      className=""
                      style={{ width: "10%" }}
                      alt=""
                      src="/group-9088@2x.png"
                    />
                  </div>
                </Fade>
                <Fade right>
                  <div className="d-flex flex-column ml-5 mt-5">
                    <p className="text-white">Feature 4</p>
                    <img
                      className=""
                      style={{ width: "10%" }}
                      alt=""
                      src="/group-9088@2x.png"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="row  "></div>
      </div>
<div className="main-div">
      <div className="container second-header">
        <div className="row">
          <div className="col">
            <Fade bottom>
              <div className="d-flex pb-5" style={{ gap: "2rem" }}>
                <div className="hover-underline-animation">All Vehicles</div>
                <div className="hover-underline-animation">2-wheeler</div>
                <div className="hover-underline-animation">4-wheeler</div>
                <div className="hover-underline-animation">6-wheeler</div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
</div>
      <div className="container first-model pt-5 pb-5 pl-5">
        <div className="row">
          <Fade bottom>
            <div className="col-12 col-lg-6 col-md-6 ">
              <Fade bottom>
                <h2 className="">Model Name</h2>
                <p>
                  Et harum quidem rerum facilis est et <br /> expedita
                  distinctio. Nam libero tempore, <br />
                  cum soluta nobis est
                </p>
              </Fade>

              <Fade bottom>
                <div
                  className="d-flex text-center align-items-baseline mt-5"
                  style={{ gap: "0.8rem" }}
                >
                  <div className="first d-flex flex-column align-items-center">
                    <img
                      className="w-25"
                      alt=""
                      src="/electriccarevicon-1@2x.png"
                    />
                    <span className="mt-2 first-charge-heading">
                      Full Charging
                    </span>
                    <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                      3{" "}
                      <span className="ml-1" style={{ fontSize: ".8rem" }}>
                        hrs
                      </span>{" "}
                    </span>
                  </div>
                  <div className="first d-flex flex-column align-items-center">
                    <img
                      className="w-25"
                      alt=""
                      src="/speedometercoloricon-1@2x.png"
                    />
                    <span className="mt-2 first-charge-heading" fontSize={{}}>
                      Max Speed
                    </span>
                    <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                      125{" "}
                      <span className="ml-1" style={{ fontSize: ".8rem" }}>
                        kmph
                      </span>{" "}
                    </span>
                  </div>
                  <div className="first d-flex flex-column align-items-center">
                    <img
                      className="w-25 "
                      alt=""
                      src="/carbatteryicon-1@2x.png"
                    />
                    <span className="mt-2 first-charge-heading">Mileage</span>
                    <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                      50{" "}
                      <span className="ml-1" style={{ fontSize: ".8rem" }}>
                        kms
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          </Fade>
          <Zoom right>
            <div className="col-12 col-lg-6 col-md-7  ">
              <img
                className="w-100"
                alt=""
                src="/3futuristicperformanceremovebgpreview-1-1@2x.png"
              />
            </div>
          </Zoom>
        </div>
      </div>

      <div
        className="container first-model pt-5 pb-5 pl-5"
        style={{ marginTop: "80px" }}
      >
        <div className="row">
          <div className="col-12 col-lg-6 col-md-7 ">
            <img
              className="w-100 second-scale"
              alt=""
              src="/kisspngcarfawgroupdumptrucksemitrailertrucktrucks5abe85e1ecdd71-3@2x.png"
            />
          </div>

          {/* <div classecond-div> */}
          <div className="col-12 col-lg-6 col-md-6 p-5 text-end second-div">
            <h2 className="">Model Name</h2>
            <p>
              Et harum quidem rerum facilis est et <br /> expedita distinctio.
              Nam libero tempore, <br />
              cum soluta nobis est
            </p>
            <div
              className="d-flex text-center align-items-baseline mt-5 justify-content-end"
              style={{ gap: "0.8rem" }}
            >
              <div className="first d-flex flex-column align-items-center">
                <img
                  className="w-25"
                  alt=""
                  src="/electriccarevicon-1@2x.png"
                />
                <span className="mt-2 first-charge-heading">Full Charging</span>
                <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                  3{" "}
                  <span className="ml-1" style={{ fontSize: ".8rem" }}>
                    hrs
                  </span>{" "}
                </span>
              </div>
              <div className="first d-flex flex-column align-items-center">
                <img
                  className="w-25"
                  alt=""
                  src="/speedometercoloricon-1@2x.png"
                />
                <span className="mt-2 first-charge-heading" fontSize={{}}>
                  Max Speed
                </span>
                <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                  125{" "}
                  <span className="ml-1" style={{ fontSize: ".8rem" }}>
                    kmph
                  </span>{" "}
                </span>
              </div>
              <div className="first d-flex flex-column align-items-center">
                <img
                  className="w-25"
                  alt=""
                  src="/carbatteryicon-1@2x.png"
                  style={{ transform: "scale(1.3)" }}
                />
                <span className="mt-2 first-charge-heading">Mileage</span>
                <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                  50{" "}
                  <span className="ml-1" style={{ fontSize: ".8rem" }}>
                    kms
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container first-model pt-5 pb-5 pl-5 "
        style={{ marginTop: "80px" }}
      >
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <h2 className="">Model Name</h2>
            <p className="" style={{ marginTop: "10px" }}>
              Et harum quidem rerum facilis est et <br /> expedita distinctio.
              Nam libero tempore, <br />
              cum soluta nobis est
            </p>
            <div
              className="d-flex text-center align-items-baseline mt-5"
              style={{ gap: "0.8rem" }}
            >
              <div className="first d-flex flex-column align-items-center">
                <img
                  className="w-25"
                  alt=""
                  src="/electriccarevicon-1@2x.png"
                />
                <span className="mt-2 first-charge-heading">Full Charging</span>
                <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                  3{" "}
                  <span className="ml-1" style={{ fontSize: ".8rem" }}>
                    hrs
                  </span>{" "}
                </span>
              </div>
              <div className="first d-flex flex-column align-items-center">
                <img
                  className="w-25"
                  alt=""
                  src="/speedometercoloricon-1@2x.png"
                />
                <span className="mt-2 first-charge-heading" fontSize={{}}>
                  Max Speed
                </span>
                <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                  125{" "}
                  <span className="ml-1" style={{ fontSize: ".8rem" }}>
                    kmph
                  </span>{" "}
                </span>
              </div>
              <div className="first d-flex flex-column align-items-center">
                <img className="w-25" alt="" src="/carbatteryicon-1@2x.png" />
                <span className="mt-2 first-charge-heading">Mileage</span>
                <span className="mt-3" style={{ fontSize: "1.6rem" }}>
                  50{" "}
                  <span className="ml-1" style={{ fontSize: ".8rem" }}>
                    kms
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-md-7 ">
            <img
              className="w-100"
              alt=""
              src="/3futuristicperformanceremovebgpreview-1-1@2x.png"
            />
          </div>
        </div>
      </div>

      <section className="footer-sec">
        <div className="container-fluid footer mt-5  p-5">
          <div className="row p-5">
            <div className="col-12 col-lg-4 col-md-6 col-bg p-5">
              <p>
                {" "}
                <MdOutlineMailLock size={25} className="mx-2" /> We'd love to
                hear from you
              </p>
              <p className="footer-touch">GET IN TOUCH</p>
              <div className="d-flex flex-column">
                <input
                  type="text"
                  placeholder="Business Related"
                  name=""
                  id=""
                  className="p-2 mt-4"
                  style={{ borderRadius: "10px", border: "solid 2px black" }}
                />
                <input
                  type="text"
                  placeholder="Driver Related"
                  name=""
                  id=""
                  className="p-2 mt-4"
                  style={{ borderRadius: "10px", border: "solid 2px black" }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-8 col-md-6 px-5">
              <div className="d-flex flex-wrap" style={{ gap: "1.29rem" }}>
                <div className="text-center">
                  <span className="footer-text">Home</span>
                  <div className="line mt-3"></div>
                </div>
                <div className="text-center">
                  <span className="footer-text">Business</span>
                  <div className="line mt-3"></div>
                </div>
                <div className="text-center">
                  <span className="footer-text">Business</span>
                  <div className="line mt-3"></div>
                </div>
                <div className="text-center">
                  <span className="footer-text">Driver</span>
                  <div className="line mt-3"></div>
                </div>
                <div className="text-center">
                  <span className="footer-text">Vehicle</span>
                  <div className="line mt-3"></div>
                </div>
                <div className="text-center">
                  <span className="footer-text">About us</span>
                  <div className="line mt-3"></div>
                </div>
              </div>
              <p className="mt-5">Located in</p>
              <div className="row">
                <div className="col">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin, eros id tincidunt feugiat, sem magna tristique
                  nunc viverra vehic
                </div>
                <div className="col">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin, eros id tincidunt feugiat, sem magna tristique
                  nunc viverra vehic
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicle2;
