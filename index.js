import { AppRegistry } from 'react-native';
import "./ReactotronConfig";
import Reactotron from "reactotron-react-native";
import App from './src/App';


// if u wanna disable yellow errors in simulator, uncomment
// if (__DEV__) {
//   console.disableYellowBox = true;
// }

//console.tron.log('blabla');
console.tron = Reactotron;

AppRegistry.registerComponent('ReactNativeBoilerplate', () => App);
