import { Platform, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  // const region= {}
  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      className="w-full h-full rounded-2xl"
      provider={PROVIDER_DEFAULT}
      tintColor="black"
      mapType={Platform.OS === "ios" ? "mutedStandard" : "standard"}
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
