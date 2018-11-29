import { AppRegistry } from 'react-native';
import "./ReactotronConfig";
import Reactotron from "reactotron-react-native";
import App from './src/App';


// if (__DEV__) {
//   console.disableYellowBox = true;
// }

console.tron = Reactotron;

AppRegistry.registerComponent('ReactNativeBoilerplate', () => App);
