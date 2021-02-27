import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_3}>😊Ciao!😊</Text>
      <Button
        title="Premimi"
        color="#ff0000"
        style={styles.Button_5}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { backgroundColor: "#00ff91" },
  Text_3: {
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    fontSize: 26,
    color: "#05570a",
    backgroundColor: "#00ff91",
    fontWeight: "bold"
  },
  Button_5: { alignSelf: "center", color: "#ffffff" }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
