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
    color: "#3d3d3d",
  },
  textCadastro: {
    marginBottom: wp("2.5%"),

    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "#000",
  },
  form: {
    paddingVertical: hp("1%"),
  },
  buttonCreate: {
    marginTop: wp("0%"),

    height: hp("9.5%"),
    backgroundColor: "#2d5a35",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonCreate: {
    fontSize: hp("3%"),
    color: "#f6f9f7",
    fontWeight: "bold",
  },
});
