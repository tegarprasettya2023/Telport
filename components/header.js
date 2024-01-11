import { Box, Image, HStack, Heading, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, Link } from "expo-router";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const Header = ({ title, withBack = false, withClose = false }) => {
    const trueGray900 = "#800000";
    const navigation = useNavigation();
    const Notifications = () => {
        navigation.navigate("notifikasi");
    };
    const Login = () => {
        navigation.navigate("login");
    };


    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor={trueGray900} />
            <Box bg="$#800000" p="$2">
                <HStack justifyContent="space-between" alignItems="center">
                    <HStack>
                        {!withBack ? (
                            <>
                                <Image
                                    source={require("../assets/talent.png")}
                                    w="$10"
                                    h="$10"
                                    alt="Telpro Logo"
                                    mr={"$2"}
                                    role="img"
                                />
                            </>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.goBack()}
                            >
                                <Box mr={"$3"}>
                                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                                </Box>
                            </TouchableOpacity>
                        )}
                        <Heading color={"$white"}>{title}</Heading>
                    </HStack>
                    <HStack space={"2xl"} alignItems="center">
                        <TouchableOpacity>
                            <HStack>
                                <TouchableOpacity onPress={Notifications}>
                                    <Ionicons name="notifications" size={32} color="white" />
                                </TouchableOpacity>
                                {/* <TouchableOpacity onPress={Login}>
                                    <Ionicons name="person" size={32} color="white" />
                                </TouchableOpacity> */}
                            </HStack>
                        </TouchableOpacity>
                    </HStack>
                </HStack>
            </Box>
        </SafeAreaView>
    );
};

export default Header;