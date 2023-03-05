import { FlatList } from 'react-native';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';

const DATA = [
  {
    id: '1',
    name: 'Listas',
    routeName: 'Lists',
  },
  {
    id: '2',
    name: 'Icones',
    routeName: 'Icons',
  },
  {
    id: '3',
    name: 'Lottie',
    routeName: 'Lottie',
  },
  {
    id: '4',
    name: 'Animações',
    routeName: 'Animation',
  },
  {
    id: '5',
    name: 'Imagens',
    routeName: 'Images',
  },
  {
    id: '6',
    name: 'Notificações',
    routeName: 'Notifications',
  },
];

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, paddingVertical: 30 }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
        translucent
      />
      <Header color={'red'} />
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigate(item.routeName);
              }}
              style={{
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
                backgroundColor: '#9c6de3',
                borderRadius: 10,
                marginTop: 5,
              }}
            >
              <Text style={{ color: '#fff' }}> {item.name} </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
