import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    alignItems: "flex-start",
    marginBottom: 30,
  },
  menuPerfil: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  imgPerfil: {
    height: 15,
    width: 15,
    marginBottom: 4,
    marginLeft: 4,
  },
  textMenuPerfil: {
    fontWeight: "bold",
    marginLeft: 4,
    color: "#3b3b3b",
    fontSize: 12,
  },
  viewTopic: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  titleTopic: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#000",
  },
  descriptionTopic: {
    color: "#585858",
    fontSize: 14,
  },
  comment: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  commentText: {
    backgroundColor: "white",
    height: 40,
    borderColor: "#395435",
    borderRadius: 4,
    borderWidth: 1,
  },
  viewResp: {
    marginTop: 4,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonComment: {
    marginRight: 4,
  },
  textComment: {
    color: "#000",
    fontSize: 13,
  },
  commentList: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  perfilUser: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imgPerfilComment: {
    height: 15,
    width: 15,
  },
  nameUser: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginLeft: 4,
  },
  commentUser: {
    fontSize: 14,
    color: "#585858",
    marginBottom: 4,
  },
});
