import React, { useState, useEffect } from "react";
import { Text, Image, Box, VStack, HStack, Heading, Input, InputField, Button, ScrollView, Select, SelectBackdrop, SelectContent, SelectTrigger, SelectDragIndicator, SelectItem, SelectInput, SelectIcon, Icon, SelectPortal, SelectDragIndicatorWrapper, } from "@gluestack-ui/themed";
import { AdminHeader } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import FIREBASE from "../../config/FIREBASE";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const AdminAdd = () => {
    const [image, setImage] = useState(null);
    const [selectedCategory, setSelectedcategory] = useState('');
    const [Poster, setPoster] = useState('');
    const [deadline, setDeadline] = useState("");
    const [contact, setContact] = useState("");
    const [link, setLink] = useState("");
    const [socialmedia, setSocialmedia] = useState("");

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false, // Disable cropping
                aspect: [4, 3],
                quality: 1,
            });

            console.log(result);
            if (!result.canceled && result.assets && result.assets[0]) {
                const fileNameArray = result.assets[0].uri.split('/');
                setPoster(fileNameArray[fileNameArray.length - 1]);
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error('Error during image picking:', error);
            Alert.alert("Error", "Terjadi kesalahan saat memilih gambar");
        }
    };

    const uploadToFirebase = async () => {
        try {
            // Validation for required fields
            if (!Poster || !deadline || !contact || !link || !socialmedia || !selectedCategory || !image) {
                Alert.alert("Peringatan", "Harap isi semua informasi");
                return;
            }
            const
                user = await AsyncStorage.getItem("admin");
            const userData = JSON.parse(user);


            // Assuming you have a 'posters' node in your database
            const postersRef = FIREBASE.database().ref('posters');

            // Create a new unique key for the poster
            const id = postersRef.push().key;

            // Declare storage references
            const storageRef = FIREBASE.storage().ref();
            const imageRef = storageRef.child(`posters/${id}`); // Use the same id generated for Realtime Database

            // Convert image to blob
            const response = await fetch(image);
            const blob = await response.blob();

            // Upload image to Firebase Storage
            await imageRef.put(blob);

            // Get the image download URL
            const downloadURL = await imageRef.getDownloadURL();

            // Push the poster data to the database
            await postersRef.child(id).set({
                posterId: id,
                category: selectedCategory,
                deadline,
                contact,
                link,
                socialmedia,
                imageUrl: downloadURL,
                timestamp: new Date().toLocaleString('id-ID', {
                    timeZone: 'Asia/Jakarta',
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                }),
                user: userData,
            });

            Alert.alert("Sukses", "Poster berhasil ditambahkan");

            // Reset the form fields after successful submission
            setPoster('');
            setDeadline('');
            setContact('');
            setLink('');
            setSocialmedia('');
            setSelectedcategory('');
            setImage(null);
        } catch (error) {
            console.error('Error during upload to Firebase:', error);
            Alert.alert("Error", "Terjadi kesalahan saat mengunggah poster");
        }
    };

    return (
        <>
            <AdminHeader title={"TAMBAH POSTER"} />
            <ScrollView>
                <Box w={"90%"} h={"80%"} alignSelf="center" mt={20}>
                    <Image alignSelf="center" role="img" mt={10} alt="hello" w={200} h={200} mb={1} source={require('../../assets/posteradd.png')} />
                    <Heading alignSelf="center" fontSize={20} mt={15}> MASUKAN INFORMASI POSTER</Heading>
                    <Select>
                        <SelectTrigger variant="underlined" size="md" borderColor="red">
                            <SelectInput placeholder="Pilih Kategori" value={selectedCategory} />
                            <SelectIcon mr="$3">
                                <Ionicons name="pencil" size={25} color="white" />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="ORMAWA" value="ORMAWA" onPress={() => setSelectedcategory("ORMAWA")} />
                                <SelectItem label="UKM" value="UKM" onPress={() => setSelectedcategory("UKM")} />
                                <SelectItem
                                    label="LOMBA"
                                    value="LOMBA"
                                    onPress={() => setSelectedcategory("LOMBA")}
                                />
                                <SelectItem label="KEPANITIAAN" value="KEPANITIAAN" onPress={() => setSelectedcategory("KEPANITIAAN")} />
                                <SelectItem label="SEMINAR" value="SEMINAR" onPress={() => setSelectedcategory("SEMINAR")} />
                                <SelectItem label="PENILITIAN" value="PENILITIAN" onPress={() => setSelectedcategory("PENELITIAN")} />
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                    <VStack alignSelf="center" mt={10}>

                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Deadline" onChangeText={(text) => setDeadline(text)} value={deadline} />
                        </Input>
                    </VStack>
                    <VStack alignSelf="center" mt={10}>
                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Contact" onChangeText={(text) => setContact(text)} value={contact} />
                        </Input>
                    </VStack>
                    <VStack alignSelf="center" mt={10}>
                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Link" onChangeText={(text) => setLink(text)} value={link} />
                        </Input>
                    </VStack>
                    <VStack alignSelf="center" mt={10}>
                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                        >
                            <InputField type="text" placeholder="Masukan Social Media" onChangeText={(text) => setSocialmedia(text)} value={socialmedia} />
                        </Input>
                    </VStack>
                    <VStack alignSelf="center" mt={10}>
                        <Input
                            variant="underlined"
                            borderColor="red"
                            w={"100%"}
                            isDisabled={true}
                        >
                            <InputField type="text" placeholder="Masukan Gambar" value={Poster} />
                        </Input>
                    </VStack>
                    <Button mt={20} bg={"$green400"} onPress={pickImage}>
                        <HStack>
                            <Ionicons name="cloud-upload-outline" size={25} color="black" />
                            <Text ml={10} mt={4} fontSize={17} bold color="black">Unggah Poster</Text>
                        </HStack>

                    </Button>
                    <Button mt={20} bg={"$blue400"} onPress={uploadToFirebase}>
                        <Text bold color="black"> Tambah Poster</Text>
                    </Button>
                </Box>
            </ScrollView>
        </>
    )
}

export default AdminAdd;