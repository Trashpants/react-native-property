import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

import KeyFeatureView, { KeyFeatureViewProps } from "./KeyFeatureView";

interface KeyFeatureListProps {
  mode: "list" | "grid";
  features: KeyFeatureViewProps[];
}

const KeyFeaturesList: FunctionComponent<KeyFeatureListProps> = ({
  mode,
  features,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: mode === "grid" ? "wrap" : "nowrap",
      justifyContent: "flex-start",
    },
  });

  const moreFeatures: KeyFeatureViewProps = {
    label: "more",
    count: features.length - 2,
    icon: "bath",
  };
  const displayedFeatures =
    mode === "list" ? [...features.slice(0, 2), moreFeatures] : features;

  return (
    <View style={styles.container}>
      {displayedFeatures.map((e, index) => {
        return (
          <KeyFeatureView
            key={e.label + index}
            label={e.label}
            count={e.count}
            icon={e.icon}
            showsLabel={e.showsLabel}
          />
        );
      })}
    </View>
  );
};

export default KeyFeaturesList;
export { KeyFeaturesList };
