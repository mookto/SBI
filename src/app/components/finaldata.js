export let listofFirst = [
  {
    dim: "6",
    id: "identifierNumber",
    title: "Identifier Number",
    isMandatory: true,
    placeholder: "Enter Identifier Number",
    val: "1988123456",
    disable: true,
  },
  {
    dim: "6",
    id: "fullNameEn",
    title: "Full Name",
    isMandatory: true,
    placeholder: "Enter full Name",
    val: "Moin Mostakin",
    disable: true,
  },
  {
    dim: "6",
    id: "dob",
    title: "Date of birth",
    isMandatory: true,
    placeholder: "Enter date of birth",
    val: "1988-09-19",
    disable: true,
  },
  {
    dim: "6",
    id: "fullNameBn",
    title: "পূর্ণনাম",
    isMandatory: true,
    placeholder: "পূর্ণনাম",
    val: "পূর্ণনাম পূর্ণনাম",
    disable: true,
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
    val: "Aslam Sheik",
    disable: false,
  },
  {
    dim: "4",
    id: "mother",
    title: "Mother",
    isMandatory: true,
    placeholder: "Enter Mother's Name",
    val: "Rajiya Beghum",
    disable: false,
  },
  {
    dim: "4",
    id: "spouse",
    title: "Spouse",
    isMandatory: false,
    placeholder: "Enter Spouse's Name",
    val: "N/A",
    disable: false,
  },
  {
    dim: "4",
    id: "nationality",
    title: "Nationality",
    options: [
      { id: "bangladeshi", value: "bangladeshi", title: "Bangladeshi" },
    ],
    isMandatory: true,
    disable: true,
  },
  {
    dim: "4",
    id: "gender",
    title: "Gender",
    isMandatory: true,
    options: [
      { id: "male", value: "MALE", title: "Male" },
      { id: "female", value: "FEMALE", title: "Female" },
      { id: "others", value: "OTHERS", title: "Others" },
    ],
    disable: false,
  },
  {
    dim: "4",
    id: "maritalStatus",
    title: "Marital Status",
    isMandatory: false,
    options: [
      { id: "single", value: "SINGLE", title: "Single" },
      { id: "married", value: "MARRIED", title: "Married" },
    ],
    disable: false,
  },
];
export let listofThird = [
  {
    dim: "4",
    id: "country",
    title: "Country",
    isMandatory: true,
    options: [{ id: "bd", value: "bd", title: "Bangladesh" }],
    disable: true,
  },
  {
    dim: "4",
    id: "division",
    title: "Division",
    isMandatory: true,
    options: [
      { id: "dhk", value: "dhk", title: "Dhaka" },
      { id: "khl", value: "khl", title: "Khulna" },
      { id: "ctg", value: "ctg", title: "Chittagong" },
    ],
    disable: false,
  },
  {
    dim: "4",
    id: "district",
    title: "District",
    isMandatory: true,
    options: [
      { id: "dhk", value: "dhk", title: "Dhaka" },
      { id: "khl", value: "khl", title: "Khulna" },
      { id: "ctg", value: "ctg", title: "Chittagong" },
    ],
    disable: false,
  },
  {
    dim: "4",
    id: "upozila",
    title: "Upozila",
    isMandatory: true,
    options: [{ id: "dhk", value: "dhk", title: "Dhaka" }],
    disable: false,
  },
  {
    dim: "4",
    id: "cityCorporationOrMunicipality",
    title: "City/Municipality",
    isMandatory: true,
    options: [{ id: "dhk", value: "dhk", title: "Dhaka" }],
    disable: false,
  },
  {
    dim: "4",
    id: "unionOrWard",
    title: "Union/Ward",
    isMandatory: false,
    placeholder: "Enter Union or Ward",
    val: "32 No Ward",
    disable: false,
  },
  {
    dim: "4",
    id: "postOffice",
    title: "Post Office",
    isMandatory: false,
    placeholder: "Enter Post Office",
    val: "Rampura",
    disable: false,
  },
  {
    dim: "4",
    id: "postalCode",
    title: "Postal Code",
    isMandatory: false,
    placeholder: "Enter Postal Code",
    val: "1219",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalMouzaOrMoholla",
    title: "Mouza/Moholla",
    isMandatory: false,
    placeholder: "Enter Mouza/Moholla",
    val: "Moulvirtek Khilgong",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalVillageOrRoad",
    title: "Village/Road",
    isMandatory: false,
    placeholder: "Enter Village/Road",
    val: "Road No 32",
    disable: false,
  },
  {
    dim: "4",
    id: "homeOrHoldingNo",
    title: "House/Holding No",
    isMandatory: false,
    placeholder: "Enter House/Holding No",
    val: "House no 1",
    disable: false,
  },
];
export let listofForth = [
  {
    dim: "4",
    id: "division",
    title: "Division",
    isMandatory: true,
    options: [
      { id: "dhk", value: "dhk", title: "Dhaka" },
      { id: "khl", value: "khl", title: "Khulna" },
      { id: "ctg", value: "ctg", title: "Chittagong" },
    ],
    disable: false,
  },
  {
    dim: "4",
    id: "district",
    title: "District",
    isMandatory: true,
    options: [
      { id: "dhk", value: "dhk", title: "Dhaka" },
      { id: "khl", value: "khl", title: "Khulna" },
      { id: "ctg", value: "ctg", title: "Chittagong" },
    ],
    disable: false,
  },
  {
    dim: "4",
    id: "upozila",
    title: "Upozila",
    isMandatory: true,
    options: [{ id: "dhk", value: "dhk", title: "Dhaka" }],
    disable: false,
  },
  {
    dim: "4",
    id: "unionOrWard",
    title: "Union/Ward",
    isMandatory: false,
    placeholder: "Enter Union or Ward",
    val: "32 No Ward",
    disable: false,
  },
  {
    dim: "4",
    id: "postOffice",
    title: "Post Office",
    isMandatory: false,
    placeholder: "Enter Post Office",
    val: "Rampura",
    disable: false,
  },
  {
    dim: "4",
    id: "postalCode",
    title: "Postal Code",
    isMandatory: false,
    placeholder: "Enter Postal Code",
    val: "1219",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalMouzaOrMoholla",
    title: "Mouza/Moholla",
    isMandatory: false,
    placeholder: "Enter Mouza/Moholla",
    val: "Moulovitek",
    disable: false,
  },
  {
    dim: "4",
    id: "additionalVillageOrRoad",
    title: "Village/Road",
    isMandatory: false,
    placeholder: "Enter Village/Road",
    val: "Sekhk Para, Road No 12",
    disable: false,
  },
  {
    dim: "4",
    id: "homeOrHoldingNo",
    title: "House/Holding No",
    isMandatory: false,
    placeholder: "Enter House/Holding No",
    val: "32",
    disable: false,
  },
];

