import React, { useState } from 'react';
import './app.scss';

const initialFormData = {
  firstName: '',
  lastName: '',
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFormData({ ...formData, firstName: value });
        break;

      case 'lastName':
        setFormData({ ...formData, lastName: value });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log(formData);
  };

  const filled = Object.values(formData).every((value) => value !== '');

  return (
    <div className="main-content">
      <div className="form-modal">
        <div className="header-row">
          <h3>Healthcare provider registration</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <span className="input-label">
              <label htmlFor="firstName">First name</label>
              <input
                className="form-control"
                placeholder="First Name"
                type="text"
                name="firstName"
                onBlur={handleChange}
                noValidate
              />
            </span>
            <span className="input-label">
              <label htmlFor="lastName">Last name</label>
              <input
                className="form-control"
                placeholder="Last Name"
                type="text"
                name="lastName"
                onBlur={handleChange}
                noValidate
              />
            </span>
          </div>
          <div className="last-row">
            <button type="submit" disabled={!filled}>
              Join Availity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
