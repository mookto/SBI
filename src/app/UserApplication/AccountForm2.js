import React, { Component } from "react";
import {
  Page,
  Text,
  PDFDownloadLink,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
} from "@react-pdf/renderer";
import { instance } from "../service/ApiUrls";
import { baseURL } from "../service/ApiService";

class AccountForm2 extends Component {
  constructor(props) {
    super(props);

    const json = {
      fromCustomerList: true,
      datToload: {
        account: {
          createdBy: null,
          creationDate: null,
          modifiedBy: null,
          modificationDate: null,
          isDeleted: false,
          id: 10,
          product: null,
          branch: null,
          transactionProfile: null,
          nomineeApplications: [],
          ownerType: null,
          initialDeposit: 0,
          mtransectionlimit: 100000,
          checkBook: false,
          smsAlert: false,
          debitCard: false,
          accountType: false,
          accessStatus: null,
          submissionCount: null,
          makerFeedback: null,
          checkerFeedback: null,
          accountNumber: "1120000168708",
          lockStatus: null,
        },
        nomineeInfo: [
          {
            createdBy: null,
            creationDate: null,
            modifiedBy: null,
            modificationDate: null,
            isDeleted: false,
            id: null,
            account: null,
            sharePercent: 100,
          },
        ],
        tp: {
          createdBy: null,
          creationDate: null,
          modifiedBy: null,
          modificationDate: null,
          isDeleted: false,
          id: null,
          profession: "BANKING SERVICE",
          sourceOfFund: "JOB",
          monthlyIncome: 20000,
        },
        branch: {
          createdBy: null,
          creationDate: null,
          modifiedBy: null,
          modificationDate: null,
          isDeleted: false,
          id: null,
          name: "Gulshan",
          accountApplications: [],
        },
        product: {
          createdBy: null,
          creationDate: null,
          modifiedBy: null,
          modificationDate: null,
          isDeleted: false,
          id: null,
          name: "Savings",
          accountApplications: [],
        },
        listCustomers: [
          {
            cp: {
              createdBy: "",
              creationDate: "2021-07-13T07:59:44.426+0000",
              modifiedBy: "",
              modificationDate: "2021-07-13T08:02:49.480+0000",
              isDeleted: false,
              id: 7,
              name: "SAMINA TANJUM",
              nameBn: "সামিনা তানজুম",
              dob: "1992-10-06",
              mobile: "01675709722",
              nationality: "bangladeshi",
              email: "smai@gmail.com",
              f_name: "সানা উল্লাহ ভূঁঞা",
              f_name_en: "SANAULLA VHUAIYA",
              m_name: "শাহিনা আক্তার",
              m_name_en: "SAHANA AKTER",
              spouse_name: "",
              spouse_name_en: null,
              gender: "MALE",
              marital_status: "SINGLE",
              birth_place: null,
              residential_status: null,
              occupation: null,
              identityDocType: 3,
              identityDocId: 7,
              presentAddress: 14,
              permanentAddress: 13,
              documentReference: null,
              issuePlace: "EC,DHA,BD",
              issueDate: "2019-07-13",
              customerT24Id: "313030",
            },
            nidDetail: {
              createdBy: "",
              creationDate: "2021-07-13T07:59:44.234+0000",
              modifiedBy: "",
              modificationDate: "2021-07-13T07:59:44.234+0000",
              isDeleted: false,
              id: 7,
              nationalId10: "1942417971",
              nationalId17: null,
              documentReference: null,
            },
            passportDetail: null,
            presentAddress: {
              createdBy: "",
              creationDate: "2021-07-13T07:59:44.361+0000",
              modifiedBy: "",
              modificationDate: "2021-07-13T07:59:44.361+0000",
              isDeleted: false,
              id: 14,
              country: "BD",
              division: "ঢাকা",
              division_en: null,
              district: "ঢাকা",
              district_en: null,
              upozila: "কাফরুল",
              upozila_en: null,
              cityCorporationOrMunicipality: "ঢাকা উত্তর সিটি কর্পোরেশন",
              cityCorporationOrMunicipality_en: null,
              unionOrWard: "WORD 16",
              unionOrWard_en: null,
              postOffice: "ঢাকা ক্যান্টনমেন্ট",
              postOffice_en: "DHAKA CANT",
              postalCode: "১২০৬",
              postalCode_en: "1206",
              additionalMouzaOrMoholla: "কাফরুল",
              additionalMouzaOrMoholla_en: null,
              wardForUnionPorishod: "null",
              wardForUnionPorishod_en: "null",
              additionalVillageOrRoad: "পূঃ কাফরুলা",
              additionalVillageOrRoad_en: null,
              homeOrHoldingNo: "১৮১/৩ তয় তলা",
              homeOrHoldingNo_en: null,
              plainAddress: null,
            },
            permanentAddress: {
              createdBy: "",
              creationDate: "2021-07-13T07:59:44.297+0000",
              modifiedBy: "",
              modificationDate: "2021-07-13T07:59:44.297+0000",
              isDeleted: false,
              id: 13,
              country: "BD",
              division: "চট্টগ্রাম",
              division_en: null,
              district: "কুমিল্লা",
              district_en: null,
              upozila: "চৌদ্দগ্রাম",
              upozila_en: null,
              cityCorporationOrMunicipality: null,
              cityCorporationOrMunicipality_en: null,
              unionOrWard: null,
              unionOrWard_en: null,
              postOffice: "আলকরা",
              postOffice_en: "AMKRA",
              postalCode: "৩৫৫২",
              postalCode_en: "3552",
              additionalMouzaOrMoholla: "",
              additionalMouzaOrMoholla_en: null,
              wardForUnionPorishod: "null",
              wardForUnionPorishod_en: "null",
              additionalVillageOrRoad: "",
              additionalVillageOrRoad_en: null,
              homeOrHoldingNo: "-",
              homeOrHoldingNo_en: null,
              plainAddress: null,
            },
            documentDetailList: null,
          },
        ],
      },
      hishabprokriti: "মুদারাবাহ্ সঞ্চয়ী হিসাব ",
      mudra: "টাকা",
      porichoypotro: "জাতীয় পরিচয় পত্র",
      hishabporichalona: "এককভাবে",
      debitCard: false,
      smsAlert: false,
      internetbanking: true,
      onnano: false,
      lingo: "পুরুষ",
      resident: "রেসিডেন্ট",
      tp: {
        createdBy: null,
        creationDate: null,
        modifiedBy: null,
        modificationDate: null,
        isDeleted: false,
        id: null,
        profession: "BANKING SERVICE",
        sourceOfFund: "JOB",
        monthlyIncome: 20000,
      },
    };

    //console.log(JSON.stringify(props.location.state));
    this.state = {
      ...props.location.state,
      // ...json,
      hishabprokriti: "মুদারাবাহ্ সঞ্চয়ী হিসাব ",
      mudra: "টাকা",
      porichoypotro: "জাতীয় পরিচয় পত্র",
      hishabporichalona: "এককভাবে",
      //debitCard: props.location.state.datToload.account.debitCard,
      //smsAlert: props.location.state.datToload.account.smsAlert,
      // debitCard: json.datToload.account.debitCard,
      // smsAlert: json.datToload.account.smsAlert,
      // internetbanking: true,
      onnano: false,
      lingo: "পুরুষ",
      resident: "রেসিডেন্ট",
      // tp: json.datToload.tp,
      tp: props.location.state.datToload.tp,
    };
  }

