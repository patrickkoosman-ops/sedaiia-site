import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos", pathname: "/**" }]
  },
  turbopack: {
    root: path.resolve(configDir, "../../..")
  }
};

export default withFlowbiteReact(nextConfig);