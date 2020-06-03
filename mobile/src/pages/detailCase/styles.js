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
    height: hp("15%"),
  },
  menuPerfil: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  imgPerfil: {
    height: hp("2%"),
    width: wp("4%"),
    marginBottom: hp("0.8%"),
    marginLeft: wp("1%"),
  },
  textMenuPerfil: {
    fontWeight: "bold",
    marginLeft: wp("1%"),
    color: "#3b3b3b",
    fontSize: wp("3.2%"),
  },
  viewTopic: {
    padding: hp("1%"),
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: hp("2%"),
  },
  titleTopic: {
    fontSize: wp("4.4%"),
    fontWeight: "bold",
    marginBottom: hp("0.5%"),
    color: "#000",
  },
  descriptionTopic: {
    color: "#585858",
    fontSize: wp("4%"),
  },
  comment: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    marginBottom: hp("0.5%"),
  },
  commentText: {
    backgroundColor: "white",
    height: hp("7%"),
    borderColor: "#395435",
    borderRadius: 4,
    borderWidth: wp("0.3"),
  },
  buttonResp: {
    marginTop: hp("0.8%"),
    marginBottom: hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textComment: {
    color: "#000",
    fontSize: wp("3.8%"),
  },
  commentList: {
    padding: hp("0.5%"),
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: hp("1.5%"),
  },
  perfilUser: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imgPerfilComment: {
    height: hp("1.6%"),
    width: wp("3.6%"),
  },
  nameUser: {
    fontSize: wp("3.6%"),
    color: "#000",
    fontWeight: "bold",
    marginLeft: wp("1%"),
  },
  commentUser: {
    fontSize: wp("3.5%"),
    color: "#585858",
    marginBottom: 4,
    fontWeight: "bold",
  },
});