  maketoDate = (date) => {
    let year = 1900 + date.getYear();
    let month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    return day + "/" + month + "/" + year;
  };

  documentProcessing = () => {
    this.state.documentDetailList !== undefined &&
      this.state.documentDetailList !== null &&
      this.state.documentDetailList.map((doc, i) => {
        switch (doc.documentType) {
          case 1:
            this.setState({ profilepic: doc.base64Content }, () => {
              //console.log(this.state.profilepic);
              if (
                this.state.profilepic !== null &&
                (this.state.profilepic.startsWith("/9g") ||
                  this.state.profilepic.startsWith("/9j"))
              ) {
                this.setState({ propicexten: "data:image/jpeg;base64" });
              } else {
                this.setState({ propicexten: "data:image/png;base64" });
              }
            });
            break;
          case 2:
            this.setState({ sigpic: doc.base64Content }, () => {
              if (
                this.state.sigpic !== null &&
                (this.state.sigpic.startsWith("/9g") ||
                  this.state.sigpic.startsWith("/9j"))
              ) {
                this.setState({ sigpicexten: "data:image/jpeg;base64" });
              } else {
                this.setState({ sigpicexten: "data:image/png;base64" });
              }
            });
            break;
          case 3:
            this.setState({ nidfrontpic: doc.base64Content });
            break;
          case 4:
            this.setState({ nidbackpic: doc.base64Content });
            break;
          case 5:
            this.setState({ passportpic: doc.base64Content });
            break;
        }
      });
  };

