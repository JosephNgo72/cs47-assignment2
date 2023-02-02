import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";

const Body = () => {
  console.log(Profiles.mtl);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Profiles.mtl.image}
        style={(Themes.light.shadows, styles.image)}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.textName}>{Profiles.mtl.name}</Text>
        <Text style={styles.textDistance}>{Profiles.mtl.caption}</Text>
      </ImageBackground>

      <View style={(Themes.light.shadows, styles.music)}>
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
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1 / 1.1,
    justifyContent: "space-between",
    elevation: 3,
  },
  imageStyle: {
    borderRadius: 10,
  },
  textName: {
    padding: 10,
    fontSize: 32,
    fontFamily: "Sydney",
    color: Themes.light.textSecondary,
  },
  textDistance: {
    padding: 10,
    fontFamily: "Sydney",
    color: Themes.light.textSecondary,
  },
  player: {
    height: 50,
    width: 50,
    aspectRatio: 1 / 1,
    marginRight: 10,
  },
  audio: {
    height: undefined,
    width: 240,
    aspectRatio: 6 / 1,
  },
  music: {
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    width: "100%",
    backgroundColor: Themes.light.bgSecondary,
    elevation: 3,
  },
  songName: {
    fontSize: 25,
    fontFamily: "Sydney",
    color: Themes.light.text,
    marginBottom: 10,
  },
});

export default Body;
