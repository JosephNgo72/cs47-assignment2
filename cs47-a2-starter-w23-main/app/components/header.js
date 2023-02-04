import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Platform,
} from "react-native";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons.menu.light} style={styles.headerIcons} />
      <Text style={styles.title}>ensom</Text>
      <Image source={Icons.sun} style={styles.headerIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: windowHeight * 0.06,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  headerIcons: {
    height: Platform.OS === "ios" ? 54 : 41,
    width: windowWidth * 0.1,
    aspectRatio: 1 / 1,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Sydney-Bold",
    fontSize: PixelRatio.getFontScale() * windowHeight * 0.05,
    color: Themes.light.text,
  },
});

export default Header;
