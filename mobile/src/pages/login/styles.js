import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Constants from "expo-constants";

const screenWidth = Math.round(Dimensions.get("window").width) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight,
  },
  viewMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp("15%"),
  },
  textWelcome: {
    fontSize: hp("3.1%"),
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#3d3d3d",
  },
  textLogin: {
    marginBottom: wp("5%"),

    fontSize: hp("2.7%"),
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  buttonLogin: {
    marginTop: wp("4.5%"),

    height: hp("8.5%"),
    backgroundColor: "#2d5a35",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonLogin: {
    fontSize: hp("2.8%"),
    color: "#f6f9f7",
    fontWeight: "bold",
  },
  viewSocial: {
    marginTop: wp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  facebook: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000000",
    height: hp("5%"),
    width: screenWidth - 26.5,
    borderRadius: 4,
  },
  textFacebook: {
    marginLeft: 6,

    color: "#fff",
    fontSize: hp("1.8%"),
  },
  google: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000000",
    height: hp("5%"),
    width: "100%",
    maxWidth: screenWidth - 26.5,
    borderRadius: 4,
  },
  textGoogle: {
    marginLeft: 6,

    color: "#fff",
    fontSize: hp("1.8%"),
  },
  register: {
    marginTop: hp("1.5%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textRegister: {
    marginLeft: wp("1.5%"),

    fontSize: hp("2%"),
    color: "#3d3d3d",
  },
  buttonRecover: {
    marginTop: 8,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textRecover: {
    marginLeft: wp("1.5%"),

    fontSize: hp("1.8%"),
    color: "#3d3d3d",
  },
});
