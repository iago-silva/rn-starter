import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreem from "./src/screens/ComponentsScreem"
import ListScreem from "./src/screens/ListScreem"
import ImageScreem from "./src/screens/ImageScreem"
import CounterScreem from "./src/screens/CounterScreem"
import ColorScreem from "./src/screens/ColorScreem"
import SquareScreem from "./src/screens/SquareScreem"
import TextScreem from "./src/screens/TextScreem"
import BoxScreem from "./src/screens/BoxScreem"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreem,
    List: ListScreem,
    Image: ImageScreem,
    Counter: CounterScreem,
    Color: ColorScreem,
    Square: SquareScreem,
    Text: TextScreem,
    Box: BoxScreem
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
