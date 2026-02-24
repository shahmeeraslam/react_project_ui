import {
  RiAwardFill,
  RiTeamFill,
  RiRocketFill,
  RiShieldCheckFill,
  RiRecycleFill,
  RiCustomerServiceFill
} from '@remixicon/react';

const heroCardData = [

  {
    icon: <RiAwardFill size={80}  />,
    color: "#F2C94C",      // gold accent (MAIN BRAND COLOR)
    bg: "#3B2A1F",         // dark wood
    title: "Premium Quality",
    description:
      "We manufacture strong and durable wooden pallets using high-grade timber."
  },

  {
    icon: <RiTeamFill size={80}  />,
    color: "#E0B84C",
    bg: "#2F1E14",         // darker wood
    title: "Expert Craftsmanship",
    description:
      "Our skilled team ensures precision and perfection in every pallet."
  },

  {
    icon: <RiRocketFill size={80} />,
    color: "#F2C94C",
    bg: "#4A3326",         // walnut
    title: "Fast Delivery",
    description:
      "Efficient production ensures quick delivery across the country."
  },

  {
    icon: <RiShieldCheckFill size={80} />,
    color: "#D4A537",
    bg: "#2A1A12",         // espresso
    title: "Reliable Strength",
    description:
      "Built to handle heavy industrial loads safely and securely."
  },

  {
    icon: <RiRecycleFill size={80} />,
    color: "#CFAF6D",
    bg: "#3E2C23",         // teak
    title: "Eco Friendly",
    description:
      "We use sustainable wood to protect the environment."
  },

  {
    icon: <RiCustomerServiceFill size={80} />,
    color: "#F2C94C",
    bg: "#35241A",         // mahogany
    title: "Customer Support",
    description:
      "Professional support for all your wooden pallet requirements."
  }

];

export default heroCardData;
