import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList23868Navigator from '../features/ArticleList23868/navigator';
import ArticleList23867Navigator from '../features/ArticleList23867/navigator';
import ArticleList23866Navigator from '../features/ArticleList23866/navigator';
import ArticleList23834Navigator from '../features/ArticleList23834/navigator';
import ArticleList23833Navigator from '../features/ArticleList23833/navigator';
import ArticleList23832Navigator from '../features/ArticleList23832/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList23868: { screen: ArticleList23868Navigator },
ArticleList23867: { screen: ArticleList23867Navigator },
ArticleList23866: { screen: ArticleList23866Navigator },
ArticleList23834: { screen: ArticleList23834Navigator },
ArticleList23833: { screen: ArticleList23833Navigator },
ArticleList23832: { screen: ArticleList23832Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
