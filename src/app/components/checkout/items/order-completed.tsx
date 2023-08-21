import React from "react";
import RocketOrbitingEarth from "public/images/logos/rocket-orbiting-earth.svg";
import Image from "next/image";

const OrderCompleted = () => {
  return (
    <div className="text-center">
      <Image
        src={RocketOrbitingEarth}
        alt="Rocket Orbiting Earth"
        width={414}
        height={414}
      />
    </div>
  );
};

export default OrderCompleted;
