import { Box, Image, HStack, Heading, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, Link } from "expo-router";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { clearStorage, getData } from "../utils";
import FIREBASE from "../config/FIREBASE";

const AdminHeader = ({ title, withBack = false, withClose = false }) => {
    const trueGray900 = "#800000";
    const navigation = useNavigation();

    const Login = () => {
        navigation.navigate("login");
    };

    const onSubmit = (profile) => {
        if (profile) {
          FIREBASE.auth()
            .signOut()
            .then(() => {
              // Sign-out successful.
              clearStorage();
              navigation.replace("login");
            })
            .catch((error) => {
              // An error happened.
              alert(error);
            });
        } else {
          navigation.replace("Login");
        }
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
                        <Heading fontSize={20} mt={6} color={"$white"}>{title}</Heading>
                    </HStack>
                    <HStack space={"2xl"} alignItems="center" mr={10}>
                        <TouchableOpacity >
                            <HStack>
                                <TouchableOpacity onPress={onSubmit}>
                                    <Ionicons name="log-out-outline" size={32} color="white" />
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

export default AdminHeader;