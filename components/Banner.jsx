import { StyleSheet, Image } from "react-native";
import {styles,myimage} from '../assets/Styles/styles1'


function Banner(props) {
  return (
    <Image
      style={{width:'100%', height:'30%', resizeMode:'stretch'}}
      source={require(`../assets/images/${props.imagename}`)}   
    />
  );
}
export default Banner;
