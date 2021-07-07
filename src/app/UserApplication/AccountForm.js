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
    this.state = {
      ...props.location.state,
    };
  }

  componentDidMount() {
    var x = [];
    let y = this.state.datToload.account.accountNumber;
    console.log(y, typeof y);
    for (var i = 0; i < y.length; i++) {
      x.push(y.charAt(i));
    }
    let custp, custId;
    this.state.datToload.listCustomers.map((cp) => {
      this.setState({ customer: cp }, () => {
        custId = [];
        for (let i = 0; i < this.state.customer.cp.customerT24Id.length; i++) {
          custId.push(this.state.customer.cp.customerT24Id.charAt(i));
        }
        this.setState({ customerCustId: custId });
      });
    });

    console.log(x);
    this.setState({ accountNumber: x, todate: new Date() });
  }

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
        fontSize: 10,
        width: "100%",
      },
      box: {
        width: "10px",
        height: "10px",
        border: "1px solid #000000",
      },
      textH: {
        padding: "0px",
        fontSize: 10,
        width: "100%",
        textAlign: "center",
        paddingTop: 2,
        paddingBottom: "-2px",
        marginBottom: "-2px",
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
        marginVertical: 0,
        marginHorizontal: 0,
        width: "100%",
      },
      image2: {
        marginVertical: 0,
        marginHorizontal: 0,
        width: "100%",
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
        <View style={styles.cusView3} fixed>
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
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <View
              style={[
                styles.cusView,
                { marginTop: "0px", marginBottom: "0px" },
              ]}
            >
              <Text style={[styles.text, { width: "auto" }]}>তারিখ:</Text>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "1px dashed #000000",
                    width: "100px",
                    marginBottom: "5px",
                    paddingLeft: "3px",
                  },
                ]}
              >
                {this.state.todate !== undefined &&
                  this.state.todate.getDate() +
                    "/" +
                    (this.state.todate.getMonth() + 1) +
                    "/" +
                    (1900 + this.state.todate.getYear())}
              </Text>
            </View>
            <View
              style={[
                styles.cusView,
                { marginBottom: "-10px", marginTop: "-5px" },
              ]}
            >
              <Text style={[styles.text, { width: "auto" }]}>ব্যাবস্থাপক:</Text>
            </View>
            <View style={[styles.cusView, { marginBottom: "-10px" }]}>
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

                {/* <View style={styles.tableCol3}>
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
                </View> */}
                {/* <View style={styles.tableCol3}>
                  <Text
                    style={[styles.tableCell, { borderRightWidth: 1 }]}
                  ></Text>
                </View> */}
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
        <View style={[styles.cusView1, { marginTop: "10px" }]}>
          <Text style={[styles.text, { width: "100%" }]}>
            মুহ্তারাম/মুহতারামা
          </Text>
        </View>
        <View style={[styles.cusView1, {}]}>
          <Text style={[styles.text, { width: "100%" }]}>আসসালামু আলাইকুম</Text>
        </View>
        <View style={[styles.cusView1, {}]}>
          <Text style={[styles.text, { width: "85%" }]}>
            আমি/আমরা আপনার শাখায় একটি হিসাব খোলার জন্য আবেদন করছি । আমার/আমাদের
            হিসাব সংক্রান্ত ও ব্যক্তিগত বিস্তারিত তথ্য নিম্নে প্রদান কিরছি :{" "}
          </Text>
        </View>
        <View style={[styles.cusViewH, {}]}>
          <Text style={styles.textH}>হিসাব সংক্রান্ত তথ্যাদি </Text>
        </View>
        <View style={[styles.cusView1, {}]}>
          <Text style={[styles.text, { width: "20%" }]}>
            হিসাবের শিরোনাম (বাংলায়)
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
            {this.state.customer !== undefined && this.state.customer.cp.nameBn}
          </Text>
        </View>
        <View style={[styles.cusView1, {}]}>
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
              this.state.customer.cp.name.toUpperCase()}
          </Text>
        </View>
        <View style={[styles.cusView1, {}]}>
          <Text style={[styles.text, { width: "20%" }]}>হিসাবের প্রকৃতি</Text>
          <Text
            style={[
              styles.text,
              { width: "2%", textAlign: "right", paddingRight: "5px" },
            ]}
          >
            :
          </Text>
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
            <View style={[styles.cusView4, {}]}>
              <Text style={[styles.text, { width: "30%" }]}>
                হিসাবধারীর নাম (বাংলায়)
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
                  this.state.customer.cp.nameBn}
              </Text>
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
              >
                {this.state.customer !== undefined &&
                  this.state.customer.cp.name.toUpperCase()}
              </Text>
            </View>
            <View style={[styles.cusView4, {}]}>
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
                  this.state.customer.cp.f_name}
              </Text>
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
              >
                {this.state.customer !== undefined &&
                  this.state.customer.cp.f_name_en.toUpperCase()}
              </Text>
            </View>
            <View style={[styles.cusView4, {}]}>
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
                  this.state.customer.cp.m_name}
              </Text>
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
              >
                {this.state.customer !== undefined &&
                  this.state.customer.cp.m_name_en.toUpperCase()}
              </Text>
            </View>
            <View style={[styles.cusView4, {}]}>
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
                  this.state.customer.cp.spouse_name}
              </Text>
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
              >
                {this.state.customer !== undefined &&
                this.state.customer.cp.spouse_name_en !== null
                  ? this.state.customer.cp.spouse_name_en
                  : ""}
              </Text>
            </View>
          </View>
          <View style={styles.rightColumn1}>
            <Image style={styles.image1} src="/user-image.jpg" />
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
            this.state.customer.cp.nationality !== null
              ? this.state.customer.cp.nationality.toUpperCase()
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
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
            this.state.customer.cp.dob !== null
              ? this.state.customer.cp.dob
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
        <View style={[styles.cusView1, { marginTop: "0px" }]}>
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
          <Text style={[styles.box, {}]}></Text>
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
          <Text style={[styles.box, {}]}></Text>
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
      </>
    );
    const MyDoc = () => (
      <Document>
        <Page size="A4" style={styles.body}>
          {Page1}
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
