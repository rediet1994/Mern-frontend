import React, { useEffect, useState } from "react";
import axios from "axios";

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/applications");
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Applications</h2>
      {applications.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Course</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.fullName}</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>{app.age}</td>
                <td>{app.gender}</td>
                <td>{app.course}</td>
                <td>{app.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applications yet!</p>
      )}
    </div>
  );
};

export default ApplicationsList;
