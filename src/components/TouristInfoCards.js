import React from "react";

export default function TouristInfoCards() {
  return (
    <div className="touristInfo">
      <div className="card">
        <img src="/images/beach.jpg" className="card-img-top" alt="asmara" />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="/images/apartment-bed-bedroom-271624.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <a href="https://visitmanchester.com/" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src="/images/hotel-leisure.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
}
