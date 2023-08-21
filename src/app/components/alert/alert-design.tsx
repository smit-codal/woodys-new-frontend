import React from "react";
import AlertMessage from "./alert";
import AlertNotify from "./alert-notify";

const AlertDesign = (
  <>
    <h5 className="text-xl mb-3">Alert</h5>
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-7 pb-10 mb-10 border-b border-gray-400">
      <div className="">
        <h5 className="text-base mb-3">Alert Success</h5>

        <AlertMessage
          alertType="success"
          alertHeading="Alert heading"
          alertContent="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        />
      </div>
      <div className="">
        <h5 className="text-base mb-3">Alert Error</h5>

        <AlertMessage
          alertType="error"
          alertHeading="Alert heading"
          alertContent="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        />
      </div>
      <div className="">
        <h5 className="text-base mb-3">Alert Warning</h5>

        <AlertMessage
          alertType="warning"
          alertHeading="Alert heading"
          alertContent="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        />
      </div>
      <div className="">
        <h5 className="text-base mb-3">Alert Info</h5>

        <AlertMessage
          alertType="info"
          alertHeading="Alert heading"
          alertContent="Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
        />
      </div>
    </div>
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-7">
      <AlertNotify
        alertType="success"
        alertContent="A link to change your password was successfully sent to the email provided."
      />

      <AlertNotify
        className="mb-2"
        alertType="error"
        alertContent="You no longer qualify for the discount code, it has been removed. Please
        try another."
      />
      <AlertNotify
        className="mb-2"
        alertType="warning"
        alertContent="Your account was successfully created. You still need to verify your email and mobile number."
      />
      <AlertNotify
        className="mb-2"
        alertType="info"
        alertContent="Your account was successfully created. You still need to verify your email and mobile number."
      />
    </div>
  </>
);

export default AlertDesign;
