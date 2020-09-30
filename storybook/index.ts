import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";

import { loadStories } from "./storyLoader";

import "./rn-addons";

// import stories
configure(() => {
  //require("../src/components/stories/KeyFeatureView.stories");
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  host: "127.0.0.1",
  port: 6006,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
