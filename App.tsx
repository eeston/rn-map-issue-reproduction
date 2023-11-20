import { useEffect, useState } from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const [mapReady, setMapReady] = useState<boolean>(false);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    if (mapReady && mapLoaded) {
      setShowLoading(false);
    }
  }, [mapReady, mapLoaded]);

  const onMapReady = () => {
    setMapReady(true);
  };
  const onMapLoaded = () => {
    setMapLoaded(true);
  };

  return (
    <View style={styles.container}>
      {/* 
        This overlay seems to cause the issue.
        If you comment it out, the map loads fine.
      */}
      <LoadingOverlay visible={showLoading} />
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
        onMapReady={onMapReady}
        onMapLoaded={onMapLoaded}
      />
    </View>
  );
}

const LoadingOverlay = ({ visible }: { visible: boolean }) => {
  return (
    <Modal transparent={true} animationType={"fade"} visible={!!visible}>
      <View style={styles.loadingOverlay}>
        <ActivityIndicator animating={true} color="black" />
      </View>
    </Modal>
  );
};

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
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
});
