import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { styles } from "@utilities/GlobalStyle";
import KeyFeaturesList from "@components/KeyFeaturesList";

import { KeyFeatureViewProps } from "components/KeyFeatureView";

const featureList: KeyFeatureViewProps[] = [
  { label: "Baths", count: 2, icon: "bath", showsLabel: true },
  { label: "Beds", count: 4, icon: "bed", showsLabel: true },
  { label: "Garage", count: 1, icon: "garage", showsLabel: true },
  { label: "Indoor Pool", count: 1, icon: "pool", showsLabel: true },
  { label: "264 sqm", count: 2, icon: "size", showsLabel: true },
];

storiesOf("KeyFeatureList", module)
  .addDecorator((story) => <View style={styles.storyContainer}>{story()}</View>)
  .add("Default Layout", () => (
    <>
      <Text>List</Text>
      <KeyFeaturesList mode="list" features={featureList} />
      <Text>Grid</Text>
      <KeyFeaturesList mode="grid" features={featureList} />
    </>
  ));
