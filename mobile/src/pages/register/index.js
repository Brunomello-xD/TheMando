import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as firebase from "firebase";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = async (email, password) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewMenu}>
        <Image source={logoImg} />
        <Text style={styles.textWelcome}>Seja bem-vindo!</Text>
      </View>

      <Text style={styles.textCadastro}>Cadastro</Text>

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
      </View>

      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => signUpUser(email, password)}
      >
        <Text style={styles.textButtonCreate}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
