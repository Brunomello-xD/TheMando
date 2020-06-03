import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const screenWidth = Math.round(Dimensions.get("window").width) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    //paddingVertical: 24,
    marginTop: Constants.statusBarHeight,
  },
  viewMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp("20%"),
  },
  textWelcome: {
    fontSize: hp("3.5%"),
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#000",
  },
  textLogin: {
    marginBottom: wp("2.5%"),

    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  buttonLogin: {
    marginTop: wp("4.5%"),

    height: hp("9.5%"),
    backgroundColor: "#2d5a35",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonLogin: {
    fontSize: hp("3%"),
    color: "#f6f9f7",
    fontWeight: "bold",
  },
  viewSocial: {
    marginTop: wp("1.2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  facebook: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000000",
    height: hp("6.5%"),
    width: screenWidth - 26.5,
    borderRadius: 4,
  },
  textFacebook: {
    marginLeft: wp("1.5%"),

    color: "#fff",
    fontSize: hp("2.2%"),
  },
  google: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000000",
    height: hp("6.5%"),
    width: "100%",
    maxWidth: screenWidth - 26.5,
    borderRadius: 4,
  },
  textGoogle: {
    marginLeft: wp("1.5%"),

    color: "#fff",
    fontSize: hp("2.2%"),
  },
  register: {
    marginTop: hp("1.5%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textRegister: {
    marginLeft: wp("1.5%"),

    fontSize: hp("2.4%"),
    color: "#3d3d3d",
  },
  buttonRecover: {
    marginTop: hp("0%"),

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textRecover: {
    marginLeft: wp("1.5%"),

    fontSize: hp("2%"),
    color: "#3d3d3d",
  },
  form: {
    paddingVertical: hp("1%"),
    height: hp("30%"),
  },
});
