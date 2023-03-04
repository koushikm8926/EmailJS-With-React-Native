import React from "react";
import { ScrollView, TextInput } from "react-native";
import { View,Text,TouchableOpacity,StyleSheet ,Image,SafeAreaView} from "react-native";
import styles from "./style/style";

export default function App(){
  return(
    <ScrollView>
    <SafeAreaView style={styles.container}>

      <View style={styles.view1}>
        <Image source={{uri:"https://thecapplug.com/img/cms/94599-contact-us.gif"}} style={{ width: "100%",height:250, }}/>
        <Text style={styles.text}>Contact Us</Text>
      </View>

      <View style={styles.view2}>
        <TextInput style={styles.TextInput} placeholder="Name" keyboardType="default"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Email" keyboardType="default"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Phone Number" keyboardType = "number-pad"></TextInput>
        <TextInput style={styles.TextInput3} placeholder="Massege" keyboardType="default"></TextInput>      
      </View>

      <View style={styles.view3}>
        <TouchableOpacity style={styles.TouchableOpacity}><Text>Submit</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
    </ScrollView>
  );
}
