import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(configDir, "../../..")
  }
};

export default withFlowbiteReact(nextConfig);