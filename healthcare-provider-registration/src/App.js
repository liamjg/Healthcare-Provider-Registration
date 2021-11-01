import React, { useState } from 'react';
import './app.scss';

import {
  validateNPINum,
  validateEmailAddr,
  validateTelephoneNumber,
} from './validators';

const initialFormData = {
  firstName: '',
  lastName: '',
  npiNum: '',
  teleNum: '',
  bizAddress: '',
  email: '',
};

const initialFormErrors = {
  firstName: false,
  lastName: false,
  npiNum: false,
  teleNum: false,
  bizAddress: false,
  email: false,
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFormData({ ...formData, firstName: value });
        break;

      case 'lastName':
        setFormData({ ...formData, lastName: value });
        break;

      case 'npiNum':
        if (!value || validateNPINum(value)) {
          setFormData({ ...formData, npiNum: value });
          setFormErrors({ ...formErrors, npiNum: false });
        } else {
          setFormData({ ...formData, npiNum: '' });
          setFormErrors({ ...formErrors, npiNum: true });
        }
        break;

      case 'teleNum':
        if (!value || validateTelephoneNumber(value)) {
          setFormData({ ...formData, teleNum: value });
          setFormErrors({ ...formErrors, teleNum: false });
        } else {
          setFormData({ ...formData, teleNum: '' });
          setFormErrors({ ...formErrors, teleNum: true });
        }
        break;

      case 'bizAddress':
        setFormData({ ...formData, bizAddress: value });
        break;

      case 'email':
        if (!value || validateEmailAddr(value)) {
          setFormData({ ...formData, email: value });
          setFormErrors({ ...formErrors, email: false });
        } else {
          setFormData({ ...formData, email: '' });
          setFormErrors({ ...formErrors, email: true });
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    // this depends heavily on what we want to do with the data / form when finished
    e.preventDefault();

    console.log(formData);

    document.getElementById('healthcare-registration-form').reset();
    setFormData(initialFormData);
    setFormErrors(initialFormErrors);
  };

  const filled = Object.values(formData).every((value) => value !== '');
  const error = Object.values(formData).some((value) => value === true);

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
          <div className="row">
            <span className="input-label">
              <label htmlFor="npiNum">NPI number</label>
              <input
                className={`form-control ${formErrors.npiNum && 'error'}`}
                placeholder="NPI number"
                type="text"
                name="npiNum"
                onBlur={handleChange}
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
                onBlur={handleChange}
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
                onBlur={handleChange}
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
                onBlur={handleChange}
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
