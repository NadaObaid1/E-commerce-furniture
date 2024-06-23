import React from "react";
import "./Employees.css";
import image1 from "../../assests/person1.jpg";
import image2 from "../../assests/person2.jpg";
import image3 from "../../assests/person3.jpg";
import image4 from "../../assests/person4.jpg";
import image5 from "../../assests/person5.jpg";

const employeesData = [
  {
    img: image1,
    name: "Jaime R.",
    review: "Therno where else i thoo lar affordable onine bonte decor !",
    rating: 4,
  },
  {
    img: image2,
    name: "Kara S.",
    review:
      "Amaring store I ton to shop at the very lant aulmita when shopping for a special occasion Novalie never fails. Docor items.",
    rating: 2,
  },
  {
    img: image3,
    name: "Maeve K.",
    review: "This troutique is ceriously oue of a kind and hands down.rny favotite.",
    rating: 1,
  },
  {
    img: image4,
    name: "Jess1.",
    review: "Geeatott customer serviee! The Stytist communicated witti me to pick the cutess pieces.",
    rating: 3,
  },
  {
    img: image5,
    name: "Jess1.",
    review: "Geeatott customer serviee! The Stytist communicated witti me to pick the cutess pieces.",
    rating: 3,
  },
];

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
        <img src={employee.img} alt={employee.name} />
      </div>
      <h4>{employee.name}</h4>
      <p>{employee.review}</p>
      <Rating rating={employee.rating} />
    </div>
  );
};

function Employees() {
  return (
    <div className="containerEmployees">
      <h2 className="titleEmployees">Employees</h2>
      <hr className="title-hr" />
      <div className="cards">
        {employeesData.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default Employees;
