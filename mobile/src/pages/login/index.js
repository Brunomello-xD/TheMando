import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqnbrWfATNvAisHUqiLAkqh1AyD1tqODs",
  authDomain: "the-mando-7521b.firebaseapp.com",
  databaseURL: "https://the-mando-7521b.firebaseio.com",
  projectId: "the-mando-7521b",
  storageBucket: "the-mando-7521b.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default function login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  //Botão "Tornar-se um Mando"
  function navigateToRegister() {
    navigation.navigate("register");
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewMenu}>
        <Image source={logoImg} />
        <Text style={styles.textWelcome}>Seja bem-vindo!</Text>
      </View>

      <Text style={styles.textLogin}>Faça seu Login</Text>

      <View style={styles.form}>
        <Input
          placeholder=" E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={<Icon name="envelope" size={18} color="black" />}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=" Senha"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity style={styles.buttonRecover}>
          <Feather name="key" size={14} color="#3d3d3d" />
          <Text style={styles.textRecover}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => loginUser(email, password)}
      >
        <Text style={styles.textButtonLogin}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.viewSocial}>
        <TouchableOpacity style={styles.facebook}>
          <FontAwesome name="facebook-square" color="#fff" size={14} />
          <Text style={styles.textFacebook}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.google}>
          <FontAwesome name="google" color="#fff" size={14} />
          <Text style={styles.textGoogle}>Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={navigateToRegister} style={styles.register}>
        <Feather name="log-in" size={14} color="#2d5a35" />
        <Text style={styles.textRegister}>Tornar-se um Mando</Text>
      </TouchableOpacity>
    </View>
  );
}
