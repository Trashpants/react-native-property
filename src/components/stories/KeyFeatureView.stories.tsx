import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { styles } from "@utilities/GlobalStyle";

import KeyFeatureView from "../KeyFeatureView";

storiesOf("KeyFeatureView", module)
  .addDecorator((story) => <View style={styles.storyContainer}>{story()}</View>)
  .add("Single Value", () => (
    <KeyFeatureView label="Bathroom" count={1} icon="bath" />
  ))
  .add("Multiple Value", () => (
    <KeyFeatureView label="Bathroom" count={4} icon="bath" />
  ))
  .add("Long Label", () => (
    <KeyFeatureView label="Really long label" count={4} icon="bath" />
  ))
  .add("Hides Label", () => (
    <KeyFeatureView label="Bathroom" count={2} icon="bath" showsLabel={false} />
  ))
  .add("Default Bath", () => (
    <KeyFeatureView label="Bathroom" count={6} icon="bath" />
  ))
  .add("Default Bed", () => (
    <KeyFeatureView label="Bedroom" count={3} icon="bed" />
  ))
  .add("Default Garage", () => (
    <KeyFeatureView label="Garage" count={2} icon="garage" />
  ))
  .add("Default Pools", () => (
    <KeyFeatureView label="Swimming Pool" count={6} icon="pool" />
  ))
  .add("Default Plot Size", () => (
    <KeyFeatureView label="264 sqm" count={6} icon="size" />
  ))
  .add("Default Sitting Room", () => (
    <KeyFeatureView label="Sitting Rooms" count={6} icon="sofa" />
  ));
