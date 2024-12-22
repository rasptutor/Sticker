import { Text, View, StyleSheet, StatusBar } from 'react-native';

export default function AboutScreen() {   

  return (
    <View style={styles.container}>
      
      <Text style={styles.value}>About Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});
