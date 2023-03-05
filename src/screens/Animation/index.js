import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

export default function Animation() {
  const pulse = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(pulse.value, {
            easing: Easing.ease,
          }),
        },
      ],
    };
  });

  setInterval(() => {
    pulse.value = pulse.value === 1 ? 2 : 1;
  }, 500);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.Text style={animatedStyle}> Animações </Animated.Text>
    </View>
  );
}
