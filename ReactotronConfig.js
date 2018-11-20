import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: "ReactNativeBoilerplate"
})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

  export default reactotron;