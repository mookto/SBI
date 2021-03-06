export let userProfile = [
  {
    dim: "6",
    id: "fullName",
    title: "Full Name",
    isMandatory: true,
    placeholder: "Enter Full Name",
    val: "0",
    disable: false,
  },
  {
    dim: "6",
    id: "dob",
    title: "Date of Birth",
    isMandatory: true,
    dateFormat: "Pp",
    placeholder: "Enter Date of Birth",
    disable: false,
    val: "2021-02-02",
  },
  {
    dim: "6",
    id: "fatherName",
    title: "Father Name",
    isMandatory: false,
    placeholder: "Enter Father Name",
    val: "ab",
    disable: false,
  },
  {
    dim: "6",
    id: "motherName",
    title: "Mother Name",
    isMandatory: true,
    placeholder: "Enter Mother Name",
    val: "ab",
    disable: false,
  },
  {
    dim: "6",
    id: "email",
    title: "Email Address",
    isMandatory: true,
    placeholder: "Enter Email Address",
    val: "abc@com.com",
    disable: false,
  },
  {
    dim: "6",
    id: "phoneNo",
    title: "Phone Number",
    isMandatory: true,
    placeholder: "Enter Phone Number",
    val: "01987765445",
    disable: false,
  },
  {
    dim: "6",
    id: "nid",
    title: "NID",
    isMandatory: true,
    placeholder: "Enter NID Number",
    val: "01987765445",
    disable: false,
  },
  {
    dim: "6",
    id: "gender",
    title: "Gender",
    options: [
      { id: "male", value: "1", title: "Male" },
      { id: "female", value: "2", title: "Female" },
      { id: "third", value: "3", title: "Third Gender" },
    ],
    isMandatory: true,
    disable: false,
  },
];

export let userOrg = [
  {
    dim: "6",
    id: "organizationName",
    title: "Organization Name",
    isMandatory: true,
    placeholder: "Enter Organization Name",
    val: "Organization",
    disable: true,
  },
  {
    dim: "6",
    id: "empId",
    title: "Employee Id",
    isMandatory: true,
    placeholder: "Enter Employee Id",
    val: "GIb1234554",
    disable: true,
  },
  {
    dim: "6",
    id: "department",
    title: "Department",
    isMandatory: false,
    placeholder: "Enter Father Name",
    val: "ab",
    disable: true,
  },
  {
    dim: "6",
    id: "designation",
    title: "Designation",
    isMandatory: true,
    placeholder: "Enter Designation",
    val: "ab",
    disable: true,
  },
];

export let userwithFeatures = [
  {
    dim: "6",
    id: "username",
    title: "Username",
    isMandatory: true,
    placeholder: "Enter Username",
    val: "0",
    disable: false,
  },
  {
    dim: "6",
    id: "email",
    title: "Email Address",
    isMandatory: false,
    placeholder: "Enter Email Address",
    val: "ab@gmail.com",
    disable: false,
  },
  {
    dim: "6",
    id: "fullName",
    title: "Full Name",
    isMandatory: true,
    placeholder: "Enter Full Name",
    val: "ab",
    disable: false,
  },
  {
    dim: "6",
    id: "mobile",
    title: "Mobile Number",
    isMandatory: true,
    placeholder: "Enter Mobile Number",
    val: "019848864",
    disable: false,
  },
  {
    dim: "6",
    id: "branchName",
    title: "Branch Name",
    options: [
      { id: "1", value: "1", title: "Nasirabad Branch" },
      { id: "2", value: "2", title: "Gulshan Corporate" },
    ],
    isMandatory: true,
    disable: false,
  },
  {
    dim: "6",
    id: "roleName",
    title: "Role Name",
    options: [
      { id: "1", value: "1", title: "Admin" },
      { id: "2", value: "2", title: "User" },
    ],
    isMandatory: true,
    disable: false,
  },
  {
    dim: "6",
    id: "featureIds",
    title: "Feature Ids",
    options: [
      { id: "1", value: "1", title: "1" },
      { id: "2", value: "2", title: "2" },
    ],
    isMandatory: true,
    disable: false,
  },
  {
    dim: "6",
    id: "plainpassword",
    title: "Password",
    isMandatory: true,
    placeholder: "Enter Password",
    val: "019848864",
    disable: false,
  },
];
