import React from "react";
import { Box } from "@chakra-ui/react";

// Renders drafting-style crop-mark corners around its children.
// Used on cards/images to reinforce the blueprint motif functionally
// (marking the bounds of a "sheet") rather than as pure decoration.
const cornerStyle = {
  position: "absolute",
  width: "16px",
  height: "16px",
  borderColor: "line.500",
  opacity: 0.7,
  transition: "border-color 0.2s ease, opacity 0.2s ease",
};

const CornerFrame = ({ children, active = false, ...rest }) => {
  return (
    <Box position="relative" {...rest}>
      <Box
        sx={{
          ...cornerStyle,
          top: "-1px",
          left: "-1px",
          borderTop: "2px solid",
          borderLeft: "2px solid",
        }}
        borderColor={active ? "signal.500" : "line.500"}
      />
      <Box
        sx={{
          ...cornerStyle,
          top: "-1px",
          right: "-1px",
          borderTop: "2px solid",
          borderRight: "2px solid",
        }}
        borderColor={active ? "signal.500" : "line.500"}
      />
      <Box
        sx={{
          ...cornerStyle,
          bottom: "-1px",
          left: "-1px",
          borderBottom: "2px solid",
          borderLeft: "2px solid",
        }}
        borderColor={active ? "signal.500" : "line.500"}
      />
      <Box
        sx={{
          ...cornerStyle,
          bottom: "-1px",
          right: "-1px",
          borderBottom: "2px solid",
          borderRight: "2px solid",
        }}
        borderColor={active ? "signal.500" : "line.500"}
      />
      {children}
    </Box>
  );
};

export default CornerFrame;
