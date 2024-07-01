import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Employees.css";

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("https://e-commercefurniturebackend.onrender.com/Employees/employee");
        setEmployeesData(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []); 

  const Rating = ({ rating }) => {
    return (
      <div className="rating">
        {[...Array(5)].map((star, index) => {
          return (
            <span key={index} className={index < rating ? "filled-star" : "empty-star"}>
              &#9733;
            </span>
          );
        })}
      </div>
    );
  };

  const EmployeeCard = ({ employee }) => {
    return (
      <div className="card">
        <div className="person">
          <img src={employee.image.secure_url} alt={employee.name} />
        </div>
        <h4>{employee.name}</h4>
        <p>{employee.descrption}</p> 
        <Rating rating={employee.rating} />
      </div>
    );
  };

  return (
    <div className="containerEmployees">
      <h2 className="titleEmployees">Employees</h2>
      <hr className="title-hr" />
      <div className="cards">
        {employeesData.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Employees;
