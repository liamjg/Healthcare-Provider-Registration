// validates North American phone numbers
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html

export const validateTelephoneNumber = (teleNum) => {
  return PHONE_REGEX.test(teleNum);
};

// validates email addresses
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// source: https://emailregex.com/

export const validateEmailAddr = (emailAddr) => {
  return EMAIL_REGEX.test(emailAddr);
};

// validates NPI length and composition (but not checksum)
const NPI_REGEX = /^\d{10}$/;
// source: me + wikipedia

export const validateNPINum = (npiNum) => {
  return NPI_REGEX.test(npiNum);
};

// TODO: Validate address. Probably easiest to use an external API, REGEX would be very tricky...
