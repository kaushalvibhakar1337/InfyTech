import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Policies.scss";

const TermsNConditions = () => {
  return (
    <>
      <Navbar />
      <Header title="TERMS & CONDITIONS" />
      <div className="policies">
        <div className="section">
          <p className="heading">BASIC TERMS & CONDITIONS</p>
          <p className="subHeading">
            We at InfyTech are passionate gamers ourselves and plan on bringing
            these sales to benefit our fellow gamers. The policy and quantity
            restrictions might seem harsh but they have been formulated for the
            benefit of the gaming community in a way that it is not exploited
            for any malpractices.
          </p>
          <ol className="points">
            <li>
              We are bringing offers solely with the purpose of benefitting end
              users and not other resellers in the business so if any other
              business owners or entities related to the business owners place
              an order it will get canceled. The refund after deducting the
              gateway charges in full will be sent back to the payment source.
            </li>
            <li>
              Product quantities will be limited based on the product type and
              users can only purchase X number of times with the same name,
              location & number. In case anyone is found misusing this policy
              InfyTech reserves the right to cancel the order and refund the
              amount deducting the payment gateway charges.
            </li>
            <li>
              Any orders placed during the sale cannot be canceled under any
              circumstance & is non-refundable.
            </li>
            <li>
              We will not be issuing any B2B billing during sales to ensure that
              only end users benefit from these sales.
            </li>
            <li>
              If any user is suspected of misusing the order limitations, we
              reserve the right to cancel the order and refund after deducting
              the payment gateway charges.
            </li>
            <li>
              During sales, there may be times when pickups might get affected
              due to heavy rains across the country so we request you to please
              bear with us during those days.
            </li>
            <li>
              Orders placed post 4 PM will be considered as placed on the next
              day.
            </li>
            <li>
              In case a product is returned back to us from the courier stating
              the unavailability of the recipient double shipping will be
              applicable to ship the product back.
            </li>
            <li>
              For any product that you order that you claim to be faulty or
              broken or defective, an uncut video has to be made of the unboxing
              of the product for claiming the same.
            </li>
            <li>
              In case there are any claims of the product being faulty on
              delivery, we will pick up the product and replace it after we test
              the product. In case the product is found to be not faulty, the
              customer will have to bear the shipping charges of the product to
              our origin and to the customer ( twice the shipping ).
            </li>
            <li>
              In addition to this, all the existing Terms & Conditions are
              applicable.
            </li>
            <li>
              InfyTech holds full right to void wallet balances if someone's
              found misusing the feature decision taken by InfyTech will be
              final in this case.
            </li>
            <li>
              No Customer can waive responsibility on grounds of ignorance of
              terms &amp; conditions.
            </li>
            <li>
              By clicking on the I accept to the terms & conditions button you
              also accept the following{" "}
              <NavLink to="/return-policy">
                Cancellation,Returns & Refund Policy
              </NavLink>
            </li>
          </ol>
        </div>
        <div className="section">
          <p className="heading">PRICING INFORMATION</p>
          <p className="subHeading">
            While InfyTech assures to provide accurate product and pricing
            information, pricing or typographical errors may occur.. In case if
            a product is listed at an incorrect price or with incorrect
            information due to an error in pricing or product information,
            InfyTech shall have the right, to refuse or cancel any orders placed
            for that product, unless the product has already been dispatched.
            <br />
            <br />
            Unless the product ordered by you has been dispatched, your offer
            will not be deemed accepted and InfyTech will have the right to
            modify the price of the product and contact you for further
            instructions using the e-mail address provided by you during the
            time of registration, or cancel the order and notify you of such
            cancellation.
            <br />
            <br />
            Prices and availability are subject to change without notice.
            <br />
            <br />
            Please note that there may be certain orders that we are unable to
            accept and must cancel. We reserve the right, to refuse or cancel
            any order for any reason.
            <br />
            <br />
            <strong>
              Orders are considered to be executed in the below cases: -
            </strong>
          </p>
          <ol className="points">
            <li>
              In case of floods/ Heavy Rains/ Bandh or any other unavoidable
              circumstances, we reserve the right to reschedule the delivery for
              another date.
            </li>
            <li>
              If <strong>InfyTech</strong> is unable to deliver your order, then
              a complete refund will be made. We shall not be liable for any
              other charges, loss of profits, or any other liability, etc.
              caused due to non-delivery.
            </li>
            <li>
              No change in instructions can be entertained on the date of
              delivery unless acknowledged and confirmed in writing.
            </li>
            <li>
              Orders once placed cannot be canceled unless requested 1 working
              day subject to conditions mentioned in "Refunds &amp;
              Cancellations".&nbsp;
            </li>
            <li>
              InfyTech retains the right to refuse any order unconditionally.
            </li>
            <li>
              InfyTech reserves the right to change the price or withdraw any
              product at any point of time at its own discretion without any
              notice.
            </li>
            <li>
              In case of any confusion about the delivery address, we reserve
              the right to call the recipient at the given phone number.
            </li>
            <li>
              infytech is not liable for any delay in delivery. The courier
              company/logistics and only guarantees to hand over the consignment
              to the courier company. <br />
              For any issues to be escalated/resolved, you can contact the
              respective courier company.
            </li>
          </ol>
        </div>
        <div className="section">
          <p className="heading">POLICY DURING ANY SALE RUN BY INFYTECH</p>
          <ol className="points">
            <li>
              We are bringing offers solely with the purpose of benefitting end
              users and not other resellers in the business so any other
              business owners or entities related to the business owners placing
              orders will get refunds after deducting the gateway charges in
              full.
            </li>
            <li>Any order placed during the sale is non-refundable.</li>
            <li>
              We will not be issuing any B2B billing during sales to ensure that
              only end users benefit from these sales.
            </li>
            <li>
              For any user suspected of misusing the order limitations, we
              reserve the right to cancel the order and refund after deducting
              the payment gateway charges.
            </li>
            <li>
              During sales, there may be times when pickups might get affected
              due to occasions such as Holi, Diwali, etc so we request you to
              please bear with us during those days.
            </li>
            <li>
              Orders placed post 4 PM will be considered as placed on the next
              day.
            </li>
            <li>
              In addition to this, all the existing Terms &amp; Conditions are
              applicable.
            </li>
            <li>
              For any product that you order that you claim to be faulty or
              broken or defective, an uncut video has to be made of the unboxing
              of the product for claiming the same.
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
        <div className="section">
          <p className="heading">OUT OF STOCK</p>
          <p className="subHeading">
            If a product is not in stock, InfyTech has every right to cancel the
            order with an email/phone message/WhatsApp message intimation to the
            customer, email should be sent for a cancelled order. In the case of
            a product going Out Of Stock, the full amount will be refunded to
            the customer.
          </p>
        </div>
        <div className="section">
          <p className="heading">WARRANTY</p>
          <p className="subHeading">
            InfyTech is an Esports, Marketing & Retailer for PC Parts and is in
            no way a Manufacturer of the products listed on the website. Any
            warranty claims or disputes shall be settled directly with the
            Manufacturer/All India Distributor and InfyTech shall be in no way
            liable for any such claims.
          </p>
        </div>
        <div className="section">
          <p className="heading">REVIEWS & COMMENTS</p>
          <p className="subHeading">
            Anything submitted by you to InfyTech in the form of reviews, ideas,
            comments, suggestions etc shall automatically become the sole and
            exclusive property InfyTech and will be treated as non-confidential
            and non-proprietary.
          </p>
        </div>
        <div className="section">
          <p className="heading">DISCLAIMER</p>
          <p className="subHeading">
            <strong>
              Any disputes arising out of the terms and conditions shall be
              handled by the Court in Mumbai. Mumbai Court has exclusive
              jurisdiction for deciding any disputes arising out of this sale
              contract.
            </strong>
            <br />
            <br />
            <br />
            <br />
            All the information on this website - www.infytech.com - is
            published in good faith and for general information purposes only.
            InfyTech does not make any warranties about the completeness,
            reliability, and accuracy of this information. Any action you take
            upon the information you find on this website (www.infytech.com), is
            strictly at your own risk. InfyTech will not be liable for any
            losses and/or damages in connection with the use of our website.
            <br />
            <br />
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link that may
            have gone 'bad'.
            <br />
            <br />
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms that are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
            <br />
            <br />
            <br />
            <strong>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms. Should we update, amend or make any changes to
              this document, those changes will be prominently posted here.
            </strong>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsNConditions;
