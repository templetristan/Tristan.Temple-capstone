import "./inputForm.jsx";
import React from "react";
import axios from "axios";

class AddNewEvent extends React.Component {

  state = {
    eventType: "",
    location: "",
    date: "",
    description: "",
    contactName:"",
    contactEmail:"",
    contactPhone:"",

  }

handleChange = (e) => {
  this.setState({
  [e.target.name]: e.target.value
  })


}

addWarehouse = (e) => {
  e.preventDefault()
  const {eventType, location, date, description, contactName, contactPhone, contactEmail} = this.state
  const stateData = {
    eventType,
    location,
    date,
    description,
    contact: {
      name: contactName,             
      phone: contactPhone,
      email: contactEmail,
  }
}
  console.log(stateData)
  axios.post("http://localhost:8080/warehouses", stateData)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}


  render() {
    const {eventType, location, date, description, contactName, contactPhone, contactEmail} = this.state
    return (
      <section className="add-edit">
        <div className="add-edit-box">
          <h1 className="add-edit-title">
           
           
            Add New Event
          </h1>
        </div>

        <section className="add-form">
          <form className="add-form-container">
            <div className="add-form-container--warehouse">
              <div className="add-form-title--wrapper">
                <h2 className="add-form-heading">Event Details</h2>
              </div>
              <label className="add-form-label__warehouse">
                <div className="add-form__warehouse--wrapper">
                  <h3 className="add-form__title">Event Type</h3>
                  <select
                    className="add-form__input"
                    type="text"
                    name="eventType"
                    placeholder="eventType"
                    onChange={this.handleChange}
                    value={eventType}
                   >
                <option value="Please select">Please select</option>
                <option value="Tennis">Tennis</option>
                <option value="Golf">Golf</option>
                <option value="Basketball">Basketball</option>
                <option value="Frolf">Frolf</option>
                <option value="other">Other</option>
                </select>
            
                  <h3 className="add-form__title">Location</h3>
                  <input
                    className="add-form__input"
                    type="text"
                    name="location"
                    placeholder="Street Address"
                    onChange={this.handleChange}
                    value={location}
                  ></input>

                  <h3 className="add-form__title">Date</h3>
                  <input
                    className="add-form__input"
                    type="text"
                    name="date"
                    placeholder="date"
                    onChange={this.handleChange}
                    value={date}
                  ></input>

                  <h3 className="add-form__title">Description</h3>
                  <input
                    className="add-form__input"
                    type="text"
                    name="Description"
                    placeholder="Add a descrition of event"
                    onChange={this.handleChange}
                    value={description}
                  ></input>
                </div>
              </label>
            </div>

            <div className="add-form-container--contact">
              <div className="add-form-title--wrapper">
                <h2 className="add-form-heading">Contact Details</h2>
              </div>
              <label className="add-form-label__contact">
                <h3 className="add-form__title">Contact Name</h3>
                <input
                  className="add-form__input"
                  type="text"
                  name="contactName"
                  placeholder="Contact Name"
                  onChange={this.handleChange}
                  value={contactName}
                ></input>
            
                <h3 className="add-form__title">Phone Number</h3>
                <input
                  className="add-form__input"
                  type="text"
                  name="contactPhone"
                  placeholder="Phone Number"
                  onChange={this.handleChange}
                  value={contactPhone}
                ></input>

                <h3 className="add-form__title">Email</h3>
                <input
                  className="add-form__input"
                  type="text"
                  name="contactEmail"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={contactEmail}
                ></input>
              </label>
            </div>

            <div className="add-form-btn">
              <button className="add-form-btn__cancel">Cancel</button>
              <button onClick={this.addWarehouse} className="add-form-btn__save">+ Add Warehouse</button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default AddNewEvent;