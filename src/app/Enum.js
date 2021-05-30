export const GENDER = {
  MALE: 0,
  FEMALE: 1,
  OTHERS: 2,
};

export const PRODUCTTYPE = {
  SAVINGS: 0,
  CURRENT: 1,
};

export const ACCOUNTTYPE = {
  SINGLE: 0,
  JOINT: 1,
};

export const MARITALSTATUS = {
  SINGLE: "Single",
  MARRIED: "Married",
};

export const ADDITIONALSERVICES = {
  CHECKBOOK: "Check Book",
  DEBITCARD: "Debit Card",
  SMSALERT: "SMS Alert",
};

export const IDENTITYTYPE = {
  NID: { name: "Natioanl ID", value: 3 },
  PASSPORT: { name: "Passport", value: 5 },
};

export const DOCUMENTCHECKLIST = {
  PHOTO: 1,
  SIGNATURE: 2,
  NIDFRONT: 3,
  NIDBACK: 4,
  PASSPORT: 5,
};

export const IDENTITYLIST = [IDENTITYTYPE.NID, IDENTITYTYPE.PASSPORT];
