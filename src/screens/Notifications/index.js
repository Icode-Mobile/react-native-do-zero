import { View, Text, Button } from 'react-native';
import * as Notify from 'expo-notifications';

export default function Notifications() {
  let name = 'Caio';
  const handleNotificationLocal = async () => {
    await Notify.scheduleNotificationAsync({
      content: {
        title: 'Notificação local',
        body: `Parabéns, ${name}`,
        data: [],
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Notificações locais </Text>
      <Button title='Enviar notificação' onPress={handleNotificationLocal} />
    </View>
  );
}
