import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  description: {
    padding: 8,
    marginTop: 30,
    fontSize: 16,
    color: "black",
    backgroundColor: "#959595",
    borderRadius: 4,
  },
  viewNewCase: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 18,
    marginBottom: 10,
  },
  buttonNewCase: {
    flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonNewCase: {
    color: "#1b1b1b",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 4,
  },
  viewCases: {
    marginTop: 6,
  },
  casesList: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsTopic: {
    color: "#585858",
    fontSize: 14,
    fontWeight: "600",
  },
});
