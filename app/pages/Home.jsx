import AppBar from '../components/AppBar'
import { StyleSheet, Text, View } from 'react-native'

export default function Home({ navigation }) {
  return (
    <>
      <AppBar
        navigation={navigation}
        child={() => {
          return <View style={styles.container}>
            <Text>Home</Text>
          </View>
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
