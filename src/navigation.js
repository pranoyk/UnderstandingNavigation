import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

import PayScreen from './screens/PayScreen';
import BeneficiaryScreen from './screens/BeneficiaryScreen';
import HaveScreen from './screens/HaveScreen';
import AuthScreen from './screens/AuthScreen';

const PayStack = createStackNavigator({
  PayMain: PayScreen,
});

const TabNavigator = createBottomTabNavigator({
  Pay: PayStack,
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