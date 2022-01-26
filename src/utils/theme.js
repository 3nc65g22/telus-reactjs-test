import { createTheme } from "@material-ui/core/styles";

const breakpoints = {
  mobile: "375px",
  small: "425px",
  medium: "767px",
  large: "1200px",
  xlarge: "1300px",
  tablet: "991px",
};

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFCA28",
      main: "#0062cc",
      dark: "#ED4C28",
      darker: "#000",
    },
    secondary: {
      light: "#CA0065",
      main: "#8D1468",
      dark: "#482080",
    },
    tertiary: {
      dark: "#0A0403",
      main: "#0A0403",
      darker: "#1A1719",
    },
    background: {
      light: "#ffffff",
      card: "#ECF1F7",
      main: "#F5F6FA",
      dark: "#9fa1a3",
      button:
        "transparent linear-gradient(99deg, #CA0065 0%, #F9882B 100%) 0% 0% no-repeat padding-box",
      input: "#F8F8FB",
    },
    border: {
      main: "#cccccc",
      selected: "linear-gradient(to bottom, #CA0065, #F9882B) 1 100%;",
    },
    boxShadow: {
      main: "0px 3px 6px #00000029",
      card: "0px 2px 6px #0000000A",
      tab: "0px 2px 5px #0000000D",
      field: "0px 0px 6px #25406B17",
    },
    lineDivider: {
      light: "#ffffff",
      main: "#25406B",
    },
    button: {
      main: "transparent linear-gradient(99deg, #0062cc 0%, #a4cefd  100%) 0% 0% no-repeat padding-box",
      hover:
        "transparent linear-gradient(99deg, #a4cefd  0%, #0062cc 100%) 0% 0% no-repeat padding-box",
    },
    table: {
      oddBackground: "#0698b40F",
    },
  },
  provider: {
    background: {
      button:
        "transparent linear-gradient(95deg, #CA0065 0%, #F9882B 100%) 0% 0% no-repeat padding-box",
    },
  },
  overrides: {
    MUIDataTable: {
      paper: {
        background: "transparent",
      },
    },
    MUIDataTableSelectCell: {
      expandDisabled: {
        visibility: "hidden",
      },
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "lato,sans-serif",
    subtitle1: {
      fontSize: "15px",
      [`@media (max-width:${breakpoints.medium})`]: {
        fontSize: "12px",
      },
    },
    subtitle2: {
      fontSize: "13px",
      [`@media (max-width:${breakpoints.medium})`]: {
        fontSize: "10px",
      },
    },
    h4: {
      fontSize: " 2.15rem",
      [`@media (max-width:${breakpoints.medium})`]: {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.9rem",
      [`@media (max-width:${breakpoints.medium})`]: {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontSize: "1.4rem",
      [`@media (max-width:${breakpoints.medium})`]: {
        fontSize: "1.0px",
      },
    },
    color: {
      semiLight: "#ffffff99",
      light: "#ffffff",
      gray: "#777777",
      main: "#363840",
      dark: "#191F4A",
      darker: "#25406B",
      error: "#F1791E",
      allergy: "#FFCA28",
      immunization: "#F9882B",
      medication: "#ED4C28",
      labs: "#CA0065",
      problem: "#8D1468",
      message: "#482080",
      primary: "#CA0065",
      secondary: "#EA5D3E",
      lightGray: "#EDEEF1",
      primaryScroll: "#B31074",
      modalHeader: "#25406b",
      primary1: "#D51F58",
      primary2: "#D82A53",
      primary3: "#DE3B4B",
      primary4: "#E55043",
      primary5: "#EA5E3D",
      secondary1: "#E85541",
      secondary2: "#EC633B",
      secondary3: "#F06E36",
      secondary4: "#F06E36",
      secondary5: "#F06E36",
      secondary6: "#ED7B2B",
      secondary7: "#F88D3E",
      secondary8: "#F8964C",
      secondary9: "#FA9C55",
    },
  },
});

export default theme;
