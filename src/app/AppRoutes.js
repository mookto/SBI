import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
import SignUp from "./user-pages/SignUp";
import EmailSuccess from "./user-pages/EmailSuccess";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const AdminRegistration = lazy(() =>
  import("./registration/AdminRegistration")
);

const Error404 = lazy(() => import("./user-pages/Error404"));
const Error500 = lazy(() => import("./user-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

const BlankPage = lazy(() => import("./user-pages/BlankPage"));
const AccountActivation = lazy(() => import("./user-pages/AccountActivation"));
const ResetPassword = lazy(() => import("./user-pages/ResetPassword"));
const Otp = lazy(() => import("./user-pages/Otp"));
const OpenAccountList = lazy(() => import("./pages/OpenAccountList"));
const AccountDetails = lazy(() => import("./pages/AccountDetails"));
const TpProfile = lazy(() => import("./pages/TpProfile"));
const NidUpload = lazy(() => import("./pages/NidUpload"));
const OcrResult = lazy(() => import("./pages/OcrResult"));
const EkycProcess = lazy(() => import("./pages/EkycProcess"));
const OtpEmail = lazy(() => import("./user-pages/OtpEmail"));
const OtpPhone = lazy(() => import("./user-pages/OtpPhone"));
const ApplicantList = lazy(() => import("./pages/ApplicantList"));
const MobileNumber = lazy(() => import("./UserApplication/MobileNumber"));
const UserOtp = lazy(() => import("./UserApplication/UserOtp"));
const AddProfile = lazy(() => import("./UserApplication/AddProfile"));
const NidVerify = lazy(() => import("./UserApplication/NidVerify"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={MobileNumber} />
          <Route path="/login" component={Login} />
          <Route path="/otp" component={Otp} />
          <Route path="/otpemail" component={OtpEmail} />
          <Route path="/otpphone" component={OtpPhone} />
          <Route path="/start" component={MobileNumber} />
          <Route path="/user-otp" component={UserOtp} />
          <Route path="/add-profile" component={AddProfile} />
          <Route path="/nid-verify" component={NidVerify} />
          <Route path="/signup" component={SignUp} />
          <Route path="/emailsuccess" component={EmailSuccess} />
          <Route path="/open-account-list" component={OpenAccountList} />
          <Route path="/account-details" component={AccountDetails} />
          <Route path="/tp-profile" component={TpProfile} />
          <Route path="/nid-upload" component={NidUpload} />
          <Route path="/ocr-result" component={OcrResult} />
          <Route path="/ekyc-process" component={EkycProcess} />
          <Route path="/forgetpassword" component={ResetPassword} />
          <Route path="/applicant-list" component={ApplicantList} />
          <Route
            path="/validate-token/account-activation/:id/:token"
            component={AccountActivation}
          />
          <Route
            path="/registration/admin-registration"
            component={AdminRegistration}
          />
          <Route path="/user-pages/register-1" component={Register1} />
          <Route path="/user-pages/error-404" component={Error404} />
          <Route path="/user-pages/error-500" component={Error500} />
          <Route path="/user-pages/blank-page" component={BlankPage} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
