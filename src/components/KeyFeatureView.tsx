import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropertyFeatureIcons, {
  PropertyFeatureIconGlyphs,
} from "@utilities/PropertyFeatureIcons";

interface KeyFeatureViewProps {
  label: string;
  count: number;
  showsLabel?: boolean;
  icon: PropertyFeatureIconGlyphs;
}

const KeyFeatureView: FunctionComponent<KeyFeatureViewProps> = ({
  label,
  count,
  icon,
  showsLabel,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      paddingLeft: 6,
    },
  });

  return (
    <View style={styles.container}>
      <PropertyFeatureIcons name={icon} size={18} />
      <Text style={styles.text}>
        {count} {showsLabel === false ? "" : label}
      </Text>
    </View>
  );
};

export default KeyFeatureView;
export { KeyFeatureView };
