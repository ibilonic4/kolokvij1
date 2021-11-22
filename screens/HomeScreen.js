import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export  function HomeScreen() {
  return (
    // View, text Component
    <View style={styles.container}>
      

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
        <Image
        style={styles.slikica}
        source={{
          uri: "https://cdn.myanimelist.net/images/voiceactors/1/64734.jpg",
        }}
      />
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Ivor</Text>
          <Text style={styles.subtitle}>Bilonić</Text>
          <Text style={styles.subtitle}>ibilonic@ffos.hr</Text>
        </View>

     
      </View>
      <View style={styles.jumbotron}>
      <View style={styles.container}>
          <Text style={styles.subtitle}>FFOS</Text>
          <Text style={styles.subtitle}>OŠ Tin Ujević</Text>
          <Text style={styles.subtitle}>Jezićna </Text>
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "red",
  },
  header: {
    borderBottomWidth: 2,
    padding: 10,
  },
  subtitle: {padding: 5
    ,},

  title: {
    textAlign: "center",
    fontSize: 30,
  },
  jumbotron: {
    flexDirection: "row",
    margin: 5
    ,
  },
  slikica: {
    margin: 10,
    width: 100,
    height: 100,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "white",
    padding: 20,
  },
  textStyle: {
    fontSize: 40,
    color: "black",
  },
});