import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".flowbite-react/**"]
  },
  ...nextVitals
];

export default config;
