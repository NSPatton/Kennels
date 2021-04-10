import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
  return (
      <div className="card">
          <div className="card-content">
              <div className="customers">
                  <div className="customer">
                      <h3>Name: <span className="card-customername">
                          {customer.name}
                      </span></h3>
                      <p>Address: {customer.address}</p>
                      <Link to={`/customers/${customer.id}`}>
                          <button>Details</button>
                      </Link>
                      <Link to={`/customers/${customer.id}/edit`}>
                      <button type="button">
                          Edit
                      </button>
                      </Link>
                      <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
                  </div>
              </div>
          </div>
      </div>
  );
}