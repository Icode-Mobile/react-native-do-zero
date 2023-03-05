import { View, Text } from 'react-native';

import { styles } from './style';

export const Header = ({ color }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text style={styles.text}>Seja Bem vindo ao Curso</Text>
    </View>
  );
};
