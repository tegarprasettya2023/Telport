import { Tabs } from "expo-router/tabs";
import { Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    switch (route.name) {
                        case "AdminHome":
                            iconName = "home-outline";
                            break;
                        case "AdminAdd":
                            iconName = "add-circle-outline";
                            break;
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={28}
                            color={focused ? "black" : color}
                        />
                    );
                },
                tabBarIconStyle: { marginTop: 5 },
                tabBarStyle: {
                    height: 70,
                },
                tabBarLabel: ({ children, color, focused }) => {
                    return (
                        <Text mb="$2" color={focused ? "$black" : color} fontSize="$sm">
                            {children}
                        </Text>
                    );
                },
            })}
        >
            <Tabs.Screen name="AdminHome" options={{ title: "AdminHome", ...noHead }} />
            <Tabs.Screen name="AdminAdd" options={{ title: "AdminAdd", ...noHead }} />
            
        </Tabs>
    );
};

export default TabsLayout;
