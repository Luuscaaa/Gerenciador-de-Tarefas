import { createStackNavigator } from "@react-navigation/stack"
import Login from "../pages/login"
import Home from "../pages/home"
import BottomRoutes from "./bottom.routes"


export default function Routes () {

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator 
            initialRouteName="Login" 
            screenOptions={{
                headerShown:false,
                cardStyle: {
                    backgroundColor: "#fff"
                }
        }}
        >
            <Stack.Screen 
                name="Login" 
                component={Login}
            />
            <Stack.Screen 
                name="BottomRoutes" 
                component={BottomRoutes}
            />
        </Stack.Navigator>
    )
}