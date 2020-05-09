import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const screenWidth = Math.round(Dimensions.get("window").width) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight + 20,
  },
  textWelcome: {
    marginTop: 14,

    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  textLogin: {
    marginTop: 32,

    fontSize: 18,
    fontWeight: "bold",
  },
  inputEmail: {
    marginTop: 12,

    height: 50,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  inputPassword: {
    marginTop: 18,

    height: 50,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  buttonLogin: {
    marginTop: 40,

    height: 55,
    backgroundColor: "#2d5a35",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonLogin: {
    fontSize: 20,
    color: "#f6f9f7",
    fontWeight: "bold",
  },
  viewSocial: {
    marginTop: 8,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  facebook: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000000",
    height: 35,
    width: screenWidth - 26.5,
    borderRadius: 4,
  },
  textFacebook: {
    marginLeft: 6,

    color: "#fff",
    fontSize: 12,
  },
  google: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000000",
    height: 35,
    width: "100%",
    maxWidth: screenWidth - 26.5,
    borderRadius: 4,
  },
  textGoogle: {
    marginLeft: 6,

    color: "#fff",
    fontSize: 12,
  },
  register: {
    marginTop: 8,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textRegister: {
    marginLeft: 4,

    fontSize: 14,
    color: "#3d3d3d",
  },
  buttonRecover: {
    marginTop: 8,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textRecover: {
    marginLeft: 4,

    fontSize: 14,
    color: "#3d3d3d",
  },
  viewMando: {
    marginTop: 32,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textMando: {
    marginLeft: 4,

    fontSize: 12,
  },
});
