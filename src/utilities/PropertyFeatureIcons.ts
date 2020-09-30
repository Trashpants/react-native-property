import { createIconSet } from "@expo/vector-icons";

export type PropertyFeatureIconGlyphs =
  | "bath"
  | "bed"
  | "garage"
  | "pool"
  | "size"
  | "sofa";

const glyphMap = {
  bath: 59906,
  bed: 59907,
  garage: 59908,
  pool: 59909,
  size: 59910,
  sofa: 59911,
};
const PropertyFeatureIcons = createIconSet(
  glyphMap,
  "PropertyFeature",
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("@assets/fonts/PropertyFeature.ttf")
);

export default PropertyFeatureIcons;
export { PropertyFeatureIcons };
