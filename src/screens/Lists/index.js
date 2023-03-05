import { FlatList, View, Text } from 'react-native';

const DATA = [
  {
    id: '1',
    task: 'Fazer compras',
    done: false,
  },
  {
    id: '2',
    task: 'Ir para o shopping',
    done: true,
  },
  {
    id: '3',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '4',
    task: 'Ligar para o meu tio',
    done: false,
  },
  {
    id: '5',
    task: 'Ligar para o meu tio',
    done: false,
  },
  {
    id: '6',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '7',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '8',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '9',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '10',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '11',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '12',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '13',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '14',
    task: 'Passear com cachorro',
    done: true,
  },
  {
    id: '15',
    task: 'Passear com cachorro',
    done: true,
  },
];

export default function Lists() {
  return (
    <View style={{ flex: 1, paddingVertical: 60, paddingLeft: 10 }}>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: '80%',
              height: 40,
              borderWidth: 1,
              borderColor: item.done ? 'green' : 'red',
              marginVertical: 10,
            }}
          >
            <Text> {item.task} </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
