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
  textNewTopic: {
    marginBottom: wp("2.5%"),

    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  form: {
    height: hp("50%"),
  },
  textTitle: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  textDescription: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  textInputDescription: {
    marginTop: hp("1%"),

    borderRadius: 4,
    backgroundColor: "#ced4da",
  },
  buttonNewTopic: {
    marginTop: hp("2%"),
    justifyContent: "center",
    alignItems: "center",

    height: hp("9%"),
    backgroundColor: "#2d5a35",
    borderRadius: 4,
  },
  textButtonNewTopic: {
    fontSize: hp("2.5%"),
    color: "#f6f9f7",
    fontWeight: "bold",
  },
});
