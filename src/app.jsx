import React from 'react';

import useForm from './form-hook';

import './app.scss';

const initialFormData = {
  firstName: '',
  lastName: '',
  npiNum: '',
  teleNum: '',
  bizAddress: '',
  email: '',
};

const initialFormErrors = {
  npiNum: false,
  teleNum: false,
  email: false,
};

const App = () => {
  const [formData, formErrors, handleFormEvent, resetForm] = useForm(
    initialFormData,
    initialFormErrors
  );

  const handleSubmit = (e) => {
    // this function depends heavily on what we want to do with the data / form when finished
    e.preventDefault();

    console.log(formData);

    document.getElementById('healthcare-registration-form').reset();
    resetForm();
  };

  const filled = Object.values(formData).every((value) => value !== '');
  const error = Object.values(formErrors).some((value) => value === true);

  return (
    <div className="main-content">
      <div className="form-modal">
        <div className="header-row">
          <h3>Healthcare provider registration</h3>
        </div>
        <form
          id="healthcare-registration-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="row">
            <span className="input-label">
              <label htmlFor="firstName">First name</label>
              <input
                className="form-control"
                placeholder="First Name"
                type="text"
                name="firstName"
                onBlur={handleFormEvent}
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
                onBlur={handleFormEvent}
                noValidate
              />
            </span>
          </div>
          <div className="row">
            <span className="input-label">
              <label htmlFor="npiNum">NPI number</label>
              <input
                className={`form-control ${formErrors.npiNum && 'error'}`}
                placeholder="NPI number"
                type="text"
                name="npiNum"
                onBlur={handleFormEvent}
                noValidate
              />
              {formErrors.npiNum && <small>Enter a valid NPI number</small>}
            </span>
          </div>
          <div className="row">
            <span className="input-label">
              <label htmlFor="bizAddress">Business address</label>
              <input
                className={`form-control ${formErrors.bizAddress && 'error'}`}
                placeholder="Business address"
                type="text"
                name="bizAddress"
                onBlur={handleFormEvent}
                noValidate
              />
            </span>
          </div>
          <div className="row">
            <span className="input-label">
              <label htmlFor="teleNum">Telephone number</label>
              <input
                className={`form-control ${formErrors.teleNum && 'error'}`}
                placeholder="Telephone number"
                type="text"
                name="teleNum"
                onBlur={handleFormEvent}
                noValidate
              />
              {formErrors.teleNum && (
                <small>Enter a valid telephone number</small>
              )}
            </span>
          </div>
          <div className="row">
            <span className="input-label">
              <label htmlFor="email">Email address</label>
              <input
                className={`form-control ${formErrors.email && 'error'}`}
                placeholder="Email address"
                type="text"
                name="email"
                onBlur={handleFormEvent}
                noValidate
              />
              {formErrors.email && <small>Enter a valid email address</small>}
            </span>
          </div>
          <div className="last-row">
            <button type="submit" disabled={!filled || error}>
              Join Availity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
