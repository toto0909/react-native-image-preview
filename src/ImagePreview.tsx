import { View, Image, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface ImagePreviewProps {
  images: { uri: string }[];
  visible: boolean;
  onClose: () => void;
}

export const ImagePreview = ({ images, visible, onClose }: ImagePreviewProps) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <Image source={images[0]} style={styles.image} resizeMode="contain" />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '80%',
  },
});
