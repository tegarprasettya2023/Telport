import React, { useState, useEffect } from "react";
import { Text, Image, Box, VStack, HStack, Heading, ScrollView, Input, InputField, Button,  Select, SelectBackdrop, SelectContent, SelectTrigger, SelectDragIndicator, SelectItem, SelectInput, SelectIcon, Icon, SelectPortal, SelectDragIndicatorWrapper, Pressable } from "@gluestack-ui/themed";
import { AdminHeader } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import FIREBASE from "../../config/FIREBASE";
import { useNavigation } from "@react-navigation/native";


const AdminHome = () => {
    const navigation = useNavigation();
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        // Fetch data from Firebase
        const postersRef = FIREBASE.database().ref('posters');
        postersRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const postersArray = Object.values(data);
                setPosters(postersArray);
            } else {
                setPosters([]); // Set to an empty array if no data is available
            }
        });

        // Clean up the listener when the component unmounts
        return () => {
            postersRef.off('value');
        };
    }, []);

    const handleDelete = (posterId) => {
        const posterRef = FIREBASE.database().ref(`posters/${posterId}`);
        posterRef.remove()
            .then(() => {
                console.log("Poster deleted successfully");
            })
            .catch((error) => {
                console.error("Error deleting poster:", error);
            });
    };

    const AdminEdit = (posterId) => {
        navigation.navigate('AdminEdit', { posterId: posterId });
    };

    const AdminDetailPoster = (poster) => {
        navigation.navigate('AdminDetailPoster', { poster });
    };

    return (
        <>
            <AdminHeader title={"ADMIN"} />
            <ScrollView>
                <Heading alignSelf="center" my={10}>DAFTAR KONTEN POSTER</Heading>
                {posters.length > 0 ? (
                    posters.map((poster) => (
                        <Pressable key={poster.posterId}
                            borderWidth={2}
                            h={130}
                            w={"90%"}
                            alignSelf="center"
                            borderRadius={10}
                            mb={10}
                            onPress={() => AdminDetailPoster(poster)}>
                            <VStack>
                                <Box mt={"4%"} ml={"5%"}>
                                    <HStack>
                                        <Image role="img" mt={10} alt="hello" w={63} h={65} mb={1} source={{ uri: poster.imageUrl }} />
                                        <VStack ml={30} mt={-10}>
                                            <Heading>{poster.category}</Heading>
                                            <Text>{poster.deadline}</Text>
                                            <Text mt={5}>Admin: {poster.user?.nama}</Text>
                                            <HStack mt={5}>
                                                <Button bg="green" onPress={() => AdminEdit(poster.posterId)}>
                                                    <Ionicons name="pencil" size={25} color="white" />
                                                </Button>
                                                <Button ml={5} bg="red" onPress={() => handleDelete(poster.posterId)}>
                                                    <Ionicons name="trash" size={25} color="white" />
                                                </Button>
                                            </HStack>
                                        </VStack>
                                    </HStack>
                                </Box>
                            </VStack>
                        </Pressable>
                    ))
                ) : (
                    <Text alignSelf="center">Belum ada poster yang ditambahkan</Text>
                )}
                <Box h={"14%"} mb={20}></Box>
            </ScrollView>
        </>
    );
};

export default AdminHome;
