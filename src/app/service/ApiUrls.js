import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import api from "./ApiService";

export const baseURL = "http://localhost:8080";
// export const baseURL = "http://180.210.129.170:8080/DBS/api";

export const login = baseURL + "/oauth/token";
export const logout = baseURL + "/logout?logout";
export const otpgen = baseURL + "/otpgen";
export const otpVerify = baseURL + "/otpverify";
export const signup = baseURL + "/signup";
export const accountnew = baseURL + "/application/new";
export const additionalaccountinfo = baseURL + "/application/additionalupdate";
export const nidcall = baseURL + "/nidmatch/eSignKyc";
export const ekycaddapi = baseURL + "/kyc/kycprofile/add";
export const nomineeaddapi = baseURL + "/kyc/nominee/add";

export const instance = api;

export function errorCompute(error) {
  let errorMessage = "";
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    switch (error.response.status) {
      case 500:
        errorMessage = "Internal Server Error.";
        break;
      case 503:
        errorMessage = "Service unavailable.";
        //tests["Service unavailable."] = statMessages === 503;
        break;
      case 502:
        errorMessage = "502 bad gateway.";
        //tests["502 bad gateway."] = statMessages === 502;
        break;
      case 599:
        errorMessage = "Network connect timeout error.";
        // tests["Network connect timeout error."] = statMessages === 599;
        break;
      case 408:
        errorMessage = "Request timedout.";
        // tests["Request timedout."] = statMessages === 408;
        break;
      case 400:
        errorMessage = error.response.data.error_description;
        break;
      default:
        errorMessage = "Unhandlled error code.";
        break;
      //tests["Sorry, we are out of" + responseCode.code];
    }

    return confirmAlert({
      title: "Error Message",
      message: <p className="mod-p"> {errorMessage} </p>,
      buttons: [
        {
          label: "Ok",
          onClick: () => {},
        },
      ],
    });
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    console.log(error.request);
    return confirmAlert({
      title: "Error Message",
      message: <p className="mod-p"> {error.request} </p>,
      buttons: [
        {
          label: "Ok",
          onClick: () => {},
        },
      ],
    });
  } else {
    // Something happened in setting up the request and triggered an Error
    console.log("Error", error.message);
    return confirmAlert({
      title: "Error Message",
      message: <p className="mod-p"> {error.message} </p>,
      buttons: [
        {
          label: "Ok",
          onClick: () => {},
        },
      ],
    });
  }
}