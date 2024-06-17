import React, { useState } from "react";
import { toast } from "react-toastify";

const URL = "http://localhost:3000/api/data/service";

const workerNames = ["X", "Y", "Z", "A"];
const serviceNames = [
  "Room Cleaning",
  "Washroom Cleaning",
  "Laundry",
  "Mess Food",
];

export const Service = () => {
  const [complaints, setComplaints] = useState([
    {
      worker: "Mr. X",
      service: "Room Cleaning",
      username: "",
      location: "",
      availability: "",
      submittedOn: "",
      description: "",
    },
    {
      worker: "Mr. A",
      service: "washroom Cleaning",
      username: "",
      location: "",
      availability: "",
      submittedOn: "",
      description: "",
    },
    {
      worker: "Mr. Y",
      service: "Laundry Service",
      username: "",
      location: "",
      availability: "",
      submittedOn: "",
      description: "",
    },
    {
      worker: "Mr. B",
      service: "Mess Food Quality",
      username: "",
      location: "",
      availability: "",
      submittedOn: "",
      description: "",
    },
    {
      worker: "Mr. Z",
      service: "Electric Service",
      username: "",
      location: "",
      availability: "",
      submittedOn: "",
      description: "",
    },
    {
      worker: "Mr. C",
      service: "Carpentry Service",
      username: "",
      location: "",
      availability: "",
      submittedOn: "",
      description: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint, i) =>
        i === index ? { ...complaint, [name]: value } : complaint
      )
    );
  };

  const handleSubmit = async (e, index) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(complaints[index]),
      });

      const resData = await response.json();
     
      if (response.ok) {
        console.log(
          "Complaint submitted for card",
          index + 1,
          complaints[index]
        );
        toast.success("complaint send successfully");
        setComplaints((prevComplaints) =>
          prevComplaints.map((complaint, i) =>
            i === index ? { ...complaint, ...initialState } : complaint
          )
        );
      } else {
        toast.error(
          resData.extraDetails ? resData.extraDetails : resData.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };
  const initialState = {
    username: "",
    location: "",
    availability: "",
    submittedOn: "",
    description: "",
  };
  return (
    <div className="service-container">
      <h1>Service Complaint System</h1>
      <div className="complaint-box">
        {complaints.map((complaint, index) => (
          <div className="complaint-form" key={index}>
            <form onSubmit={(e) => handleSubmit(e, index)}>
              <div className="inputBox">
                <label htmlFor={`worker-${index}`}>worker:</label>
                <input
                  type="text"
                  name="worker"
                  placeholder="worker name"
                  id={`worker-${index}`}
                  required
                  autoComplete="off"
                  defaultValue={workerNames[0]}
                  value={complaint.worker}
                />
              </div>
              <div className="inputBox">
                <label htmlFor={`service-${index}`}>service:</label>
                <input
                  type="text"
                  name="service"
                  placeholder=""
                  id={`service-${index}`}
                  required
                  autoComplete="off"
                  defaultValue={serviceNames[0]}
                  value={complaint.service}
                />
              </div>
             
              <div className="inputBox">
                <label htmlFor={`username-${index}`}>Username:</label>
                <input
                  type="text"
                  name="username"
                  id={`username-${index}`}
                  placeholder="enter username"
                  required
                  autoComplete="off"
                  value={complaint.username}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div className="inputBox">
                <label htmlFor={`location-${index}`}>Location:</label>
                <input
                  type="text"
                  name="location"
                  id={`location-${index}`}
                  placeholder="enter floor or room no"
                  required
                  autoComplete="off"
                  value={complaint.location}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div className="inputBox">
                <label htmlFor={`availability-${index}`}>Time:</label>
                <input
                  type="time"
                  name="availability"
                  id={`availability-${index}`}
                  placeholder="enter time"
                  required
                  autoComplete="off"
                  value={complaint.availability}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div className="inputBox">
                <label htmlFor={`submittedOn-${index}`}>Date:</label>
                <input
                  type="date"
                  name="submittedOn"
                  id={`submittedOn-${index}`}
                  placeholder="enter date"
                  required
                  autoComplete="off"
                  value={complaint.submittedOn}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>

              <div className="inputBox">
                <label htmlFor={`description-${index}`}>Description:</label>
                <input
                  type="text"
                  name="description"
                  id={`description-${index}`}
                  placeholder="description about complaint"
                  required
                  autoComplete="off"
                  value={complaint.description}
                  onChange={(e) => handleInputChange(e, index)}
                  cols="30"
                  rows="3"
                />
              </div>

              <button type="submit" style={{ float: "left" }}>
                Submit
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};
