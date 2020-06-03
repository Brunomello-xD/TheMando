import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
  },
  viewMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    height: hp("15%"),
  },
  textWelcome: {
    fontSize: hp("3.5%"),
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#3d3d3d",
  },
  description: {
    padding: hp("1%"),
    marginTop: hp("1%"),

    fontWeight: "bold",
    fontSize: wp("4.1%"),
    color: "black",
    backgroundColor: "#959595",
    borderRadius: 4,
  },
  viewNewCase: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: hp("0.5%"),
    marginBottom: hp("0.5"),
  },
  buttonNewCase: {
    flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonNewCase: {
    marginLeft: 4,

    color: "white",
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    color: "#1b1b1b",
  },
  viewCases: {
    marginTop: hp("2%"),
  },
  casesList: {
    padding: hp("1%"),
    marginBottom: hp("2%"),

    borderRadius: 4,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: hp("1%"),

    color: "#000",
    fontWeight: "bold",
    fontSize: wp("4.1%"),
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsTopic: {
    color: "#585858",
    fontSize: wp("4%"),
    fontWeight: "600",
  },
});
