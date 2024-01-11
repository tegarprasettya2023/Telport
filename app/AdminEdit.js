import React, { useState, useEffect } from "react";
import { Text, Image, Box, VStack, HStack, Heading, Input, InputField, Button, ScrollView, Select, SelectBackdrop, SelectContent, SelectTrigger, SelectDragIndicator, SelectItem, SelectInput, SelectIcon, Icon, SelectPortal, SelectDragIndicatorWrapper, } from "@gluestack-ui/themed";
import { AdminHeader } from "../components";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import FIREBASE from "../config/FIREBASE";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AdminEdit = () => {
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [poster, setPoster] = useState(null);  // Updated state to hold existing poster data
    const [deadline, setDeadline] = useState("");
    const [contact, setContact] = useState("");
    const [link, setLink] = useState("");
    const [socialmedia, setSocialmedia] = useState("");
    const route = useRoute(); // Use useRoute hook to get the route object
    const { posterId } = route.params; // Destructure params from route

    useEffect(() => {
        const posterRef = FIREBASE.database().ref(`posters/${posterId}`);

        posterRef.on('value', (snapshot) => {
            const data = snapshot.val();
            setPoster(data);
            setSelectedCategory(data.category);
            setDeadline(data.deadline);
            setContact(data.contact);
            setLink(data.link);
            setSocialmedia(data.socialmedia);
            setImage(data.imageUrl);
        });

        return () => {
            posterRef.off('value');
        };
    }, [posterId]);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
            });

            console.log(result);
            if (!result.canceled && result.assets && result.assets[0]) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error('Error during image picking:', error);
            Alert.alert("Error", "Terjadi kesalahan saat memilih gambar");
        }
    };

    const submitChanges = async () => {
        try {
            const posterRef = FIREBASE.database().ref(`posters/${posterId}`);
            await posterRef.update({
                category: selectedCategory,
                deadline,
                contact,
                link,
                socialmedia,
                imageUrl: image, // Use the selected image URI
            });
    
            Alert.alert("Sukses", "Poster berhasil diupdate");
            navigation.navigate('AdminHome'); // Navigasi ke halaman home setelah berhasil mengedit
        } catch (error) {
            console.error('Error during submission:', error);
            Alert.alert("Error", "Terjadi kesalahan saat menyimpan perubahan");
        }
    };

    return (
        <>
            <AdminHeader title={"EDIT POSTER"} withBack/>
            <ScrollView>
                <Box w={"90%"} h={"80%"} alignSelf="center" mt={20}>
                    <Image alignSelf="center" role="img" mt={10} alt="hello" w={200} h={200} mb={1} source={require('../assets/posteradd.png')} />
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
                                <SelectItem label="ORMAWA" value="ORMAWA" onPress={() => setSelectedCategory("ORMAWA")} />
                                <SelectItem label="UKM" value="UKM" onPress={() => setSelectedCategory("UKM")} />
                                <SelectItem
                                    label="LOMBA"
                                    value="LOMBA"
                                    onPress={() => setSelectedCategory("LOMBA")}
                                />
                                <SelectItem label="KEPANITIAAN" value="KEPANITIAAN" onPress={() => setSelectedCategory("KEPANITIAAN")} />
                                <SelectItem label="SEMINAR" value="SEMINAR" onPress={() => setSelectedCategory("SEMINAR")} />
                                <SelectItem label="PENILITIAN" value="PENILITIAN" onPress={() => setSelectedCategory("PENELITIAN")} />
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
                            <InputField type="text" placeholder="Masukan Gambar" value={image} />
                        </Input>
                    </VStack>
                    <Button mt={20} bg={"$green400"} onPress={pickImage}>
                        <HStack>
                            <Ionicons name="cloud-upload-outline" size={25} color="black" />
                            <Text ml={10} mt={4} fontSize={17} bold color="black">Unggah Poster</Text>
                        </HStack>

                    </Button>
                    <Button mt={20} bg={"$blue400"} onPress={submitChanges}>
                        <Text bold color="black"> Edit Poster</Text>
                    </Button>
                </Box>
            </ScrollView>
        </>
    )
}

export default AdminEdit;
