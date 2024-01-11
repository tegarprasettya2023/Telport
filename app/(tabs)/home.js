import React, { useState, useEffect } from "react";
import {
    FlatList,
} from "react-native";
import {
    Box,
    Image,
    Text,
    Pressable,
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    Heading,
    ModalCloseButton,
    Icon,
    CloseIcon,
    ModalBody,
    ModalFooter,
    Button,
    ButtonText,
    ScrollView
} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Link } from "expo-router";
import FIREBASE from "../../config/FIREBASE";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
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

    const renderItem = ({ item }) => {
        return (
            <Box>
                <Pressable
                    alignItems="center"
                    padding={10}
                    borderBottomColor="#800000"
                    borderBottomWidth={10}
                    onPress={() => {
                        setSelectedItem(item);
                        setShowModal(true);
                    }}
                >
                    <Box>
                        <Image source={{ uri: item.imageUrl }} alt="home" height={500} width={300} />
                        <Text fontSize={16} paddingTop={10}>
                            {item.category}
                        </Text>
                    </Box>
                </Pressable>
            </Box>
            
        );
    };

    const ModalComponent = ({ selectedItem, onClose, poster }) => {
        const navigation = useNavigation();
        
        const detailposter = () => {
            navigation.navigate('infoposter', { poster: selectedItem });
            onClose();
        };

        return (
            <Modal isOpen={showModal} onClose={onClose}>
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                        <Heading size="lg">{selectedItem.category}</Heading>
                        <ModalCloseButton onPress={onClose}>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <Image source={{ uri: selectedItem.imageUrl }} alt="home" height={500} width={300} />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="outline"
                            size="sm"
                            action="secondary"
                            mr="$3"
                            onPress={onClose}
                        >
                            <ButtonText>Cancel</ButtonText>
                        </Button>

                        <Button size="sm" action="positive" borderWidth="$0" onPress={detailposter}>
                            <ButtonText>Go</ButtonText>
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    };

    return (
        <Box>
            <ScrollView>
            <Header title={"Home"} />
            <FlatList
                data={posters}
                renderItem={renderItem}
                keyExtractor={(item) => item.posterId.toString()}
            />
            {selectedItem && (
                <ModalComponent selectedItem={selectedItem} onClose={() => setShowModal(false)} />
            )}
            </ScrollView>
        </Box>
    );
};

export default Home;
