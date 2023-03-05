import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';

export default function Images() {
  const [image, setImage] = useState('https://github.com/Caio18-cosenza.png');

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Imagens </Text>
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }}
      />
      <TouchableOpacity onPress={handleImagePicker} style={{ marginTop: 20 }}>
        <Text> Escolher imagem </Text>
      </TouchableOpacity>
    </View>
  );
}