export let nomineeInfo = [
  {
    dim: "6",
    id: "nomineeName",
    title: "Nominee Name",
    isMandatory: false,
    placeholder: "Enter Nominee Name",
    val: "Aslam Sheik",
    disable: false,
  },
  {
    dim: "6",
    id: "dob",
    title: "Date of Birth",
    isMandatory: false,
    placeholder: "Enter Date of Birth",
    val: "1988-02-19",
    disable: false,
  },
  {
    dim: "6",
    id: "relation",
    title: "Relation with A/C Holder",
    isMandatory: false,
    placeholder: "Enter Relation",
    val: "Father",
    disable: false,
  },
  {
    dim: "6",
    id: "sharePercent",
    title: "Share Percentage",
    isMandatory: false,
    placeholder: "Enter Relation",
    val: "100",
    disable: false,
  },
  {
    dim: "6",
    id: "IdentificationDocType",
    title: "Identification Type",
    options: [
      { id: "nid", value: "nid", title: "National ID Card" },
      { id: "passport", value: "passport", title: "Passport" },
    ],
    isMandatory: false,
    disable: false,
  },
  {
    dim: "6",
    id: "IdentificationDocID",
    title: "Identification Number",
    isMandatory: false,
    placeholder: "Enter Identification Number",
    val: "1988091248",
    disable: false,
  },
];
export let newAccount = [
  {
    dim: "6",
    id: "productType",
    title: "Product Type",
    options: [{ id: "saving", value: "saving", title: "Saving" }],
    isMandatory: true,
    disable: false,
  },
  {
    dim: "6",
    id: "accountType",
    title: "Account Type",
    options: [
      { id: "single", value: "single", title: "Single" },
      { id: "joint", value: "joint", title: "Joint" },
    ],
    isMandatory: true,
    disable: false,
  },
  {
    dim: "6",
    id: "mtransectionlimit",
    title: "Monthly Transection Amount",
    options: [
      { id: "upto", value: "upto", title: "Up to 100,000BDT" },
      { id: "above", value: "above", title: "Above 100,000 BDT" },
    ],
    isMandatory: true,
    disable: false,
  },
  {
    dim: "6",
    id: "preferred",
    title: "Preferred Branch",
    options: [
      { id: "gulshan", value: "gulshan", title: "Gulshan" },
      { id: "kawranbazar", value: "kawranbazar", title: "Kawranbazar" },
    ],
    isMandatory: true,
    disable: false,
  },
];
export let initialDeposit = [
  {
    dim: "6",
    id: "amount",
    title: "Amount",
    isMandatory: true,
    placeholder: "Enter Amount",
    val: "2000",
    disable: false,
  },
  {
    dim: "6",
    id: "amountword",
    title: "Amount in Word",
    isMandatory: true,
    placeholder: "Enter Amount in Word",
    val: "Two Thusand Taka Only",
    disable: false,
  },
];
export let ownerInfo = [
  {
    dim: "4",
    id: "accountHolder",
    title: "Account Holder Name",
    isMandatory: true,
    placeholder: "Enter Name",
    val: "Md Tarik mahmud",
    disable: false,
  },
  {
    dim: "4",
    id: "dob",
    title: "Date of Birth",
    isMandatory: true,
    placeholder: "Enter dob",
    val: "1988-02-06",
    disable: false,
  },
  {
    dim: "4",
    id: "dob",
    title: "NID/Passport No",
    isMandatory: true,
    placeholder: "Enter NID/Passport No",
    val: "1988129845",
    disable: false,
  },
];
export let tpInfo = [
  {
    dim: "4",
    id: "profession",
    title: "Profession",
    isMandatory: true,
    placeholder: "Enter Profession",
    val: "Business",
    disable: false,
  },
  {
    dim: "4",
    id: "monthlyIncome",
    title: "Monthly Income",
    isMandatory: true,
    placeholder: "Enter Monthly Income",
    val: "100000",
    disable: false,
  },
  {
    dim: "4",
    id: "sourcesofFund",
    title: "Sources of Fund",
    isMandatory: true,
    placeholder: "Enter Sources of Fund",
    val: "Own Business",
    disable: false,
  },
];

