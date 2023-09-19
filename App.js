import { Text, SafeAreaView, StyleSheet, TouchableOpacity,View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Banana from './components/Banana';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Banana />
      </Card>

      <View style={styles.footer}>
      <TouchableOpacity style={styles.btn3}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn4}>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFE5E5',
    padding: 8,
    flexDirection: 'column',
    
  },
 
  btn3: {
    width: 120,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontColor: 'purple',
    backgroundColor: '#FFEA20',
    borderRadius: 50,
    marginTop: 190,
    borderWidth: 7,
    borderColor: '#FFEA20',
    // marginLeft: 20,
  },

  btn4: {
    width: 240,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontColor: 'purple',
    // backgroundColor:'#FFEA20',
    borderRadius: 50,
     marginTop: -20,
    borderWidth: 7,
    borderColor: 'purple',
  },
  footer: {
    // justifyContent:'center',
    // alignItems: 'center',
    marginLeft: 30,
  },
});
