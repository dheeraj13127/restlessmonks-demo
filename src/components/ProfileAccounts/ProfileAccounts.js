import React from "react";
import "./css/ProfileAccounts.css";
function ProfileAccounts() {
  return (
    <div className="container-fluid profileAccountsContainer">
      <div className="row">
        <div className="col-12 col-lg-5 col-md-5 offset-md-2 mt-3">
          <div className="profileAccountsBox">
            <h4 className="text-center text-light profileAccountsHeader">
              NUMBER OF ACCOUNTS
            </h4>
            <div className="text-center mt-5">
              <form>
                <div className="input-group mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ENTER NUMBER HERE"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="text-center mt-5">
              <h1 className="text-center text-light profileAccountsAmount">$0.00</h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-4">
        <h5 className="text-start profileAccountsTryText mt-1">TRY IT FREE</h5>
        <h5 className="text-start profileAccountsPayText mt-4">Pay As You Go Rates</h5>
        <p className="text-start profileAccountsSubText">Emails Price per Email</p>
        <p className="text-start profileAccountsSubText">up to 10,000 $0.008</p>
        <p className="text-start profileAccountsSubText">up to 100,000 $0.005</p>
        <p className="text-start profileAccountsSubText">up to 250,000 $0.004</p>
        <p className="text-start profileAccountsSubText">up to 1,000,000 $0.003</p>
        <h5 className="text-start profileAccountsPayText mt-4">Enterprise Packages</h5>
        <p className="text-start profileAccountsSubText">over 1,000,000</p>
        <h5 className="text-start profileAccountContactText mt-2">Contact Us</h5>
        <h5 className="text-start profileAccountsLearnText mt-3">LEARN MORE ABOUT ENTERPRISE</h5>
        </div>
      </div>
    </div>
  );
}

export default ProfileAccounts;
