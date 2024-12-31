import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import BitflagCalculator from "@site/src/components/BitflagCalculator";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add your custom components here
  BitflagCalculator,
};
