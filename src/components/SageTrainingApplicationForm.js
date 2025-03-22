import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SageTrainingApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    currentSchool: "",
    grade: "",
    course: "",
    
  });

  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/sage-training-application", formData);
      toast.success("Application Submitted Successfully!");
      setFormData({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        email: "",
        phone: "",
        address: "",
        grade: "",
        course: "",
        
      });
      setPage(1);
    } catch (error) {
      toast.error("Error Submitting Application!");
    }
  };

  const handleNextPage = () => {
    if (page < 4) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="mb-4">Sage Training Institution Application</h4>

        {/* Welcome Message */}
        <p className="mb-4 text-muted">
          Welcome to Sage Training Institution! Please fill out the application form below to get started with your journey.
        </p>

        {/* Page 1: Personal Information */}
        {page === 1 && (
          <div>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Nationality</label>
              <input
                type="text"
                className="form-control"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {/* Page 2: Contact Information */}
        {page === 2 && (
          <div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {/* Page 3: Academic Information */}
        {page === 3 && (
          <div>
            
            <div className="mb-3">
              <label className="form-label">Grade/Level</label>
              <input
                type="text"
                className="form-control"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Course/Program Interested In</label>
              <input
                type="text"
                className="form-control"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Preferred Start Date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {/* Page 4: Additional Information */}
        {page === 4 && (
          <div>
          
            <div className="mb-3">
              <label className="form-label">Additional Message</label>
              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange} 
                required
              />
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="d-flex justify-content-between">
          {page > 1 && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handlePreviousPage}
            >
              Previous
            </button>
          )}
          {page < 4 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNextPage}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Submit Application
            </button>
          )}
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SageTrainingApplicationForm;
