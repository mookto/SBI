import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

import Spinner from "../app/shared/Spinner";
// import SignUp from "./user-pages/SignUp";
// import EmailSuccess from "./user-pages/EmailSuccess";

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
// const ResetPassword = lazy(() => import("./user-pages/ResetPassword"));
const Otp = lazy(() => import("./user-pages/Otp"));
const Person = lazy(() => import("./pages/Person"));
// const AccountDetails = lazy(() => import("./pages/AccountDetails"));
// const TpProfile = lazy(() => import("./pages/TpProfile"));
// const NidUpload = lazy(() => import("./pages/NidUpload"));
// const OcrResult = lazy(() => import("./pages/OcrResult"));
// const EkycProcess = lazy(() => import("./pages/EkycProcess"));
const OtpEmail = lazy(() => import("./user-pages/OtpEmail"));
const OtpPhone = lazy(() => import("./user-pages/OtpPhone"));
// const ApplicantList = lazy(() => import("./pages/ApplicantList"));
const PreviewSubmit = lazy(() => import("./pages/PreviewSubmit"));
const MobileNumber = lazy(() => import("./UserApplication/MobileNumber"));
const UserOtp = lazy(() => import("./UserApplication/UserOtp"));
const DocumnetType = lazy(() => import("./UserApplication/DocumnetType"));
const AddProfile = lazy(() => import("./UserApplication/AddProfile"));
const CustomerList = lazy(() => import("./UserApplication/CustomerList"));
const AccountList = lazy(() => import("./UserApplication/AccountList"));
const NidVerify = lazy(() => import("./UserApplication/NidVerify"));
const Pdfs = lazy(() => import("./UserApplication/Pdfs"));
const CusPdf = lazy(() => import("./UserApplication/CusPdf"));
const PersonalInformation = lazy(() =>
  import("./UserApplication/PersonalInformation")
);
const TransactionProfile = lazy(() =>
  import("./UserApplication/TransactionProfile")
);
const NomineeInformation = lazy(() =>
  import("./UserApplication/NomineeInformation")
);
const NewApplication = lazy(() => import("./UserApplication/NewApplication"));
const CustomerView = lazy(() => import("./UserApplication/CustomerView"));
const FinalSubmit = lazy(() => import("./UserApplication/FinalSubmit"));
const NewAccount = lazy(() => import("./UserApplication/NewAccount"));
const PassportInformation = lazy(() =>
  import("./UserApplication/PassportInformation")
);
const Maker = lazy(() => import("./management/Maker"));
const SuccessfulFailed = lazy(() => import("./Reports/SuccessfulFailed"));
const BranchWise = lazy(() => import("./Reports/BranchWise"));
const ProductWise = lazy(() => import("./Reports/ProductWise"));
const OnboardingType = lazy(() => import("./Reports/OnboardingType"));
const EkycTypeReport = lazy(() => import("./Reports/EkycTypeReport"));
const AccountView = lazy(() => import("./UserApplication/AccountView"));
const AccountForm = lazy(() => import("./UserApplication/AccountForm"));
const AccountForm2 = lazy(() => import("./UserApplication/AccountForm2"));
const EmployeeList = lazy(() => import("./UserApplication/EmployeeList"));
const ChangePassword = lazy(() => import("./user-pages/ChangePassword"));
const ForgetPassword = lazy(() => import("./user-pages/ForgetPassword"));
const Registration = lazy(() => import("./user-pages/Registration"));
const AppUserList = lazy(() => import("./management/AppUserList"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route path="/banklogin" component={Login} />
          <Route path="/otp" component={Otp} />
          <Route path="/otpemail" component={OtpEmail} />
          <Route path="/otpphone" component={OtpPhone} />
          <Route path="/usermobile" component={MobileNumber} />
          <Route path="/user-otp" component={UserOtp} />
          <Route path="/document-type" component={DocumnetType} />
          <Route path="/add-profile" component={AddProfile} />
          <Route path="/nid-verify" component={NidVerify} />
          <Route path="/personalinformation" component={PersonalInformation} />
          <Route path="/nominee-information" component={NomineeInformation} />
          <Route path="/transaction-profile" component={TransactionProfile} />
          <Route path="/new-account" component={NewAccount} />
          <Route path="/final-submit" component={FinalSubmit} />
          <Route path="/maker" component={Maker} />
          <Route path="/new-application" component={NewApplication} />
          <Route path="/passport-information" component={PassportInformation} />
          <Route path="/customer-list" component={CustomerList} />
          <Route path="/account-list" component={AccountList} />
          <Route path="/customer-view" component={CustomerView} />
          <Route path="/account-view" component={AccountView} />
          <Route path="/employee-list" component={EmployeeList} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/forget-password" component={ForgetPassword} />
          <Route path="/registration" component={Registration} />
          <Route path="/management/appuser-list" component={AppUserList} />
          {/* <Route path="/signup" component={SignUp} />
          <Route path="/emailsuccess" component={EmailSuccess} />
          <Route path="/open-account-list" component={OpenAccountList} />
          <Route path="/account-details" component={AccountDetails} />
          <Route path="/tp-profile" component={TpProfile} />
          <Route path="/nid-upload" component={NidUpload} />
          <Route path="/ocr-result" component={OcrResult} />
          <Route path="/ekyc-process" component={EkycProcess} />
          <Route path="/forgetpassword" component={ResetPassword} />
          <Route path="/applicant-list" component={ApplicantList} /> */}
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
          <Route path="/reports/success" component={SuccessfulFailed} />
          <Route path="/reports/branch-wise-report" component={BranchWise} />
          <Route path="/reports/product-wise-report" component={ProductWise} />
          <Route
            path="/reports/onboarding-type-report"
            component={OnboardingType}
          />
          <Route path="/reports/ekyc-type-report" component={EkycTypeReport} />
          <Route path="/pdf" component={Pdfs} />
          <Route path="/cus-pdf" component={CusPdf} />
          <Route path="/account-form" component={AccountForm} />
          <Route path="/cust-form" component={AccountForm2} />
          <Route path="/person" component={Person} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
