export let listofFirst = [
  {
    dim: "6",
    id: "passportNumber",
    title: "Passport Number",
    isMandatory: true,
    placeholder: "Enter Passport Number",
    disable: false,
  },
  {
    dim: "6",
    id: "fullNameEn",
    title: "Full Name",
    isMandatory: true,
    placeholder: "Enter full Name",
    val: "Moin Mostakin",
    disable: false,
  },
  {
    dim: "6",
    id: "dob",
    title: "Date of birth",
    isMandatory: true,
    placeholder: "Enter date of birth",
    disable: false,
  },
  {
    dim: "6",
    id: "fullNameBn",
    title: "পূর্ণনাম",
    isMandatory: true,
    placeholder: "পূর্ণনাম",
    disable: false,
  },
  {
    dim: "6",
    id: "mobile",
    title: "Mobile Number",
    isMandatory: true,
    placeholder: "Mobile Number",
    val: "01921921987",
    disable: true,
  },
  {
    dim: "6",
    id: "email",
    title: "E-mail",
    isMandatory: false,
    placeholder: "Enter E-mail",
    val: "moin@commlinkinfotech.com",
    disable: false,
  },
];

export let listofSecond = [
  {
    dim: "4",
    id: "father",
    title: "Father",
    isMandatory: true,
    placeholder: "Enter Father's Name",
    disable: false,
  },
  {
    dim: "4",
    id: "mother",
    title: "Mother",
    isMandatory: true,
    placeholder: "Enter Mother's Name",
    disable: false,
  },
  {
    dim: "4",
    id: "spouse",
    title: "Spouse",
    isMandatory: false,
    placeholder: "Enter Spouse's Name",
    disable: false,
  },
  {
    dim: "4",
    id: "nationality",
    title: "Nationality",
    options: [
      { id: "bangladeshi", value: "bangladeshi", title: "Bangladeshi" },
      { id: "india", value: "ind", title: "India" },
    ],
    isMandatory: true,
    disable: false,
  },
  {
    dim: "4",
    id: "gender",
    title: "Gender",
    isMandatory: true,
    options: [
      { id: "male", value: "male", title: "Male" },
      { id: "female", value: "female", title: "Female" },
      { id: "others", value: "others", title: "Others" },
    ],
    disable: false,
  },
  {
    dim: "4",
    id: "maritalStatus",
    title: "Marital Status",
    isMandatory: false,
    options: [
      { id: "single", value: "single", title: "Single" },
      { id: "married", value: "married", title: "Married" },
    ],
    disable: false,
  },
];
export let listofThird = [
  {
    dim: "6",
    id: "country",
    title: "Country",
    isMandatory: true,
    options: [
      { id: "bd", value: "bd", title: "Bangladesh" },
      { id: "ind", value: "ind", title: "India" },
    ],
    disable: false,
  },
  {
    dim: "6",
    id: "state",
    title: "State",
    isMandatory: false,
    placeholder: "Enter State",
    disable: false,
  },
];
export let listofForth = [
  {
    dim: "6",
    id: "country",
    title: "Country",
    isMandatory: true,
    options: [
      { id: "bd", value: "bd", title: "Bangladesh" },
      { id: "ind", value: "ind", title: "India" },
    ],
    disable: false,
  },
  {
    dim: "6",
    id: "state",
    title: "State",
    isMandatory: false,
    placeholder: "Enter State",
    disable: false,
  },
];
export function convertecDataToPI(data) {
  let convertedData = {
    identifierNumber: data.nationalId,
    fullNameBn: data.name,
    fullNameEn: data.nameEn,
    dob: data.dateOfBirth,
    father: data.father,
    mother: data.mother,
    spouse: data.spouse,
    mobile: data.mobileNumber,
    presentAddress: { ...data.presentAddress },
    permanentAddress: { ...data.permanentAddress },
  };
  return convertedData;
}