export let ecData = {
  data: {
    status: "OK",
    statusCode: "SUCCESS",
    success: {
      data: {
        jobId: "31GMQE5X72CJJ",
        result: "MATCH FOUND",
        verificationResponse: {
          voterInfo: {
            name: "মঈন মুস্তাকিম",
            nameEn: "Moin Mostakim",
            bloodGroup: "B+",
            dateOfBirth: "1989-10-25",
            father: "মোঃ নাছির উদ্দিন",
            mother: "মনোয়ারা বেগম",
            spouse: "",
            nationalId: "123456789",
            occupation: "ছাত্র/ছাত্রী",
            permanentAddress: {
              division: "ঢাকা",
              district: "ঢাকা",
              rmo: "1",
              upozila: "ঢাকা",
              postOffice: "ঢাকা",
              postalCode: "",
              wardForUnionPorishod: 1,
              additionalMouzaOrMoholla: "",
              additionalVillageOrRoad: "ঢাকা",
              homeOrHoldingNo: "",
              region: "ঢাকা",
            },
            photo:
              "http://localhost:8989/file/Photo-ba02a2c4-a273-102b-b531-809d930a783c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fileobj%2F20210517%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210517T083535Z&X-Amz-Expires=120&X-Amz-SignedHeaders=host&X-Amz-Signature=f8698e3b8ed0e75ce29b058d1e88ccd0409f44fe3802176d72097c7453453135",
            presentAddress: {
              division: "ঢাকা",
              district: "ঢাকা",
              rmo: "9",
              upozila: "মোহাম্মদপুর",
              cityCorporationOrMunicipality: "ঢাকা উত্তর সিটি কর্পোরেশন",
              unionOrWard: "ওয়ার্ড নং-10",
              postOffice: "মোহাম্মদপুর",
              postalCode: "1207",
              wardForUnionPorishod: 0,
              additionalMouzaOrMoholla: "তাজমহল রোড",
              additionalVillageOrRoad: "",
              homeOrHoldingNo: "৫/১",
              region: "ঢাকা",
            },
          },
        },
      },
    },
  },
  result: {
    error: false,
    errorMsg: "",
    statusCode: 200,
  },
};

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