  callProfilePic = () => {
    instance
      .post(baseURL + "/api/filesusingreferencebase64", null, {
        params: {
          uniquereference: this.state.datToload.cp.documentReference,
        },
      })
      .then((res) => {
        if (res.data.result.error === false) {
          this.setState({ documentDetailList: [...res.data.data] }, () => {
            this.documentProcessing();
          });
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.callProfilePic();
    //console.log(JSON.stringify(this.state));
    // var x = [];
    // let y = this.state.datToload.account.accountNumber;
    // //console.log(y, typeof y);
    // for (var i = 0; i < y.length; i++) {
    //   x.push(y.charAt(i));
    // }
    let custp, custId;

    this.setState({ customer: this.state.datToload.cp }, () => {
      custId = [];
      for (let i = 0; i < this.state.customer.customerT24Id.length; i++) {
        custId.push(this.state.customer.customerT24Id.charAt(i));
      }

      this.setState({
        customerCustId: custId,
        lingo:
          this.state.customer.gender.toUpperCase() === "MALE"
            ? "পুরুষ"
            : "মহিলা",
        presentAddress: this.state.datToload.presentAddress,
        permanentAddress: this.state.datToload.permanentAddress,
        nidDetail: this.state.datToload.nidDetail,
      });
    });

    //console.log(x);
    this.setState({
      accountNumber: ["", "", "", "", "", "", "", "", "", "", "", ""],
      todate: this.maketoDate(new Date()),
    });
  }

  render() {
    Font.register({
      family: "kalpurush",
      src: "/kalpurush.ttf",
    });
    Font.register({
      family: "Oswald",
      src: "/oswald.ttf",
    });
    const BORDER_COLOR = "#000000";
    const BORDER_STYLE = "solid";
    const COL1_WIDTH = 18.75;
    const COLN_WIDTH = (100 - COL1_WIDTH) / 13;
    const COL2_WIDTH = 43.75;
    const COLN2_WIDTH = (100 - COL2_WIDTH) / 9;
    const COL3_WIDTH = 50;
    const COLN3_WIDTH = (100 - COL3_WIDTH) / 8;
    const styles = StyleSheet.create({
      body: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingHorizontal: 0,
        fontFamily: "kalpurush",
      },
      text: {
        padding: "0px",
        fontSize: 9,
        width: "100%",
      },
      textL: {
        padding: "0px",
        width: "95%",
        paddingLeft: "50px",
        margin: "0px",
        fontSize: "7px",
      },
      textM: {
        padding: "0px",
        width: "95%",
        paddingLeft: "35px",
        margin: "0px",
        fontSize: "7px",
      },
      box: {
        width: "10px",
        height: "10px",
        border: "1px solid #000000",
        backgroundColor: "#ffffff",
      },
      boxActive: {
        width: "10px",
        height: "10px",
        border: "1px solid #000000",
        backgroundColor: "#000000",
      },
      textH: {
        padding: "0px",
        fontSize: 9,
        width: "100%",
        textAlign: "center",
        paddingTop: 2,
        paddingBottom: "-2px",
        marginBottom: "-2px",
        paddingLeft: "5px",
      },
      textT: {
        padding: "0px",
        fontSize: 14,
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "10px",
      },
      text1: {
        fontSize: 9,
        width: "30%",
        display: "flex",
      },
      text2: {
        fontSize: 9,
        width: "70%",
        display: "flex",
        borderBottom: "1px dotted #000000",
      },
      textf: {
        fontSize: 9,
        width: "70%",
        display: "flex",
        fontFamily: "kalpurush",
        borderBottom: "1px dotted #000000",
        maxLines: 2,
      },
      text3: {
        fontSize: 10,
        width: "33%",
        display: "flex",
      },
      text4: {
        fontSize: 10,
        width: "33%",
        display: "flex",
        borderBottom: "1px dotted #000000",
      },
      text4: {
        fontSize: 10,
        width: "27%",
        display: "flex",
      },
      text5: {
        fontSize: 10,
        width: "21%",
        display: "flex",
        borderBottom: "1px dotted #000000",
      },
      text6: {
        fontSize: 10,
        width: "50%",
        display: "flex",
        textAlign: "center",
      },
      image: {
        marginVertical: 15,
        marginHorizontal: 85,
        width: "50%",
      },
      image1: {
        marginVertical: 0,
        marginHorizontal: 0,
        width: "100%",
      },
      imageS: {
        width: "100%",
        height: "120px",
        padding: "7px",
        border: "1px solid #000000",
      },
      imageP: {
        marginVertical: 0,
        marginHorizontal: 2,
        width: "24%",
        height: "150px",
        padding: "7px",
        border: "1px solid #000000",
      },
      image2: {
        marginVertical: 0,
        marginHorizontal: 0,
        width: "100%",
      },
      imageC: {
        marginVertical: 0,
        marginHorizontal: 0,
        width: "10px",
        height: "10px",
      },
      cusView: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "7px 0px",
        paddingLeft: 10,
        paddingRight: 5,
        marginHorizontal: 0,
      },
      cusView3: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginHorizontal: 0,
      },
      cusView1: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "0px",
        marginTop: "10px",
        paddingTop: "0px",
        paddingLeft: "10px",
        marginHorizontal: 35,
      },
      cusView2: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "0px",
        marginTop: "0px",
        paddingTop: "0px",
        marginHorizontal: 35,
      },
      cusView4: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "0px",
        marginTop: "0px",
        paddingTop: "0px",
        paddingLeft: "10px",
        marginHorizontal: 0,
      },
      cusViewH: {
        flexDirection: "row",
        padding: "0px",
        marginTop: "0px",
        paddingTop: "0px",
        backgroundColor: "#fef200",
        paddingHorizontal: 0,
        marginHorizontal: 35,
      },
      cusViewH2: {
        flexDirection: "row",
        padding: "0px",
        marginTop: "0px",
        paddingTop: "0px",
        backgroundColor: "#fef200",
        paddingHorizontal: 40,
        marginHorizontal: 0,
      },
      container: {
        flexDirection: "row",
        marginHorizontal: 35,
        "@media max-width: 400": {
          flexDirection: "column",
        },
      },
      leftColumn: {
        flexDirection: "column",
        width: "45%",
        marginLeft: 1,
        marginRight: 20,
        marginTop: 10,
        "@media max-width: 400": {
          width: "50%",
          marginRight: 30,
        },
        "@media orientation: landscape": {
          width: "50%",
          marginRight: 50,
        },
      },
      rightColumn: {
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 10,
        marginRight: 0,
        marginTop: 25,

        "@media max-width: 400": {
          marginTop: 10,
          marginLeft: 5,
        },
      },
      leftColumn2: {
        flexDirection: "column",
        width: "35%",
        marginLeft: 1,
        marginRight: 20,
        marginTop: 10,
        "@media max-width: 400": {
          width: "50%",
          marginRight: 30,
        },
        "@media orientation: landscape": {
          width: "50%",
          marginRight: 50,
        },
      },
      centerColumn: {
        flexDirection: "column",
        width: "35%",
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 10,
        marginRight: 0,
        marginTop: 25,

        "@media max-width: 400": {
          marginTop: 10,
          marginLeft: 5,
        },
      },
      rightColumn2: {
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 10,
        marginRight: 0,
        marginTop: 25,

        "@media max-width: 400": {
          marginTop: 10,
          marginLeft: 5,
        },
      },
      leftColumn1: {
        flexDirection: "column",
        width: "80%",
        marginLeft: 1,
        marginRight: 2,
        marginTop: 10,
        "@media max-width: 400": {
          width: "60%",
          marginRight: 10,
        },
        "@media orientation: landscape": {
          width: "80%",
          marginRight: 10,
        },
      },
      rightColumn1: {
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 2,
        marginRight: 0,
        marginTop: 25,

        "@media max-width: 400": {
          marginTop: 10,
          marginLeft: 5,
        },
      },
      table: {
        display: "table",
        width: "auto",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
      },
      tableRow: {
        margin: "auto",
        flexDirection: "row",
      },
      tableCol1: {
        width: COL1_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol2: {
        width: COL2_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol4: {
        width: COL3_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableColCus: {
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol: {
        width: COLN_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      },
      tableCol3: {
        width: COLN2_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      },
      tableCol5: {
        width: COLN3_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      },
      tableCellHeader: {
        margin: 5,
        fontSize: 12,
        fontWeight: 500,
      },
      tableCell: {
        margin: 2,
        fontSize: 9,
      },
      tableCellCus: {
        margin: 2,
        fontSize: 9,
      },
    });
    const Page1 = (
      <>
        <View style={[styles.cusView3, { marginBottom: "-5px" }]} fixed>
          <Image style={styles.image2} src="/header.jpg" />
        </View>
        <View style={[styles.cusViewH2, {}]}>
          <Text style={[styles.textH, { textAlign: "left", fontSize: 12 }]}>
            হিসাব খোলার আবেদন ফরম {""}
          </Text>
          <Text style={[styles.textH, { textAlign: "right", fontSize: 12 }]}>
            ”ব্যক্তিক”
          </Text>
        </View>
        <View style={[styles.container, { marginTop: "0px" }]}>
          <View style={styles.leftColumn}>
            <View
              style={[
                styles.cusView,
                { marginTop: "-5px", marginBottom: "-5px" },
              ]}
            >
              <Text style={[styles.text, { width: "auto" }]}>তারিখ:</Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "100px",
                    marginBottom: "15px",
                    paddingLeft: "3px",
                  },
                ]}
              >
                {this.state.todate !== undefined && this.state.todate}
              </Text>
            </View>
            <View
              style={[
                styles.cusView,
                { marginBottom: "-10px", marginTop: "-10px" },
              ]}
            >
              <Text style={[styles.text, { width: "auto" }]}>ব্যাবস্থাপক:</Text>
            </View>
            <View
              style={[
                styles.cusView,
                { marginBottom: "-10px", marginTop: "-5px" },
              ]}
            >
              <Text style={[styles.text, { width: "auto" }]}>
                গ্লোবাল ইসলামী ব্যাংক লিমিটেড:
              </Text>
            </View>
            <View
              style={[
                styles.cusView,
                { marginBottom: "-10px", marginTop: "-10px" },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "130px",
                    marginBottom: "5px",
                    paddingRight: "3px",
                  },
                ]}
              >
                {this.state.datToload.branch != undefined &&
                  this.state.datToload.branch.name}
              </Text>
              <Text style={[styles.text, { width: "auto" }]}>শাখা</Text>
            </View>
          </View>
          <View style={styles.rightColumn}>
            <View style={[styles.table, { borderWidth: 0 }]}>
              <View style={styles.tableRow}>
                <View style={[styles.tableCol1, { borderWidth: 0 }]}>
                  <Text style={[styles.tableCell, { borderWidth: 0 }]}>
                    হিসাব নম্বর :
                  </Text>
                </View>
                {/* <View style={[styles.tableCol, { borderTopWidth: 1 }]}>
                  <Text
                    style={[styles.tableCell, { borderLeftWidth: 1 }]}
                  ></Text>
                </View> */}
                {this.state.accountNumber !== undefined &&
                  this.state.accountNumber.map((e) => {
                    return (
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{e}</Text>
                      </View>
                    );
                  })}

                {/* <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}></Text>
                </View> */}
              </View>
              <View style={[styles.tableRow, { marginTop: 5 }]}>
                <View style={[styles.tableCol2, { borderWidth: 0 }]}>
                  <Text style={[styles.tableCell, { borderWidth: 0 }]}>
                    ইউনিক গ্রাহক আইডি কোড :
                  </Text>
                </View>
                {this.state.customerCustId !== undefined &&
                  this.state.customerCustId !== null &&
                  this.state.customerCustId.map((e) => {
                    return (
                      <View style={styles.tableCol3}>
                        <Text style={styles.tableCell}>{e}</Text>
                      </View>
                    );
                  })}
              </View>
              <View style={[styles.tableRow, { borderWidth: 0 }]}>
                <View style={[styles.tableCol4, { borderWidth: 0 }]}>
                  <Text style={[styles.tableCell, { borderWidth: 0 }]}>
                    (ব্যাংকের ব্যবহারের জন্য)
                  </Text>
                </View>
                <View
                  style={[styles.tableCol5, { width: "50%", borderWidth: 0 }]}
                >
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "100%" }]}>
            মুহ্তারাম/মুহতারামা
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "100%" }]}>আসসালামু আলাইকুম</Text>
        </View>
        <View style={[styles.cusView1, {}]}>
          <Text
            style={[
              styles.text,
              { width: "85%", marginTop: "-10px", fontSize: "9px" },
            ]}
          >
            আমি/আমরা আপনার শাখায় একটি হিসাব খোলার জন্য আবেদন করছি । আমার/আমাদের
            হিসাব সংক্রান্ত ও ব্যক্তিগত বিস্তারিত তথ্য নিম্নে প্রদান কিরছি :{" "}
          </Text>
        </View>
        <View style={[styles.cusViewH, {}]}>
          <Text style={[styles.textH, { fontSize: "10px" }]}>
            হিসাব সংক্রান্ত তথ্যাদি{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            হিসাবের শিরোনাম (বাংলায় )
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "66%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined && this.state.customer.nameBn}
            {"  "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            In English (Block Letter)
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "66%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined &&
              this.state.customer.name.toUpperCase()}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>হিসাবের প্রকৃতি</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabprokriti === "মুদারাবাহ্ সঞ্চয়ী হিসাব "
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            মুদারাবাহ্ সঞ্চয়ী হিসাব{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabprokriti === "আল-ওয়াদীয়াহ চলতি হিসাব "
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            আল-ওয়াদীয়াহ চলতি হিসাব{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabprokriti === "মুদারাবাহ্ এসএনডি চলতি হিসাব "
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            মুদারাবাহ্ এসএনডি চলতি হিসাব{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "20%" }]}></Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          ></Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabprokriti === "মুদারাবাহ্ এফসি হিসাব "
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            মুদারাবাহ্ এফসি হিসাব{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabprokriti === "মুদারাবাহ্ আরএফসিডি হিসাব "
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            মুদারাবাহ্ আরএফসিডি হিসাব{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabprokriti === "মুদারাবাহ্ এনএফসিডি হিসাব "
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            মুদারাবাহ্ এনএফসিডি হিসাব{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "20%" }]}></Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          ></Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabprokriti === "অন্যান্য "
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            অন্যান্য{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "57%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>মুদ্রা </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.mudra === "টাকা" ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            টাকা{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.mudra === "ডলার" ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            ডলার{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.mudra === "ইউরো" ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            ইউরো{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.mudra === "পাউন্ড" ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            পাউন্ড{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.mudra === "অন্যান্য" ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            অন্যান্য{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "28%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            হিসাব পরিচালনা সংক্রান্ত পদ্ধতি{" "}
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabporichalona === "এককভাবে"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            এককভাবে{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabporichalona === "যৌথভাবে"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            যৌথভাবে{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabporichalona === "যে কোন একজন"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            যে কোন একজন{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabporichalona === "যে কোন একজন অথবা জীবিতজন"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            যে কোন একজন অথবা জীবিতজন{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "20%" }]}></Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          ></Text>
          <Image
            style={styles.imageC}
            src={
              this.state.hishabporichalona === "অন্যান্য"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            অন্যান্য{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "57%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            প্রাথমিক জমার পরিমান{" "}
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            (অংকে){" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "25%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            (কথায়){" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "26%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            অন্যান্য সুবিধা {""}
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.debitCard === true ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            ডেবিট কার্ড{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.smsAlert === true ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            এসএমএস সেবা{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.internetbanking === true ? "check.png" : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            ইন্টারনেট ব্যাংকিং{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.onnano === true ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            অন্যান্য{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "18%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusViewH, {}]}>
          <Text style={[styles.textH, { width: "70%", textAlign: "right" }]}>
            ব্যক্তি সংক্রান্ত তথ্যাদি{" "}
          </Text>
          <Text style={[styles.textH, { textAlign: "right" }]}>
            সংযুক্তির সংখ্যা{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "80px",
                marginBottom: "5px",
                paddingLeft: "5px",
                textAlign: "right",
              },
            ]}
          ></Text>
        </View>
        <View style={styles.container}>
          <View style={styles.leftColumn1}>
            <View style={[styles.cusView4, { marginTop: "-10px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                হিসাবধারীর নাম (বাংলায় )
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                  this.state.customer.nameBn}
                {"  "}
              </Text>
            </View>
            <View style={[styles.cusView4, { marginTop: "-5px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                In English (Block Letter)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                  this.state.customer.name.toUpperCase()}
              </Text>
            </View>
            <View style={[styles.cusView4, { marginTop: "-5px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                পিতার নাম (বাংলায়)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                  this.state.customer.f_name + " "}
              </Text>
            </View>
            <View style={[styles.cusView4, { marginTop: "-5px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                In English (Block Letter)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                  this.state.customer.f_name_en.toUpperCase()}
              </Text>
            </View>
            <View style={[styles.cusView4, { marginTop: "-5px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                মাতার নাম (বাংলায়)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                  this.state.customer.m_name}
                {"  "}
              </Text>
            </View>
            <View style={[styles.cusView4, { marginTop: "-5px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                In English (Block Letter)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                  this.state.customer.m_name_en.toUpperCase()}
              </Text>
            </View>
            <View style={[styles.cusView4, { marginTop: "-5px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                স্বামী/স্ত্রীর নাম (বাংলায়)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                  this.state.customer.spouse_name}{" "}
              </Text>
            </View>
            <View style={[styles.cusView4, { marginTop: "-5px" }]}>
              <Text style={[styles.text, { width: "30%" }]}>
                In English (Block Letter)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              >
                {this.state.customer !== undefined &&
                this.state.customer.spouse_name_en !== null
                  ? this.state.customer.spouse_name_en
                  : ""}
              </Text>
            </View>
          </View>
          <View style={styles.rightColumn1}>
            <Image
              style={styles.image1}
              src={
                this.state.profilepic !== undefined &&
                this.state.profilepic !== null
                  ? `${this.state.propicexten},${this.state.profilepic}`
                  : "/user-image.jpg"
              }
              //src="/user-image.jpg" />
            />
          </View>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>জাতীয়তা </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "25%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined &&
            this.state.customer.nationality !== null
              ? this.state.customer.nationality.toUpperCase()
              : "Bangladeshi"}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            লিঙ্গ :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.lingo === "পুরুষ" ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            পুরুষ{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={this.state.lingo === "মহিলা" ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            মহিলা{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            অন্যান্য{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "12%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "20%" }]}></Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                fontSize: "7px",
              },
            ]}
          >
            (রেসিডেন্ট নন-রেসিডেন্ট (প্রয়োজনীয় ক্ষেত্রে ব্যাংক কর্ত্ক গাইডলাইন্স
            ফর ফরেন এক্সচেঞ্জ ট্রানজেকশন এর নির্দেশনা অনুসরণ করতে হবে){" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>জন্ম তারিখ</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "20%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined &&
            this.state.customer.dob !== null
              ? this.state.customer.dob
              : ""}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            ই-টিআইএন(e-TIN) (যদি):{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "30%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-10px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>
            রেসিডেন্ট স্ট্যাটাস{" "}
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.resident === "রেসিডেন্ট" ? "check.png" : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            রেসিডেন্ট{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.resident === "নন-রেসিডেন্ট"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            নন-রেসিডেন্ট{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                fontSize: "7px",
              },
            ]}
          >
            (প্রয়োজনীয় ক্ষেত্রে ব্যাংক কর্ত্ক গাইডলাইন্স ফর ফরেন এক্সচেঞ্জ
            ট্রানজেকশন এর নির্দেশনা অনুসরণ করতে হবে ){" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>পেশা (বিস্তারিত)</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "38%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.tp !== undefined && this.state.tp.profession}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            মাসিক আয়:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "20%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.tp !== undefined && this.state.tp.monthlyIncome}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>
            অর্থের উৎস (বিস্তারিত)
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "70%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.tp !== undefined && this.state.tp.sourceOfFund}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>বর্তমান ঠিকানা</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            বাসা/হোল্ডিং নম্বর:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "12%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.homeOrHoldingNo + " "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            সড়ক নম্বর/গ্রাম:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "12%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.additionalVillageOrRoad}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            পো:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "13%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.postOffice}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}></Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            থানা/উপজেলা:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "12%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.upozila}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            জেলা:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "14%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.district}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            দেশ:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "9%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.country}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>স্থায়ী ঠিকানা</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            বাসা/হোল্ডিং নম্বর:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "12%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.homeOrHoldingNo + " "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            সড়ক নম্বর/গ্রাম:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "12%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.additionalVillageOrRoad}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            পো:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "13%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.postOffice}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}></Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            থানা/উপজেলা:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "18%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.upozila}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            জেলা:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "14%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.district}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            দেশ:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "9%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.presentAddress !== undefined &&
              this.state.presentAddress.country}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>
            টেলিফোন/মোবাইল নম্বর{" "}
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            বাসা:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "17%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            অফিস:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "17%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            মোবাইল:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "13%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined && this.state.customer.mobile}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}></Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            ই-মেইল:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "60%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined && this.state.customer.email}
          </Text>
        </View>
      </>
    );
    const Page2 = (
      <>
        <View style={[styles.cusView1, { marginTop: "10px" }]} break>
          <Text style={[styles.text, { width: "15%" }]}>পরিচিতি পত্র </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.porichoypotro === "জাতীয় পরিচয় পত্র"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            জাতীয় পরিচয় পত্র{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.porichoypotro === "পাসপোর্ট"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            পাসপোর্ট{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.porichoypotro === "জন্ম নিবন্ধন"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            জন্ম নিবন্ধন{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={
              this.state.porichoypotro === "অন্যান্য"
                ? "check.png"
                : "uncheck.png"
            }
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            অন্যান্য{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "30%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}> </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={1 === 1 ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            নম্বর{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "27%",
                marginBottom: "15px",
                paddingLeft: "5px",
                marginRight: "10px",
              },
            ]}
          >
            {this.state.nidDetail !== undefined &&
              this.state.nidDetail.nationalId10}
          </Text>
          <Image
            style={styles.imageC}
            src={1 === 1 ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            ইস্যুর তারিখ{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "25%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined && this.state.customer.issueDate}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}> </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Image
            style={styles.imageC}
            src={1 === 1 ? "check.png" : "uncheck.png"}
          />
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            ইস্যুকারী কর্তৃপক্ষ{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "58%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          >
            {this.state.customer !== undefined &&
              this.state.customer.issuePlace}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "17%" }]}>
            পরিচয়দানকারীর পরিচিতি পত্র
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            (জাতীয় পরিচয়পত্র ব্যতীত অন্যান্য পরিচয়পত্র প্রদানের ক্ষেত্রে
            প্রযোজ্য){" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-7px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>নাম</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "66%",
                marginBottom: "10px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}> </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            জাতীয় পরিচয়পত্র নম্বর{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "28%",
                marginBottom: "10px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            জন্ম তারিখ{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "22%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}> </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            হিসাব নম্বর:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "30%",
                marginBottom: "10px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            মোবাইল নম্বর:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "24%",
                marginBottom: "10px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}> </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
              },
            ]}
          >
            পরিচয় প্রদানকারীর স্বাক্ষর (তারিখসহ):{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "51%",
                marginBottom: "10px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}> </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                fontSize: "7",
              },
            ]}
          >
            **হিসাব পরিচালনাকারী একাধিক হলে প্রত্যেকের ব্যক্তি সংক্রান্ত তথ্যাদি
            পৃথকভাবে সংযুক্ত হবে ।{" "}
          </Text>
        </View>
        <View
          style={[
            styles.cusViewH,
            { width: "85%", marginTop: "-7px", textAlign: "left" },
          ]}
        >
          <Text
            style={[
              styles.textH,
              { textAlign: "left", width: "85%", fontSize: "10px" },
            ]}
          >
            হিসাবধারী নাবালক হলে, নিম্নোক্ত তথ্য পূরণ করতে হবে{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, {}]}>
          <Text
            style={[
              styles.text,
              { width: "87%", marginTop: "-10px", padding: "2px" },
            ]}
          >
            আমি নিম্ন স্বাক্ষরকারী হিসাবধারীর বৈধ অভিভাবক হিসাবে এই মর্মে ঘোষণা
            করছি যে, হিসাবধারী নাবালক । তার প্রয়োজনীয় তথ্য সংযুক্ত ফরমে প্রদান
            করা হলো । হিসাবধারী সাবালক না হওয়া পর্যন্ত কিংবা আমার পরবর্তী ঘোষণা
            না দেওয়া পর্যন্ত অভিভাবক হিসাাবে হিসাবটি আমার স্বাক্ষরে পরিচালিত হবে
            (অভিভাবক বলতে বাবা অথবা মা অথবা উভয়ের অবর্তমানে অন্য কোন আইনগত
            অভিভাবককে বুঝাবে) ।{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>নাম </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "64%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>পিতার নাম </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "64%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>মাতার নাম </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "64%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            জাতীয় পরিচয়পত্র নম্বর{" "}
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "33%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text style={[styles.text, { width: "auto", paddingLeft: "10px" }]}>
            জন্ম তারিখ{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "23%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View
          style={[styles.cusView1, { marginTop: "0px", marginBottom: "10px" }]}
        >
          <Text style={[styles.text, { width: "20%" }]}>সম্পর্ক </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "29%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text style={[styles.text, { width: "auto", paddingLeft: "10px" }]}>
            স্বাক্ষর (অভিভাবক){" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "23%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusViewH, { width: "87%", marginTop: "-7px" }]}>
          <Text
            style={[
              styles.textH,
              { textAlign: "left", width: "85%", fontSize: "10px" },
            ]}
          >
            হিসাধারী নন-রেসিডেন্ট হলে, নিম্নোত্ত তথ্য পূরণ করতে হবে{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>পাসপোর্ট নম্বর </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "35%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text style={[styles.text, { width: "auto", paddingLeft: "10px" }]}>
            মেয়াদ{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "27%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>ভিসার মেয়াদ </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "35%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text style={[styles.text, { width: "auto", paddingLeft: "10px" }]}>
            ভিসা ইস্যুকারী কর্তৃপক্ষ{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "18%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "5px" }]}>
          <Text style={[styles.text, { width: "15%" }]}>বিদেশের ঠিকানা </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "68%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "5px" }]}>
          <Text style={[styles.text, { width: "85%" }]}>
            বি:দ্র্র: হিসাবধারী USA নাগরিক হলে FATCA Declaration ফরম পূরণ করতে
            হবে ।
          </Text>
        </View>
        <View style={[styles.cusViewH, {}]}>
          <Text
            style={[
              styles.textH,
              { width: "70%", textAlign: "right", fontSize: "10px" },
            ]}
          >
            নমিনি সংক্রান্ত তথ্যাদি{" "}
          </Text>
          <Text style={[styles.textH, { textAlign: "right" }]}>
            সংযুক্তির সংখ্যা{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "80px",
                marginBottom: "5px",
                paddingLeft: "5px",
                textAlign: "right",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, {}]}>
          <Text style={[styles.text, { width: "85%", marginTop: "-10px" }]}>
            আমি / আমরা এ হিসাবের অর্থ আমার / আমাদের মৃত্যুর পর নিম্নে বর্ণিত
            ব্যক্তি / ব্যাক্তিগণকে প্রদানের জন্য মনোনীত করলাম । আমি / আমরা
            উল্লেখিত মনোনয়ন যে কোন সময় বাতিল বা পরিবর্তনের অধিকার সংরক্ষণ করি ।
            আমি / আমরা এই মর্মে ‍ আরো সম্মতি জ্ঞাপন করছি যে, আমার / আমাদের এ
            নির্দেশনা মোতাবেক ব্যাংক অর্থ প্রদান করবে এবং অর্থ পরিশোধ করা হলে
            সংশ্লিষ্ট আমানত সম্পর্কিত যাবতীয় দায় পরিশোধ হয়েছে বলে গণ্য হবে ।{" "}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.leftColumn1, { width: "85%" }]}>
            <View style={[styles.cusView4, {}]}>
              <Text style={[styles.text, { width: "30%" }]}>
                নমিনির নাম (বাংলায়)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              ></Text>
            </View>
            <View style={[styles.cusView4, {}]}>
              <Text style={[styles.text, { width: "30%" }]}>
                In English (Block Letter)
              </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              ></Text>
            </View>
            <View style={[styles.cusView4, {}]}>
              <Text style={[styles.text, { width: "30%" }]}>পিতার নাম </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              ></Text>
            </View>
            <View style={[styles.cusView4, {}]}>
              <Text style={[styles.text, { width: "30%" }]}>মাতার নাম </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              ></Text>
            </View>
            <View style={[styles.cusView4, {}]}>
              <Text style={[styles.text, { width: "30%" }]}>ঠিকানা </Text>
              <Text
                style={[
                  styles.text,
                  { width: "2%", textAlign: "right", paddingRight: "5px" },
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "68%",
                    marginBottom: "5px",
                    paddingLeft: "5px",
                  },
                ]}
              ></Text>
            </View>
          </View>
          <View style={styles.rightColumn1}>
            <Image
              style={[styles.image1, { width: "90%" }]}
              src={"/user-image.jpg"}
              //src="/user-image.jpg" />
            />
          </View>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>শতকরা হার</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "30%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "10px",
              },
            ]}
          >
            হিসাবধারীর সাথে সম্পর্ক:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "17%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%", fontSize: "8px" }]}>
            হিসাবধারীর সাথে সম্পর্ক, জাতীয় পরিচয়পত্র নম্বর / জন্ম নিবন্ধন /
            অন্যান্য,
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "2%",
                textAlign: "right",
                paddingRight: "5px",
                marginTop: "5px",
              },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "35%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginTop: "0px",
                paddingRight: "10px",
              },
            ]}
          >
            জন্ম তারিখ:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "20%",
                marginBottom: "15px",
                paddingLeft: "5px",
                marginTop: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}></Text>
          <Text
            style={[
              styles.text,
              {
                width: "2%",
                textAlign: "right",
                paddingRight: "5px",
              },
            ]}
          >
            :{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                paddingRight: "10px",
                fontSize: "6px",
              },
            ]}
          >
            ** নমিনি একাধিক হলে প্রত্যেকের নমিনি সংক্রান্ত তথ্যাদি পৃথকভাবে
            সংযুক্ত করতে হবে ।{" "}
          </Text>
        </View>
        <View style={[styles.cusViewH, { width: "87%", marginTop: "-7px" }]}>
          <Text
            style={[
              styles.textH,
              { textAlign: "left", width: "87%", fontSize: "8px" },
            ]}
          >
            নমিনি নাবালক হলে তার / তাদের নাবালক থাকা অবস্থায় হিসাবধারী /
            হিসাবধারীগণের মৃত্যুর ক্ষেত্রে ব্যাংক-কোম্পানি আইন, ১৯৯১ এর ১০৩ (২)
            ধারা অনুযায়ী নমিনির পক্ষে আমানতের অর্থ গ্রহনকারীর তথ্য:{" "}
          </Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "5px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>নাম </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "63%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>পিতার নাম</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "30%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "5px",
              },
            ]}
          >
            মাতার নাম:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "25%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "-7px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>স্থায়ী ঠিকানা </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "64%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            জাতীয় পরিচয়পত্র নম্বর/ জন্ম নিবন্ধন / অন্যান্য{" "}
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "64%",
                marginBottom: "5px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
          <Text style={[styles.text, { width: "20%" }]}>
            নমিনির সাথে সম্পর্ক
          </Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :{" "}
          </Text>

          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "30%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
          <Text
            style={[
              styles.text,
              {
                width: "auto",
                paddingLeft: "10px",
                marginBottom: "10px",
                paddingRight: "5px",
              },
            ]}
          >
            জন্ম তারিখ:{" "}
          </Text>
          <Text
            style={[
              styles.text,
              {
                borderBottom: "1px dashed #000000",
                width: "25%",
                marginBottom: "15px",
                paddingLeft: "5px",
              },
            ]}
          ></Text>
        </View>
      </>
    );

    const MyDoc = () => (
      <Document>
        <Page size="A4" style={styles.body}>
          {Page1}
          {Page2}
        </Page>
      </Document>
    );
    return (
      <div>
        <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer style={{ width: "100%", height: "100vh", border: "none" }}>
          <MyDoc />
        </PDFViewer>
      </div>
    );
  }
}

export default AccountForm2;
