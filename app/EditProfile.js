import React, { useState, useEffect } from "react";
import { Alert } from 'react-native';
import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack, Input, InputField, TouchableOpacity, } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getData, storeData } from '../utils/localStorage';
import { Header } from "../components";
import Separator from "../components/separator";
import { editProfile } from "../actions/AuthAction";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = ({ route }) => {

  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    nama: '',
    kegiatan: '',
  });

  // KODE UNTUK MENDAPATKAN DATA USER
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      if (data) {
        setProfile(data);
      }
    });
  }, []);


  return (
    <>
      <Header title={"Edit Profile"} withBack="true" />
      <ScrollView>
        <Box flex={1} bgColor='#fffff' alignItems='center'>
          <Box flex={1} alignItems="center">
            <Heading color="black" fontSize={30} marginTop={20}>{profile?.nama}</Heading>
            <Ionicons name="person-circle-outline" size={200} color="#800000" />
          </Box>
          <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} bg="$#800000" >
            <Box borderRadius={10} width={"15%"} height={4} bg="white" alignSelf="center" marginTop={20}></Box>
            <HStack justifyContent="space-between" mx={20}>
              <Box></Box>
            </HStack>
            <Box marginTop={25} paddingBottom={80}>

              <VStack marginTop={20}>
                <Heading ml={20} color="white" fontWeight="bold">Nama :</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}

                >
                  <InputField placeholder="Masukan Nama Baru" value={profile.nama} onChangeText={(text) => setProfile({ ...profile, nama: text })} />
                </Input>
              </VStack>
              <VStack marginTop={20} paddingBottom={20}>
                <Heading ml={20} color="white" fontWeight="bold">Riwayat Kegiatan:</Heading>
                <Input
                  alignSelf="center"
                  marginTop={20}
                  borderWidth={0}
                  backgroundColor="#f3f3f3"
                  rounded={10}
                  w={"90%"}
                >
                  <InputField placeholder="Ubah Riwayat Kegiatan terbaru" value={profile.kegiatan} onChangeText={(text) => setProfile({ ...profile, kegiatan: text })} />
                </Input>

                <Button alignSelf={"center"} onPress={async () => {
                  await editProfile(profile);
                  navigation.goBack();
                }} bg={"#ffff"} mt={3} w={"90%"} h={50} rounded={10} marginTop={100} >
                  <Heading color={"green"} fontSize={20}>Save</Heading>
                </Button>
              </VStack>
            </Box>
          </Box>
        </Box>
      </ScrollView >
    </>
  );
}

export default EditProfile;
