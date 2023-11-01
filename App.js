
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signin' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='signin' component={SigninScreen}/>
        <Stack.Screen name='signup' component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 




export default App 