import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1209922Navigator from '../features/BlankScreen1209922/navigator';
import BlankScreen0209921Navigator from '../features/BlankScreen0209921/navigator';
import BlankScreen1209920Navigator from '../features/BlankScreen1209920/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1209922: { screen: BlankScreen1209922Navigator },
BlankScreen0209921: { screen: BlankScreen0209921Navigator },
BlankScreen1209920: { screen: BlankScreen1209920Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
