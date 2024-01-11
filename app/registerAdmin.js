import React, { useState, useEffect } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal,
  ButtonIcon, Center, View, Image, HStack, Divider,
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { useNavigation, Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loginAdmin } from "../actions/AuthAction"



const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const login = () => {
    if (email && password) {
      loginAdmin(email, password)
        .then((admin) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.replace("kepanitiaan");
        })
        .catch((error) => {
          // Terjadi kesalahan saat login, tampilkan pesan kesalahan
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    }
  };


  const navigation = useNavigation();
  const Register = () => {
    navigation.navigate("registerAdmin");
  };
  return (
    <>
      <Box
        w={"90%"}
        h={"80%"}
        mt={80}
        borderRadius={10}
        alignSelf="center"
        borderWidth={2}
        borderColor="gray"
        alignContent="$center"
        justifyContent="$center">
        <Box alignItems="center"   >
          <Image role="img" alt="hello" w={117} h={121} mb={1} source={require('../assets/logotelport.png')} />
        </Box>
        <FormControl
          p="$4"
          borderRadius="$lg"
          borderColor="$borderLight300"
          sx={{
            _dark: {
              borderWidth: "$1",
              borderRadius: "$lg",
              borderColor: "$borderDark800",
            },
          }}
        >

          <VStack space="xl" mt={10}>
            <Center>
              <Heading color="black" lineHeight="$2xl">
                Login sebagai Admin
              </Heading>
            </Center>
            <Text color="black" lineHeight="$xs"> Nama</Text>
            <VStack space="md" marginTop={1}>
              <Input
                borderBottomWidth={3}
                borderEndWidth={3}
                borderTopWidth={1}
                borderStartWidth={1}
                rounded={7}
                marginBottom={5}
                borderColor='#021C35'
              >
                <InputField type="text" placeholder="Ketikan nama" value={nama}
                  onChangeText={(nama) => setNama(nama)} />
              </Input>
            </VStack>
            <Text color="black" lineHeight="$xs"> Email</Text>
            <VStack space="md" marginTop={1}>
              <Input
                borderBottomWidth={3}
                borderEndWidth={3}
                borderTopWidth={1}
                borderStartWidth={1}
                rounded={7}
                marginBottom={5}
                borderColor='#021C35'
              >
                <InputField value={email} type="text" placeholder="Masukkan Email" onChangeText={(value) => setEmail(value)} />
              </Input>
            </VStack>
            <Text color="black" lineHeight="$xs">Password</Text>
            <VStack space="md">
              <Input
                borderBottomWidth={3}
                borderEndWidth={3}
                borderTopWidth={1}
                borderStartWidth={1}
                rounded={7}
                borderColor='#021C35'>
                <InputField type={showPassword ? "text" : "password"} onChangeText={(text) => setPassword(text)} // Set password ke dalam state
                  value={password}
                />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color={'blue'}
                  />
                </InputSlot>
              </Input>
            </VStack>
            <Button onPress={Register} action="negative" mt={10} >
              <Text bold color="white">Register</Text>
            </Button>

            {/* <Link style={{ backgroundColor: "black", width: "100%", height: "15%" }} href="/home">
              <Center>
                <Text style={{ color: "white", width: "100%", height: "40px", justifyContent: "center" }}>Login</Text>
              </Center>
            </Link> */}

          </VStack>
          <Separator height={10} />
          {/* <Button size="md" variant="solid" action="negative" isDisabled={false} isFocusVisible={false} >
            <Link href="/register">
              <ButtonText>Register</ButtonText>
            </Link>
            <ButtonIcon />
          </Button> */}
        </FormControl>
      </Box>
    </>
  );
};

export default Register;