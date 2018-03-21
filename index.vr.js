import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

export default class reactVRapp extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("chess-world.jpg")} />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            width: 2,
            alignItems: "stretch",
            transform: [{ translate: [-1, 1, -5] }]
          }}
        >
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: "red" }}>
            <Text style={{ fontSize: 0.2, textAlign: "center" }}>Red</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: "orange" }}>
            <Text style={{ fontSize: 0.2, textAlign: "center" }}>Orange</Text>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("reactVRapp", () => reactVRapp);
