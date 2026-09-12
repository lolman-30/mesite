import { extendTheme } from "@chakra-ui/react";

// Blueprint / drafting-board palette — dark ink navy with a
// blueprint-correction orange and a drafting-line cyan.
const colors = {
  ink: {
    950: "#080D18",
    900: "#0B1220",
    800: "#111A2E",
    700: "#182342",
    600: "#26335A",
  },
  paper: {
    500: "#F4EFE3",
  },
  line: {
    500: "#4FA8D8",
    300: "#8FC7E6",
  },
  signal: {
    500: "#FF6B35",
    400: "#FF8B5E",
  },
  slate: {
    100: "#E7ECF5",
    300: "#B7C0D6",
    500: "#8B95AC",
  },
};

const fonts = {
  heading: `'Space Grotesk', sans-serif`,
  body: `'Inter', sans-serif`,
  mono: `'IBM Plex Mono', monospace`,
};

// Subtle graph-paper grid used as a background texture.
const gridBg = {
  backgroundColor: colors.ink[900],
  backgroundImage: `
    linear-gradient(rgba(79, 168, 216, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 168, 216, 0.07) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        ...gridBg,
        color: "slate.100",
      },
      "::selection": {
        background: "signal.500",
        color: "ink.950",
      },
      "@media (prefers-reduced-motion: reduce)": {
        "*": {
          animationDuration: "0.001ms !important",
          transitionDuration: "0.001ms !important",
        },
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
