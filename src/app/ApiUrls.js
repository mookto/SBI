import axios from "axios";

export const baseURL = "http://localhost:8084/DBS/api";
// export const baseURL = "http://180.210.129.170:8080/DBS/api";

export const login = baseURL + "/login";
export const logout = baseURL + "/logout?logout";
export const otpgen = baseURL + "/otpgen";
export const otpVerify = baseURL + "/otpverify";
export const signup = baseURL + "/signup";
export const accountnew = baseURL + "/application/new";
export const additionalaccountinfo = baseURL + "/application/additionalupdate";
export const nidcall = baseURL + "/nidmatch/eSignKyc";
export const ekycaddapi = baseURL + "/kyc/kycprofile/add";
export const nomineeaddapi = baseURL + "/kyc/nominee/add";

export const instance = axios.create({
  withCredentials: true,
});
