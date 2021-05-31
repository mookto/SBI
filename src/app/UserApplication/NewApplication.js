import React, { Component } from "react";
import { Link } from "react-router-dom";
import CusAccordion from "../components/CusAccordion";
import CusAccordions from "../components/CusAccordions";
import questions from "../pages/data";
import "../../assets/styles/index.css";
import NomineeInformation from "./NomineeInformation";
import allInAccordians from "../pages/data";
import { instance, baseURL, errorCompute } from "../service/ApiUrls";

class NewApplication extends Component {
  constructor() {
    super();
    this.state = { expanded: false };
  }
  setExpanded = () => {
    this.setState({ expanded: true });
  };

  componentDidMount = () => {
    //this.setData();
    this.callAccountPost();
  };

  callAccountPost = () => {
    let listofCustomers = [];

    if (this.state.owner !== undefined && this.state.owner !== null) {
      this.state.owner.map((v) => {
        console.log(v);
        listofCustomers.push({ customerID: v.cp.id });
      });
    }

    let dataToSend = {
      ownerType: this.state.accountType,
      accountType: this.state.accountType,
      initialDeposit: this.state.initialDeposit,
      debitCard: this.state.debitCard,
      checkBook: this.state.checkBook,
      initialDeposit: this.state.initialDeposit,
      smsAlert: this.state.smsAlert,
      mtransectionlimit: this.state.mtransectionlimit,
      product: this.state.product,
      branch: this.state.branch,
      listofCustomers: listofCustomers,
      listofNominee: this.state.listofNominee,
      transactionProfile: {
        proffession: this.state.profession,
        sourceofFund: this.state.sourcesofFund,
        monthlyIncome: this.state.monthlyIncome,
      },
    };
    console.log("dataTosend", dataToSend);
    instance
      .post(baseURL + "/checkaccountrequest", dataToSend)
      .then((res) => {
        if (res.data.result.error === false) {
        }
      })
      .catch((err) => errorCompute(err));
  };

  setData = (obj) => {
    // if (obj !== undefined && obj !== null) {
    //   this.setState({
    //     ...obj,
    //   });
    // }
    this.setState(
      {
        ...window.newAccount.newAccountData(),
        ...window.nomineelInformation.nomineeData(),
        ...window.transactionProfile.transactionalProfileData(),
      },
      () => {
        this.callAccountPost();
      }
    );
  };
  render() {
    return (
      <div className="row proBanner">
        <div className="col-12">
          <div className="card">
            <h4 className="card-title">New Application</h4>
            <div className="card-body">
              {/*  */}
              {allInAccordians.map((v, k) => {
                return (
                  <CusAccordions
                    title={v.title}
                    info={v.info}
                    setExpanded={this.setExpanded}
                    accordianOpen={k === 0}
                    component={v.component}
                    setData={this.setData}
                  />
                );
              })}
              <div className="col-md-12 mt-5" style={{ textAlign: "center" }}>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.setData();
                    // console.log();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewApplication;
