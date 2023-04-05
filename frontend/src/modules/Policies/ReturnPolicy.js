import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Policies.scss";

const ReturnPolicy = () => {
  return (
    <>
      <Navbar />
      <Header title="CANCELLATIONS, REFUNDS & REPLACEMENT" />
      <div className="policies">
        <div className="section">
          <p className="heading">CANCELLATION POLICY</p>
          <p className="subHeading">Updated on 1st April, 2023</p>
          <ol className="points">
            <li>
              Any kind of products on Sale, Special offers, Occasion Sales such
              as Diwali, New Year, etc will not be eligible for cancellation.
            </li>
            <li>
              In case there is an issue with the warranty of the product, it
              should be taken up with the manufacturer.
            </li>
            <li>
              Order once dispatched cannot be cancelled under any circumstances.
            </li>
            <li>
              Payments made via Payment Gateway will take upto 1 week to refund.
              In some cases, the procedure may take longer if there are issues.
              Any kind of charges are to be borne by the customer.
            </li>
            <li>
              In case an order is cancelled by the customer as per our
              cancellation policy, the Gateway Charges which are 2% for normal
              transactions and 5% for EMI Based Transactions will be borne by
              the customer ( unless it is our fault ).
            </li>
          </ol>
        </div>
        <div className="section">
          <p className="heading">REFUND & REPLACEMENT POLICY</p>
          <p className="subHeading">Updated on 1st April, 2023</p>
          <ol className="points">
            <li>
              If the product is delivered in a damaged condition, the wrong
              product is sent, the product is in dead condition or defective
              upon arrival, The buyer will have 72 hours to contact us so that
              we can help resolve the issue with a replacement. An uncut
              unboxing video is compulsory to claim for the same.
            </li>
            <li>
              In rare cases, Returns can be allowed with a 5% Charge + with
              twice the shipping charge if the order is cancelled after
              shipping. Note: Product must be sealed.
            </li>
            <li>
              No returns/refunds/replacements are allowed if you don't like the
              product or if the seal of the product is opened.
            </li>
            <li>
              In case of a return/refund, we process the refund once the
              products have been received and verified at our location.
            </li>
            <li>
              In case the product isn't available at the time of replacement,
              then full refund will be initiated.
            </li>
            <li>
              All the accessories which were delivered along with the product
              should be returned in the same way and along with the product
              (including the invoice)
            </li>
            <li>
              In case there are any claims of the product being faulty on
              delivery, we will pick up the product and replace it after we test
              the product. In case the product is found to be not faulty, the
              customer will have to bear the shipping charges of the product to
              our origin and to the customer ( twice the shipping ).
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
