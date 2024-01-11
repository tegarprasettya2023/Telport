import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const noHead = { headerShown: false };

const StackLayout = () => {
    return (

        <GluestackUIProvider config={config}>

                <Stack initialRouteName="splash">
                    <Stack.Screen name="(tabs)" options={noHead} />
                    <Stack.Screen name="(AdminTabs)" options={noHead} />
                    <Stack.Screen name="kepanitiaan" options={noHead} />
                    <Stack.Screen name="lomba" options={noHead} />
                    <Stack.Screen name="ormawa" options={noHead} />
                    <Stack.Screen name="ukm" options={noHead} />
                    <Stack.Screen name="seminar" options={noHead} />
                    <Stack.Screen name="bem" options={noHead} />
                    <Stack.Screen name="hmsi" options={noHead} />
                    <Stack.Screen name="hmti" options={noHead} />
                    <Stack.Screen name="dpm" options={noHead} />
                    <Stack.Screen name="penelitian" options={noHead} />
                    <Stack.Screen name="login" options={noHead} />
                    <Stack.Screen name="register" options={noHead} />
                    <Stack.Screen name="EditProfile" options={noHead} />
                    <Stack.Screen name="notifikasi" options={noHead} />
                    <Stack.Screen name="splash" options={noHead} />
                    <Stack.Screen name="loginAdmin" options={noHead} />
                    <Stack.Screen name="registerAdmin" options={noHead} />
                    <Stack.Screen name="infoposter" options={noHead} />
                    <Stack.Screen name="AdminEdit" options={noHead} />
                    <Stack.Screen name="AdminDetailPoster" options={noHead} />
                </Stack>
            
        </GluestackUIProvider>

    );
};

export default StackLayout;
