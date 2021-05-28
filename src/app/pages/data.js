import NomineeInformation from "../UserApplication/NomineeInformation";
import TransactionProfile from "../UserApplication/TransactionProfile";
import NewAccount from "../UserApplication/NewAccount";

const allInAccordians = [
  {
    id: 1,
    title: "New Account",
    info: "New Account Information",
    component: NewAccount,
  },
  {
    id: 2,
    title: "Nominee Information",
    info: "All Nominee Information",
    component: NomineeInformation,
  },
  {
    id: 3,
    title: "Transaction Profile",
    info: "Transaction Profile",
    component: TransactionProfile,
  },
  {
    id: 4,
    title: "Documents",
    info: "All Documents",
  },
  {
    id: 5,
    title: "Additional Information",
    info: "Additional Information",
  },
];
export default allInAccordians;
