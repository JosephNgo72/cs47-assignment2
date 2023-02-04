import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";

const { height, width } = Dimensions.get("window");

const Body = () => {
  console.log(Profiles.mtl);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Profiles.mtl.image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.textName}>{Profiles.mtl.name}</Text>
        <Text style={styles.textDistance}>{Profiles.mtl.caption}</Text>
      </ImageBackground>

      <View style={styles.music}>
        <Text style={styles.songName}>My hottest take</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.player} source={Icons.player.light} />
          <Image style={styles.audio} source={Icons.audioWave.light} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 10,
  },
  image: {
    justifyContent: "space-between",
    resizeMode: "contain",
    width: height * 0.4,
    height: undefined,
    aspectRatio: 1 / 1.1,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowRadius,
  },
  imageStyle: {
    borderRadius: 10,
  },
  textName: {
    padding: 10,
    fontSize: PixelRatio.getFontScale() * height * 0.045,
    fontFamily: "Sydney",
    color: Themes.light.textSecondary,
  },
  textDistance: {
    padding: 10,
    fontFamily: "Sydney",
    fontSize: PixelRatio.getFontScale() * height * 0.025,
    color: Themes.light.textSecondary,
  },
  player: {
    height: 40,
    width: 40,
    aspectRatio: 1 / 1,
    marginRight: 10,
  },
  audio: {
    height: undefined,
    width: 200,
    aspectRatio: 6 / 1,
  },
  music: {
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    width: height * 0.4,
    height: undefined,
    backgroundColor: Themes.light.bgSecondary,
    elevation: 3,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowRadius,
  },
  songName: {
    fontSize: PixelRatio.getFontScale() * height * 0.035,
    fontFamily: "Sydney",
    color: Themes.light.text,
    marginBottom: 10,
  },
});

export default Body;
