import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

import PayScreen from './screens/PayScreen';
import BeneficiaryScreen from './screens/BeneficiaryScreen';
import HaveScreen from './screens/HaveScreen';
import AuthScreen from './screens/AuthScreen';
import HistoryScreen from './screens/HistoryScreen';
import UpcomingScreen from './screens/UpcomingScreen';
import MoreScreen from './screens/MoreScreen';

const PayStack = createStackNavigator({
  PayMain: PayScreen,
});

const PayTopNavigator = createMaterialTopTabNavigator({
  Payments: PayStack,
  History: HistoryScreen,
  Upcoming: UpcomingScreen
})

const TabNavigator = createBottomTabNavigator({
  More: MoreScreen,
  Pay: PayTopNavigator,
  Have: HaveScreen
});

const HomeStack = createStackNavigator({
  BottomTab: TabNavigator,
  Beneficiary: BeneficiaryScreen
})

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  Home: HomeStack 
}, 
{
  initialRouteName: 'Home'
})

let Navigation = createAppContainer(AppNavigator);
 export default Navigation;