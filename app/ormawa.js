import React from 'react';
import { Center, Heading, Image} from "@gluestack-ui/themed";
import { Header } from "../components";
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

const Ormawa = () => {
    return (
        <>
            <Header title={"Ormawa"} />
            <Center flex={1}>
                {/* Baris 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box>
                        <Link href="/bem">
                        <View style={{ alignItems: 'center' }}>
                            <Image
                            source={require('../assets/logobem.png')} // Gantilah dengan path gambar Anda
                            style={{ width: 75, height: 75, resizeMode: 'contain' }}
                            />
                            <Heading mb="$1">BEM</Heading>
                        </View>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/dpm">
                        <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../assets/logodpm.png')} // Gantilah dengan path gambar Anda
                            style={{ width: 75, height: 75, resizeMode: 'contain' }}
                            />
                            <Heading mb="$1">DPM</Heading>
                        </View>
                        </Link>
                    </Box>
                    </View>

                    {/* Baris 2 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box>
                        <Link href="/hmsi">
                        <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../assets/logohmsi.png')} // Gantilah dengan path gambar Anda
                            style={{ width: 70, height: 70, resizeMode: 'contain' }}
                            />
                            <Heading mb="$1">HMSI</Heading>
                        </View>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/hmti">
                        <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../assets/logohmti.png')} // Gantilah dengan path gambar Anda
                            style={{ width: 75, height: 75, resizeMode: 'contain' }}
                            />
                            <Heading mb="$1">HMTI</Heading>
                        </View>
                        </Link>
                    </Box>
                </View>
            </Center>
        </>
    );
};


export default Ormawa;