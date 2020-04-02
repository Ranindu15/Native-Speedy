import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './Components/Screens/explore';
import Gallery from './Components/Screens/gallery';
import Profile from './Components/Screens/profile';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused}) =>{
          let iconName;
          let iconColor;
          if(route.name === 'Explore'){
            iconName = 'search';
            iconColor = focused? '#227093':'#34ace0';
          } else if(route.name === 'Gallery'){
            iconName = 'image';
            iconColor = focused? '#227093':'#34ace0';
          }else if(route.name === 'Profile'){
            iconName =  'user';
            iconColor = focused? '#227093':'#34ace0';
          }
          return <Icon name={iconName} size={20} color={iconColor}/>;
        },
      })}
      tabBarOptions={{activeTintColor:'black', inactiveTintColor:'blue'}}>
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}