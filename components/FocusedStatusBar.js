import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

// props includes the background colour which we passed in Home.js
const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused(); // tells us if the status bar is currently in focus

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
