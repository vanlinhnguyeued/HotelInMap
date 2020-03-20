import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListHomeStayActivity, HomeActivity, DetailsItemActivity } from './data/screenNames';
import MapActivity from './components/MapView/MapActivity';
import ListHomestay from './components/ListView/ListHomestay';
import DetailsActivity from './components/Details/DetailsActivity'

const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HomeActivity} screenOptions={{headerShown: false}}>
                <Stack.Screen name={HomeActivity} component={MapActivity} />
                <Stack.Screen name={ListHomeStayActivity} component={ListHomestay} />
                <Stack.Screen name={DetailsItemActivity} component={DetailsActivity} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;