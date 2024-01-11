import React from 'react';
import { Center, Heading, Text } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Link } from 'expo-router';

const Box = ({ children }) => {
    return (
        <View style={{
            width: '30%',
            height: '30%',
            aspectRatio: 1,
            backgroundColor: '#dcdcdc',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            margin: 30,
            borderRadius: 10,
            borderColor: '#dcdcdc',
            borderWidth: 2,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
        }}>
            {children}
        </View>
    );
};

const Kategori = () => {
    return (
        <>
            <Header title={"Kategori"} />
            <Center flex={1}>
                {/* Baris 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box>
                        <Link href="/ormawa">
                            <View style={{ alignItems: 'center' }}>
                            <Ionicons name="school-outline" size={40} color="black" />
                            <Heading mb="$1">ORMAWA</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/ukm">
                            <View style={{ alignItems: 'center' }}>
                            <Ionicons name="people-outline" size={40} color="black" />
                            <Heading mb="$1">UKM</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
        
                {/* Baris 2 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box>
                        <Link href="/lomba">
                            <View style={{ alignItems: 'center' }}>
                            <Ionicons name="trophy-outline" size={40} color="black" />
                            <Heading mb="$1">Lomba</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/kepanitiaan">
                            <View style={{ alignItems: 'center' }}>
                            <Ionicons name="briefcase-outline" size={40} color="black" />
                            <Heading mb="$1">Kepanitiaan</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
        
                {/* Baris 3 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box>
                        <Link href="/seminar">
                            <View style={{ alignItems: 'center' }}>
                            <Ionicons name="megaphone-outline" size={40} color="black" />
                            <Heading mb="$1">Seminar</Heading>
                            </View>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/penelitian">
                            <View style={{ alignItems: 'center' }}>
                            <Ionicons name="flask-outline" size={40} color="black" />
                            <Heading mb="$1">Penelitian</Heading>
                            </View>
                        </Link>
                    </Box>
                </View>
            </Center>
        </>
    );
};

export default Kategori;
