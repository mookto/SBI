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

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    Font.register({
      family: "kalpurush",
      src: "/kalpurush.ttf",
    });
    Font.register({
      family: "Oswald",
      src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
    });
    const BORDER_COLOR = "#000000";
    const BORDER_STYLE = "solid";
    const COL1_WIDTH = 12.5;
    const COLN_WIDTH = (100 - COL1_WIDTH) / 14;
    const COL2_WIDTH = 43.75;
    const COLN2_WIDTH = (100 - COL2_WIDTH) / 9;
    const COL3_WIDTH = 50;
    const COLN3_WIDTH = (100 - COL3_WIDTH) / 8;
    const styles = StyleSheet.create({
      body: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingHorizontal: 35,
        fontFamily: "kalpurush",
      },
      text: {
        padding: "0px",
        fontSize: 10,
        width: "100%",
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
        fontSize: 10,
        width: "30%",
        display: "flex",
      },
      text2: {
        fontSize: 10,
        width: "70%",
        display: "flex",
        borderBottom: "1px dotted #000000",
      },
      textf: {
        fontSize: 10,
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
        marginVertical: 5,
        marginHorizontal: 5,
        width: "100%",
      },
      cusView: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "7px 0px",
      },
      cusView2: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
        padding: "7px 0px",
      },
      cusView1: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "0px",
        marginTop: "-10px",
        paddingTop: "-10px",
      },
      container: {
        flexDirection: "row",
        "@media max-width: 400": {
          flexDirection: "column",
        },
      },
      leftColumn: {
        flexDirection: "column",
        width: "50%",
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
      tableCol1Header: {
        width: COL1_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableColHeader: {
        width: COLN_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
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
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol3: {
        width: COLN2_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol5: {
        width: COLN3_WIDTH + "%",
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCellHeader: {
        margin: 5,
        fontSize: 12,
        fontWeight: 500,
      },
      tableCell: {
        margin: 2,
        fontSize: 7,
      },
      tableCellCus: {
        margin: 2,
        fontSize: 9,
      },
    });
    const MyDoc = () => (
      <Document>
        <Page size="A4" style={styles.body}>
          <View style={styles.container}>
            <View style={styles.leftColumn}>
              <Image style={styles.image1} src="/sbi-i.png" />
            </View>
            <View style={styles.rightColumn}>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>A/C No.</Text>
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
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol2}>
                    <Text style={styles.tableCell}>
                      Unique Customer ID Code
                    </Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={styles.tableCol3}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol4}>
                    <Text style={styles.tableCell}>Date</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>D</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>D</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>M</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>M</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>Y</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>Y</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>Y</Text>
                  </View>
                  <View style={styles.tableCol5}>
                    <Text style={styles.tableCell}>Y</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.textT}>ACCOUNT OPENING FORM (INDIVIDUAL)</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>The Manager</Text>
          </View>
          <View style={[styles.cusView, { marginTop: "-10px" }]}>
            <Text style={styles.text}>State Bank of India</Text>
          </View>
          <View style={[styles.cusView, { marginTop: "-10px" }]}>
            <Text
              style={{
                display: "flex",
                flexDirection: "row",
                width: "15%",
                borderBottom: "1px solid #000000",
                fontSize: "7px",
              }}
            ></Text>
            <Text style={styles.text}>Branch</Text>
          </View>
          <View
            style={[
              styles.cusView,
              { marginTop: "10px", marginBottom: "-10px" },
            ]}
          >
            <Text style={styles.text}>Dear Sir,</Text>
          </View>
          <View style={[styles.cusView, { marginTop: "5px" }]}>
            <Text style={styles.text}>
              I/We am/are applying to open an account in your Branch. I/We
              furnish below information regarding the account and personal
              details:
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text
              style={{
                textDecoration: "underline",
                fontSize: "10px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              FIRST PART: ACCOUNT RELATED INFORMATION
            </Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View
                style={[
                  styles.tableColCus,
                  { width: "3%", borderBottomWidth: 0 },
                ]}
              >
                <Text style={styles.tableCellCus}>1</Text>
              </View>
              <View style={[styles.tableColCus, { width: "27%" }]}>
                <Text style={styles.tableCellCus}>
                  Account Title (In Bangla)
                </Text>
              </View>
              <View style={[styles.tableColCus, { width: "70%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View
                style={[styles.tableColCus, { width: "3%", borderTopWidth: 0 }]}
              >
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "27%" }]}>
                <Text style={styles.tableCellCus}>In English Block Letter</Text>
              </View>
              <View style={[styles.tableColCus, { width: "70%" }]}>
                <Text style={styles.tableCellCus}>x</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "3%" }]}>
                <Text style={styles.tableCellCus}>2</Text>
              </View>
              <View style={[styles.tableColCus, { width: "27%" }]}>
                <Text style={styles.tableCellCus}>Nature of A/C</Text>
              </View>
              <View style={[styles.tableColCus, { width: "25%" }]}>
                <Text style={styles.tableCellCus}>Deposit </Text>
              </View>
              <View style={[styles.tableColCus, { width: "4%" }]}>
                <Text style={styles.tableCellCus}>3 </Text>
              </View>
              <View style={[styles.tableColCus, { width: "16%" }]}>
                <Text style={styles.tableCellCus}>Currency </Text>
              </View>
              <View style={[styles.tableColCus, { width: "25%" }]}>
                <Text style={styles.tableCellCus}>BDT </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "3%" }]}>
                <Text style={styles.tableCellCus}>4</Text>
              </View>
              <View style={[styles.tableColCus, { width: "27%" }]}>
                <Text style={styles.tableCellCus}>
                  Mode of Account Operation
                </Text>
              </View>
              <View style={[styles.tableColCus, { width: "70%" }]}>
                <Text style={styles.tableCellCus}>Singly</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "3%" }]}>
                <Text style={styles.tableCellCus}>5</Text>
              </View>
              <View style={[styles.tableColCus, { width: "27%" }]}>
                <Text style={styles.tableCellCus}> Initial Deposit Amount</Text>
              </View>
              <View style={[styles.tableColCus, { width: "7%" }]}>
                <Text style={styles.tableCellCus}>In Fig</Text>
              </View>
              <View style={[styles.tableColCus, { width: "18%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "10%" }]}>
                <Text style={styles.tableCellCus}>In Word</Text>
              </View>
              <View style={[styles.tableColCus, { width: "35%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
            </View>
          </View>
          <View style={[styles.cusView, { marginTop: "10px" }]}>
            <Text style={styles.text}>
              6. Whether The Customer has Account in Other Bank (If YES,
              describe below) : NO
            </Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "3%" }]}>
                <Text style={styles.tableCellCus}>SL</Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}>Account Number</Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}>Account Number</Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}>Bank Name</Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}>Branch Name</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "3%" }]}>
                <Text style={styles.tableCellCus}>i</Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "3%" }]}>
                <Text style={styles.tableCellCus}>ii</Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "3%" }]}>
                <Text style={styles.tableCellCus}>iii</Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View style={[styles.tableColCus, { width: "24.25%" }]}>
                <Text style={styles.tableCellCus}></Text>
              </View>
            </View>
          </View>
          <View style={[styles.cusView, { marginTop: "10px" }]}>
            <Text style={styles.text}>
              7. Facilities & Alternate Delivery Channels
            </Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>Cheque Book</Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>Debit Card</Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>SMS Banking </Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>Internet Banking</Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>e-Statement</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>Yes</Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>Yes</Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>No </Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>No</Text>
              </View>
              <View style={[styles.tableColCus, { width: "20%" }]}>
                <Text style={styles.tableCellCus}>Yes</Text>
              </View>
            </View>
          </View>
          <View style={[styles.table, { marginTop: "20px" }]}>
            <View style={styles.tableRow}>
              <View
                style={[
                  styles.tableColCus,
                  { width: "3%", borderBottomWidth: 0 },
                ]}
              >
                <Text style={styles.tableCellCus}>8</Text>
              </View>
              <View
                style={[
                  styles.tableColCus,
                  { width: "27%", borderBottomWidth: 0 },
                ]}
              >
                <Text style={styles.tableCellCus}>
                  Mobile & E mail ID for SMS
                </Text>
              </View>
              <View style={[styles.tableColCus, { width: "15%" }]}>
                <Text style={styles.tableCellCus}>Mobile Number </Text>
              </View>
              <View style={[styles.tableColCus, { width: "55%" }]}>
                <Text style={styles.tableCellCus}>d</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View
                style={[styles.tableColCus, { width: "3%", borderTopWidth: 0 }]}
              >
                <Text style={styles.tableCellCus}></Text>
              </View>
              <View
                style={[
                  styles.tableColCus,
                  { width: "27%", borderTopWidth: 0 },
                ]}
              >
                <Text style={styles.tableCellCus}>
                  {" "}
                  /Internet Banking facilities
                </Text>
              </View>
              <View style={[styles.tableColCus, { width: "15%" }]}>
                <Text style={styles.tableCellCus}>Email Address </Text>
              </View>
              <View style={[styles.tableColCus, { width: "55%" }]}>
                <Text style={styles.tableCellCus}>d</Text>
              </View>
            </View>
          </View>
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

export default AccountForm;
