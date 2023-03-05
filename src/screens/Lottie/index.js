import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Lottie() {
  return (
    <View style={{ flex: 1, paddingVertical: 60, alignItems: 'center' }}>
      <Text> Animação com Lottie </Text>
      <LottieView
        style={{ width: 200, height: 200 }}
        autoPlay
        source={require('../../../successful.json')}
      />
    </View>
  );
}
