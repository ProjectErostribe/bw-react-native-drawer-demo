import { createDrawerNavigator } from 'react-navigation';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            {/* This is where the links to components would go.*/}
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;