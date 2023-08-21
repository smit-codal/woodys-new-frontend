"use client";

import React, { useEffect, useState } from "react";
import ShippingBilling from "../components/checkout/items/shipping-billing";
import YourAccount from "../components/checkout/items/your-account";
import Button from "../components/button";
import { Login } from "../components/checkout/login";
import IdUpload from "../components/checkout/items/id-upload";
import OrderCompleted from "../components/checkout/items/order-completed";
import reviewIcon from "public/images/icons/review-check.svg";
import prescriptionIcon from "public/images/icons/prescription-approve.svg";
import fullfilIcon from "public/images/icons/fullfill-order.svg";
import shippedIcon from "public/images/icons/order-shipped.svg";
import Image from "next/image";
import CheckoutSummary from "../components/checkout/summary";

const DeviceWidth = 1023;
const stepsArray = [
  {
    title: "Your Account",
    content: <YourAccount />,
  },
  {
    title: "Shipping & Billing",
    content: <ShippingBilling />,
  },
  {
    title: "ID Upload",
    content: <IdUpload />,
  },
  {
    title: "Order Complete",
    content: <OrderCompleted />,
  },
];
const Checkout = () => {
  const [containerOffset, setContainerOffset] = useState<number | undefined>(0);
  const [isDesktop, setDesktop] = useState(false);
  useEffect(() => {
    // cart container function
    const cartContainerFun = () => {
      const cartContainer = document.getElementById(
        "cart-container"
      ) as HTMLElement;
      const cartContainerOff = cartContainer?.offsetLeft;
      const cartContainerPadd = parseInt(
        getComputedStyle(cartContainer).paddingLeft.replace("px", "")
      );

      if (window.innerWidth > DeviceWidth) {
        var cartContainerTotal = cartContainerOff + cartContainerPadd - 1;
      } else {
        var cartContainerTotal = 0;
      }
      setContainerOffset(cartContainerTotal);
    };

    // cart container function call on load
    cartContainerFun();

    // cart container function call on resize
    window.addEventListener("resize", () => {
      cartContainerFun();
      if (typeof window !== undefined) {
        window.addEventListener("resize", updateMedia);
        setDesktop(window.innerWidth > DeviceWidth);
      }
      return () => window.removeEventListener("resize", updateMedia);
    });
  }, [isDesktop]);

  const updateMedia = () => {
    setDesktop(window.innerWidth > DeviceWidth);
  };

  const [currentStep, setCurrentStep] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextStep = () => {
    scrollToTop();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      scrollToTop();
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  type StepProp = {
    title: string;
    isActive: boolean;
    isCompleted: boolean;
  };
  const StepIndicator = ({ title, isActive, isCompleted }: StepProp) => {
    const indicatorStatus = isCompleted
      ? "completed"
      : isActive
      ? "current"
      : "";

    return (
      <div className={`step-block ${indicatorStatus}`}>
        <span className="step-circle">
          <i className="fa-solid fa-check"></i>
        </span>
        <span className="block">{title}</span>
      </div>
    );
  };

  const orderReview = [
    {
      icon: reviewIcon,
      title: "Physician Review",
      text: "A physician reviews your order and reaches out if there are any questions",
      helptext: "",
    },
    {
      icon: prescriptionIcon,
      title: "Prescription Approved",
      text: "The physician will approve or reject your prescription",
      helptext: "",
    },
    {
      icon: fullfilIcon,
      title: "Pharmacy fulfills your order",
      text: "If accepted, this is where your payment is authorized ",
      helptext: "",
    },
    {
      icon: shippedIcon,
      title: "Order Shipped",
      text: "We ship your order direct from the pharmacy to you!",
      helptext: "Do a little dance!",
    },
  ];

  return (
    <>
      <section className="cart-section lg:h-full">
        <div className="container lg:h-full" id="cart-container">
          <div className="lg:flex justify-between gap-x-8 lg:h-full">
            <div className="py-8 md:py-15 w-full">
              <div className="lg:max-w-[725px] w-full flex justify-between gap-x-1 xl:gap-x-9 2xl:gap-x-13 text-center mb-16">
                <div className="step-block completed">
                  <span className="step-circle">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span className="block">Cart</span>
                </div>
                {stepsArray.map((step, index) => {
                  return (
                    <StepIndicator
                      key={index}
                      title={step.title}
                      isActive={index === currentStep}
                      isCompleted={index < currentStep || currentStep === 3}
                    />
                  );
                })}
              </div>
              <div className="lg:max-w-[680px] w-full mb-7">
                {stepsArray[currentStep].content}
                <div
                  className={`gap-x-3 pt-7 ${
                    currentStep === stepsArray.length - 1 ? "hidden" : "flex"
                  }`}
                >
                  <Button
                    className="btn btn-lg btn-secondary btn-outline min-w-25"
                    label="Back"
                    onClick={handlePrevStep}
                  />
                  <Button
                    className="btn btn-lg btn-accent btn-outline min-w-25"
                    label="Next"
                    onClick={handleNextStep}
                  />
                </div>
              </div>

              <div className="lg:max-w-[680px] w-full mb-7">
                <div className="my-10 border-b border-gray-400"></div>
                <Login />
              </div>
            </div>

            {currentStep === stepsArray.length - 1 ? (
              <div className="md:max-w-[564px] w-full lg:h-full py-7 lg:py-15">
                <h3 className="text-3xl font-semibold">
                  Thank you for your order, John!
                </h3>
                <p className="text-rose-500 font-semibold text-2xl mb-8">
                  Aaaand... Blast-Off!
                </p>
                <p className="font-semibold text-xl mb-2">
                  Your order number is{" "}
                  <span className="font-bold">#123456</span>
                </p>
                <p className="mb-16">An email confirmation has been sent.</p>
                <p className="font-semibold text-xl mb-8">
                  Here’s what will happen next...
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mb-8">
                  {orderReview.map((orderItem, index) => (
                    <div key={index}>
                      <div className="flex justify-center mb-2">
                        <Image
                          src={orderItem.icon}
                          width={70}
                          height={70}
                          alt="order-item-icon"
                        />
                      </div>
                      <h4 className="mb-2">{orderItem.title}</h4>
                      <p className="text-xs">{orderItem.text}</p>
                      <p className="text-xs text-rose-500 font-semibold">
                        {orderItem.helptext}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button
                    className="btn btn-md btn-secondary btn-outline"
                    label="See All Products"
                  />
                  <Button
                    className="btn btn-md btn-secondary btn-outline"
                    label="See Product FAQs"
                  />
                </div>
              </div>
            ) : (
              <CheckoutSummary containerOffset={containerOffset} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
