import cart from "./cart.png";
import arrow from "./arrow.png";
import invoice from "./invoice.png";
import addCart from "./add-cart.png";
import star from "./star.png";
import totalInvoice from "./total-invoice.png";
import cash from "./cash.png";
import payment from "./payment.png";
import vendor from "./vendor.png";
import dashboard from "./dashboard.png";
import approvePo from "./approve-po.png";
import bidTabulation from "./bid-tabulation.png";
import paymentMonitoring from "./payment-monitoring.png";
import poApproved from "./po-approved.png";
import poMonitoring from "./po-monitoring.png";
import quotationTab from "./quotation-tabulation.png";
import material from "./material.png";
import rfq from "./rfq.png";
import waitingQuotation from "./waiting-quotation.png";
import data from "./data.png";
import vendorBlack from "./vendor-black.png";
import assignBuyer from "./assign-buyer.png";
import dashboardBlack from "./dashboard-black.png";

export const icons = {
  cart,
  arrow,
  invoice,
  addCart,
  star,
  totalInvoice,
  cash,
  payment,
  vendor,
  dashboard,
  approvePo,
  bidTabulation,
  paymentMonitoring,
  poApproved,
  poMonitoring,
  quotationTab,
  material,
  rfq,
  waitingQuotation,
  data,
  vendorBlack,
  assignBuyer,
  dashboardBlack,
};

export const menuItems = [
  { id: 1, item: "Dashboard", icon: dashboardBlack, iconActive: dashboard },
  { id: 2, item: "Material Planning", icon: material, iconActive: material },
  { id: 3, item: "Data PR", icon: data, iconActive: material },
  { id: 4, item: "Assign Buyer", icon: assignBuyer, iconActive: material },
  { id: 5, item: "RFQ Issued", icon: rfq, iconActive: material },
  {
    id: 6,
    item: "Waiting Quotation",
    icon: waitingQuotation,
    iconActive: material,
  },
  {
    id: 7,
    item: "Quotation Tabulation",
    icon: quotationTab,
    iconActive: material,
  },
  { id: 8, item: "Bid Tabulation", icon: bidTabulation, iconActive: material },
  { id: 9, item: "Approve PO", icon: approvePo, iconActive: material },
  { id: 10, item: "PO Approved", icon: poApproved, iconActive: material },
  { id: 11, item: "PO Monitoring", icon: poMonitoring, iconActive: material },
  {
    id: 12,
    item: "Payment Monitoring",
    icon: paymentMonitoring,
    iconActive: material,
  },
  { id: 13, item: "Vendor", icon: vendorBlack, iconActive: material },
];
