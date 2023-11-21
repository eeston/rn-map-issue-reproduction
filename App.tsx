import { Text, Modal, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {

  // toggle this to show/hide the modal & reproduce the issue
  const showOverlay = true;

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={showOverlay}>
        <Text style={styles.loadingOverlay}>
          Modal causing slow map render...
        </Text>
      </Modal>
      <MapView
        initialRegion={{
          latitude: 57,
          longitude: -4,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
        mapType="terrain"
        provider="google"
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loadingOverlay: {
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
    width: 100,
    height: 100,
    zIndex: 100,
  },
});
