import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight + 24,
  },
  viewMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWelcome: {
    marginTop: 24,

    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#3d3d3d",
  },
  textCadastro: {
    marginTop: 18,
    marginBottom: 18,

    fontSize: 18,
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  buttonCreate: {
    marginTop: 18,

    height: 55,
    backgroundColor: "#2d5a35",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonCreate: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
