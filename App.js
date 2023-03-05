import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Notify from 'expo-notifications';

import Home from './src/screens/Home';
import Icons from './src/screens/Icons';
import Lists from './src/screens/Lists';
import Lottie from './src/screens/Lottie';
import Animation from './src/screens/Animation';
import Images from './src/screens/Images';
import Notifications from './src/screens/Notifications';

const Stack = createNativeStackNavigator();

Notify.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowAlert: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Icons' component={Icons} />
        <Stack.Screen name='Lists' component={Lists} />
        <Stack.Screen name='Lottie' component={Lottie} />
        <Stack.Screen name='Animation' component={Animation} />
        <Stack.Screen name='Images' component={Images} />
        <Stack.Screen name='Notifications' component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
