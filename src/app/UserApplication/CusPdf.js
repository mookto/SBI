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
} from "@react-pdf/renderer";

class CusPdf extends Component {
  render() {
    const styles = StyleSheet.create({
      body: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingHorizontal: 35,
      },
      text: {
        padding: "0px",
        fontSize: 10,
        width: "100%",
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
      cusView: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
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
    });
    const MyDoc = () => (
      <Document>
        <Page size="A4" style={styles.body}>
          <View style={styles.cusView}>
            <Image style={styles.image} src="/user-image.jpg" />
            <Image style={styles.image} src="/user-image.jpg" />
          </View>
          <View style={styles.cusView1}>
            <Text style={styles.text6}>Customer Photo</Text>
            <Text style={styles.text6}>Nominee Photo</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Applicant’s Name:</Text>
            <Text style={styles.text2}>Ariful Islam Oni</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Account Number:</Text>
            <Text style={styles.text2}>12345679066</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Unique Account Number:</Text>
            <Text style={styles.text2}>AS1234568</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Mother’s Name:</Text>
            <Text style={styles.text2}>Farvin Jahan</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Father’s Name:</Text>
            <Text style={styles.text2}>Aslam Sheikh</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Spouse Name:</Text>
            <Text style={styles.text2}>N/A</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text3}>Date of Birth:</Text>
            <Text style={styles.text4}>1997-08-10</Text>
            <Text style={styles.text3}>Gender:</Text>
            <Text style={styles.text4}>Male</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text4}>Profession:</Text>
            <Text style={styles.text5}>Business</Text>
            <Text style={styles.text4}>Monthly income:</Text>
            <Text style={styles.text5}>50,000</Text>
            <Text style={styles.text4}>Sources of Fund:</Text>
            <Text style={styles.text5}>Own Income</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text4}>Mobile Number:</Text>
            <Text style={styles.text5}>01987654345</Text>
            <Text style={styles.text4}>Nationality:</Text>
            <Text style={styles.text5}>Bangladeshi</Text>
            <Text style={styles.text4}>TIN (if any):</Text>
            <Text style={styles.text5}>2346576878779</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Present Address:</Text>
            <Text style={styles.text2}>
              House:263, Road :5, GMG Colony, Khalishpur,Khulna
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text1}>Permanent Address:</Text>
            <Text style={styles.text2}>
              House:263, Road :5, GMG Colony, Khalishpur,Khulna
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text4}>Nominee:</Text>
            <Text style={styles.text5}>Abdul Motin</Text>
            <Text style={styles.text4}>Relation:</Text>
            <Text style={styles.text5}> Brother</Text>
            <Text style={styles.text4}>Photograph:</Text>
            <Text style={styles.text5}>Yes</Text>
          </View>
          <View style={styles.cusView}>
            <Image style={styles.image} src="/dummy-img.jpg" />
            <Image style={styles.image} src="/dummy-img.jpg" />
          </View>
          <View style={styles.cusView1}>
            <Text style={styles.text6}>NID Front</Text>
            <Text style={styles.text6}>NID Back</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>1. Has UNSCRs check done? Yes</Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              2. Has risk grading done? Yes (If assessed risk high then conduct
              EDD as per BFIU circular.)
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              3.Is the customer is IPs/PEPs? Yes (If client is PEPs or IPs with
              higher risk, then conduct EDD as per BFIU circular. )
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              4. Is there any adverse media news against the customer? No (If
              any then conduct EDD. )
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              5. Has the source of fund verified/justified? Yes
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              6. Has the beneficial ownership checked? Yes (If there any
              beneficial owner found, then conduct CDD on beneficial owner. If
              beneficial owner is PEPs, then conduct EDD. )
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              7. Are any other documents obtained? Yes
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              8. Has review of customer profile done (existing customer)? Yes if
              so, date of review 27-02-2020
            </Text>
          </View>
          <View style={styles.cusView}>
            <Text style={styles.text}>
              9. What is the average range and usual pattern of customer
              transaction (over 6/12 months)? 20000
            </Text>
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

export default CusPdf;
