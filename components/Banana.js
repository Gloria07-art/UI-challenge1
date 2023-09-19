import { Text, View, StyleSheet, Image } from 'react-native';

export default function Banana() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/banana.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    height:2,
    marginTop:70,
  
  },
  
  logo: {
    height: 350,
    width: 335,
    backgroundColor:'#FFE5E5',
  }
});