import React, { useState, useEffect } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
  ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, Button, Box, setShowModal,
  ButtonIcon, Center, View, Alert, Modal, Image, ScrollView,
  ModalBackdrop,
  AlertText,
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import { registerUser } from "../actions/AuthAction"
import { useNavigation } from '@react-navigation/native';



const register = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nim, setNim] = useState("");
  const [prodi, setProdi] = useState("");
  const [kegiatan, setKegiatan] = useState("");
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

  const onRegister = async () => {
    if (email && nim && nama && prodi && password) {
      const data = {
        email: email,
        nim: nim,
        nama: nama,
        prodi: prodi,
        kegiatan: kegiatan,
        password: password,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("(tabs)");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };

  return (
    <>
      <ScrollView>
        <Box
          flex={1}
          alignContent="$center"
          justifyContent="$center">
          <FormControl
            p="$4"
            borderWidth="$1"
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
            <Box alignItems="center"  >
              <Image role="img" alt="hello" w={117} h={121} mb={10} source={require('../assets/logotelport.png')} />
            </Box>
            <VStack space="xl">
              <Center>
                <Heading color="#010203" lineHeight="$md" mb="$12">
                  Register
                </Heading>
              </Center>
              <VStack space="xs">
                <Text color="#010203" lineHeight="$xs">
                  Nama:
                </Text>
                <Input borderBottomWidth={3}
                  borderEndWidth={3}
                  borderTopWidth={1}
                  borderStartWidth={1}
                  rounded={7}
                  borderColor='#021C35' >
                  <InputField type="text" placeholder="Ketikan nama" value={nama}
                    onChangeText={(nama) => setNama(nama)} />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text color="#010203" lineHeight="$xs">
                  Nim:
                </Text>
                <Input borderBottomWidth={3}
                  borderEndWidth={3}
                  borderTopWidth={1}
                  borderStartWidth={1}
                  rounded={7}
                  borderColor='#021C35' >
                  <InputField type="text" placeholder="Ketikan nim" value={nim}
                    onChangeText={(nim) => setNim(nim)} />
                </Input >
                <Separator height={10} />
                <Text color="#010203" lineHeight="$xs">
                  Email:
                </Text>
                <Input borderBottomWidth={3}
                  borderEndWidth={3}
                  borderTopWidth={1}
                  borderStartWidth={1}
                  rounded={7}
                  borderColor='#021C35'>
                  <InputField type="text" placeholder="Ketikan email" value={email}
                    onChangeText={(email) => setEmail(email)} />
                </Input>
                <Separator height={10} />
                <Text color="#010203" lineHeight="$xs">
                  Prodi:
                </Text>
                <Input borderBottomWidth={3}
                  borderEndWidth={3}
                  borderTopWidth={1}
                  borderStartWidth={1}
                  rounded={7}
                  borderColor='#021C35' >
                  <InputField type="text" placeholder="Ketikan prodi" value={prodi}
                    onChangeText={(prodi) => setProdi(prodi)} />
                </Input>
                <Separator height={10} />
                <Text color="#010203" lineHeight="$xs">
                  Kegiatan yang pernah diikuti:
                </Text>
                <Input borderBottomWidth={3}
                  borderEndWidth={3}
                  borderTopWidth={1}
                  borderStartWidth={1}
                  rounded={7}
                  borderColor='#021C35'>
                  <InputField type="text" placeholder="Kegiatan kampus yang pernah diikuti" value={kegiatan}
                    onChangeText={(kegiatan) => setKegiatan(kegiatan)} />
                </Input>
                <Separator height={10} />
                <Text color="#010203" lineHeight="$xs">
                  Password:
                </Text>
                <Input borderBottomWidth={3}
                  borderEndWidth={3}
                  borderTopWidth={1}
                  borderStartWidth={1}
                  rounded={7}
                  borderColor='#021C35' >
                  <InputField type={showPassword ? "text" : "password"} placeholder="Ketikan password" value={password}
                    onChangeText={(password) => setPassword(password)} />
                  <InputSlot pr="$3" onPress={handleState}>
                    <InputIcon
                      as={showPassword ? EyeIcon : EyeOffIcon}
                      color="$darkBlue500"
                    />
                  </InputSlot>
                </Input>
              </VStack>

            </VStack>
            <Separator height={50} />
            <Button borderBottomWidth={3}
              borderEndWidth={3}
              borderTopWidth={1}
              borderStartWidth={2}
              rounded={7}
              bg="red"
              borderColor='#000000'
              onPress={() => {
                onRegister();
              }}>
              <Text color="white">Register</Text></Button>
          </FormControl>
        </Box>
      </ScrollView>
    </>
  );
};

export default register;