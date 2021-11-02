import { useState } from 'react';

// validates North American phone numbers
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html

// validates email addresses
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// source: https://emailregex.com/

// validates NPI length and composition (but not checksum)
const NPI_REGEX = /^\d{10}$/;
// source: me + wikipedia

const validateTelephoneNumber = (teleNum) => PHONE_REGEX.test(teleNum);

const validateEmailAddr = (emailAddr) => EMAIL_REGEX.test(emailAddr);

const validateNPINum = (npiNum) => NPI_REGEX.test(npiNum);

const useForm = (initialFormData, initialFormErrors) => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const resetForm = () => {
    setFormData(initialFormData);
    setFormErrors(initialFormErrors);
  };

  const handleFormEvent = (e) => {
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

  return [formData, formErrors, handleFormEvent, resetForm];
};

export default useForm;
