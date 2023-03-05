import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function Icons() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Icones na aplicação </Text>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          backgroundColor: '#9c6de3',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SimpleLineIcons name='magnifier' size={20} color='#fff' />
        <Text style={{ color: '#fff' }}> Lupa </Text>
      </View>
      <View
        style={{
          height: 60,
          borderRadius: 10,
          backgroundColor: '#9c6de3',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <AntDesign name='plus' size={20} color='#fff' />
        <Text style={{ color: '#fff' }}> Adcionar </Text>
      </View>
    </View>
  );
}
