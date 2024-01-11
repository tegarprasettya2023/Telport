import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@gluestack-ui/themed"
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from "../../components";
import { clearStorage, getData } from "../../utils";
import FIREBASE from "../../config/FIREBASE";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

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


  const EditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <>
      <Header title={"Profile"} />
      <ScrollView>
        <Box flex={1} bgColor='#fffff' alignItems='center'>
          <Box flex={1} alignItems="center">
          <Heading color="black" fontSize={30} marginTop={20}>{profile?.nama}</Heading>
          <Ionicons name="person-circle-outline" size={200} color="#800000" />
          </Box>
          <Box flex={2} marginTop={35} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} bg="$#800000" >
            <Box borderRadius={10} width={"15%"} height={4} bg="white" alignSelf="center" marginTop={20}></Box>
            <HStack justifyContent="space-between" mx={20}>
              <Box></Box>
              <Pressable onPress={EditProfile}>
                <Icon name="account-edit" size={50} color="#ffffff" />
              </Pressable>
            </HStack>
            <Box marginTop={-20} >
              <VStack marginStart={20} marginTop={25}>
                <Heading color="white" fontWeight="bold">Email saya :</Heading>
                <Text color="white" fontSize={15}>{profile?.email}</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
                <Heading color="white" fontWeight="bold" fontSize={20}>NIM :</Heading>
                  <Text color="white" fontSize={15}>{profile?.nim}</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
                <Heading color="white" fontWeight="bold" fontSize={20}>Prodi :</Heading>
                <Text color="white" fontSize={15}>{profile?.prodi}</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25} paddingBottom={20}>
                <Heading color="white" fontWeight="bold" fontSize={20}>Riwayat Kegiatan :</Heading>
                <Text color="white" fontSize={15}>{profile?.kegiatan}</Text>
               
              <Button alignSelf={"center"} onPress={() => onSubmit(profile)} bg={"#ffff"} mt={3} w={"90%"} h={50} rounded={10} marginTop={20} >
              <Heading color={"red"} fontSize={20}>Keluar</Heading>
              </Button>
              </VStack>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  )
}

export default Profile;