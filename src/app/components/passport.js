import { createDivisionOptions, mappedDistrict } from "../data/division";
import { findUpozella } from "../data/upozillamapped";
export let listofFirst = [
  {
    dim: "6",
    id: "fullNameBn",
    title: "পূর্ণনাম",
    isMandatory: false,
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
    id: "firstName",
    title: "First Name",
    isMandatory: true,
    placeholder: "Enter First Name",
    val: "Moin",
    disable: false,
  },
  {
    dim: "4",
    id: "lastName",
    title: "Last Name",
    isMandatory: true,
    placeholder: "Enter Last Name",
    val: "Mostakin",
    disable: false,
  },
  {
    dim: "4",
    id: "fullNameEn",
    title: "Full Name",
    isMandatory: true,
    placeholder: "Enter full Name",
    val: "Moin Mostakin",
    disable: false,
  },
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
  {
    dim: "4",
    id: "tinNo",
    title: "TIN No",
    isMandatory: false,
    placeholder: "Enter TIN No",
    disable: false,
  },
];
export let listofThird = [
  {
    dim: "4",
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
    dim: "4",
    id: "pr_division_en",
    title: "Division",
    isMandatory: true,
    options: [...createDivisionOptions()],
    disable: false,
  },
  {
    dim: "4",
    id: "pr_district_en",
    title: "District",
    isMandatory: true,
    options: [...mappedDistrict("Dhaka")],
    disable: false,
  },
  {
    dim: "4",
    id: "pr_upozila_en",
    title: "Upozila",
    isMandatory: true,
    options: [...findUpozella("Dhaka", "Dhaka")],
    disable: false,
  },
  {
    dim: "4",
    id: "cityCorporationOrMunicipality",
    title: "City/Municipality",
    isMandatory: true,
    placeholder: "Enter City or Municipality",
    //options: [{ id: "dhk", value: "dhk", title: "Dhaka" }],
    disable: false,
  },
  {
    dim: "4",
    id: "unionOrWard",
    title: "Union/Ward",
    isMandatory: false,
    placeholder: "Enter Union or Ward",
    disable: false,
  },
  {
    dim: "4",
    id: "postOffice",
    title: "Post Office",
    isMandatory: false,
    placeholder: "Enter Post Office",
    disable: false,
  },
  {
    dim: "4",
    id: "postalCode",
    title: "Postal Code",
    isMandatory: false,
    placeholder: "Enter Postal Code",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalVillageOrRoad",
    title: "Village/Road",
    isMandatory: false,
    placeholder: "Enter Village/Road",
    disable: false,
  },
  {
    dim: "4",
    id: "homeOrHoldingNo",
    title: "House/Holding No",
    isMandatory: false,
    placeholder: "Enter House/Holding No",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalMouzaOrMoholla",
    title: "Mouza/Moholla",
    isMandatory: false,
    placeholder: "Enter Mouza/Moholla",
    disable: false,
  },
];
export let listofFour = [
  {
    dim: "4",
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
    dim: "4",
    id: "pr_division_en",
    title: "Division",
    isMandatory: true,
    options: [...createDivisionOptions()],
    disable: false,
  },
  {
    dim: "4",
    id: "pr_district_en",
    title: "District",
    isMandatory: true,
    options: [...mappedDistrict("Dhaka")],
    disable: false,
  },
  {
    dim: "4",
    id: "pr_upozila_en",
    title: "Upozila",
    isMandatory: true,
    options: [...findUpozella("Dhaka", "Dhaka")],
    disable: false,
  },
  {
    dim: "4",
    id: "cityCorporationOrMunicipality",
    title: "City/Municipality",
    isMandatory: true,
    placeholder: "Enter City or Municipality",
    //options: [{ id: "dhk", value: "dhk", title: "Dhaka" }],
    disable: false,
  },
  {
    dim: "4",
    id: "unionOrWard",
    title: "Union/Ward",
    isMandatory: false,
    placeholder: "Enter Union or Ward",
    disable: false,
  },
  {
    dim: "4",
    id: "postOffice",
    title: "Post Office",
    isMandatory: false,
    placeholder: "Enter Post Office",
    disable: false,
  },
  {
    dim: "4",
    id: "postalCode",
    title: "Postal Code",
    isMandatory: false,
    placeholder: "Enter Postal Code",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalVillageOrRoad",
    title: "Village/Road",
    isMandatory: false,
    placeholder: "Enter Village/Road",
    disable: false,
  },
  {
    dim: "4",
    id: "homeOrHoldingNo",
    title: "House/Holding No",
    isMandatory: false,
    placeholder: "Enter House/Holding No",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalMouzaOrMoholla",
    title: "Mouza/Moholla",
    isMandatory: false,
    placeholder: "Enter Mouza/Moholla",
    disable: false,
  },
];
export let listofProfession = [
  {
    dim: "6",
    id: "institutionName",
    title: "Name of Institution",
    isMandatory: true,
    placeholder: "Enter Institution Name",
    disable: false,
  },
  {
    dim: "6",
    id: "institutionAddress",
    title: "Address",
    isMandatory: true,
    placeholder: "Enter Address",
    disable: false,
  },
  {
    dim: "6",
    id: "iPhoneNo",
    title: "Phone No",
    isMandatory: true,
    placeholder: "Enter Phone No",
    disable: false,
  },
  {
    dim: "6",
    id: "iEmailAddress",
    title: "Email Address",
    isMandatory: false,
    placeholder: "Enter Email Address",
    disable: false,
  },
];
export let listofTransaction = [
  {
    dim: "4",
    id: "proffession",
    title: "Proffession Name",
    isMandatory: true,
    placeholder: "Enter Proffession Name",
    disable: false,
  },
  {
    dim: "4",
    id: "sourceofFund",
    title: "Source of Fund",
    isMandatory: true,
    placeholder: "Enter Source of Fund",
    disable: false,
  },
  {
    dim: "4",
    id: "monthlyIncome",
    title: "Monthly Income",
    isMandatory: true,
    placeholder: "Enter Monthly Income",
    disable: false,
  },
];
export let listofIntroducer = [
  {
    dim: "6",
    id: "introducerName",
    title: "Name of Introducer",
    isMandatory: true,
    placeholder: "Enter Introducer Name",
    disable: false,
  },
  {
    dim: "6",
    id: "introducerAccount",
    title: "A/C No of Introduce",
    isMandatory: true,
    placeholder: "Enter A/C No of Introduce",
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
