import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Input } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import logoImg from "../../assets/logo.png";

export default function newCase() {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text>Título</Text>
      </View>
    </View>
  );
}
