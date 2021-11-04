import React from 'react';

import useForm from './form-hook';

import InputLabel from './input-label';

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
            <InputLabel
              name="firstName"
              labelText="First Name"
              onBlur={handleFormEvent}
            />
            <InputLabel
              name="lastName"
              labelText="Last Name"
              onBlur={handleFormEvent}
            />
          </div>
          <div className="row">
            <InputLabel
              name="npiNum"
              labelText="NPI number"
              error={formErrors.npiNum}
              errorText={'Enter a valid NPI number'}
              onBlur={handleFormEvent}
            />
          </div>
          <div className="row">
            <InputLabel
              name="bizAddress"
              labelText="Business address"
              onBlur={handleFormEvent}
            />
          </div>
          <div className="row">
            <InputLabel
              name="teleNum"
              labelText="Telephone number"
              error={formErrors.teleNum}
              errorText={'Enter a valid telephone number'}
              onBlur={handleFormEvent}
            />
          </div>
          <div className="row">
            <InputLabel
              name="email"
              labelText="Email address"
              error={formErrors.email}
              errorText={'Enter a valid email address'}
              onBlur={handleFormEvent}
            />
          </div>
          <div className="footer-row">
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
