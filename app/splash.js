import React, { useEffect } from 'react';
import { Box, Image } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../utils/localStorage';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const checkUserStatus = async () => {
            try {
                const userData = await getData('user');
                if (userData) {
                    // Jika user data ada, periksa status admin
                    const isAdmin = userData.status === 'admin';

                    if (isAdmin) {
                        navigation.replace('(AdminTabs)');
                    } else {
                        navigation.replace('(tabs)');
                    }
                } else {
                    navigation.replace('login');
                }
            } catch (error) {
                console.error('Error checking user status:', error);
                navigation.replace('login');
            }
        };

        // Periksa status user saat komponen di-mount
        checkUserStatus();
    }, [navigation]);

    return (
        <Box flex={1} justifyContent="center" alignItems="center" backgroundColor="white">
            <Box width="100%" height={250}>
                <Image
                    role='img'
                    alt='gambar'
                    resizeMode='contain'
                    flex={1}
                    width={'100%'}
                    height={'100%'}
                    source={require('../assets/logotelport.png')}
                />
            </Box>
        </Box>
    );
};

export default Splash;