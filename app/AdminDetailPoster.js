import { Box, ClockIcon, GlobeIcon, GripVerticalIcon, HStack, Image, Icon, ScrollView, Heading, LinkIcon, PhoneIcon, Text, VStack, Link, LinkText, } from "@gluestack-ui/themed";
import { AdminHeader } from "../components";
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';


const AdminDetailPoster = () => {
    const route = useRoute();
    const { poster } = route.params;
    return (
        <>
            <AdminHeader title={"DETAIL POSTER"} withBack />
            <ScrollView>
                <Box padding={10} borderBottomWidth={0.5}>
                    <Image height={500} width={500}
                        size="md" borderRadius="$none"
                        source={{ uri: poster.imageUrl }}
                        alt="image"
                    />
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={GripVerticalIcon} m="$2" w="$4" h="$4" />
                        <Text padding={5}> {poster.category}</Text>
                    </HStack>
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={ClockIcon} m="$2" w="$4" h="$4" />
                        <Text padding={5}>{poster.deadline}</Text>
                    </HStack>
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={PhoneIcon} m="$2" w="$4" h="$4" />
                        <Link href="whatsapp://send?text=Hallo saya mau mendaftar!&phone=+6282233894722">
                            <LinkText padding={5}>{poster.contact}</LinkText>
                        </Link>
                    </HStack>
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={LinkIcon} m="$2" w="$4" h="$4" />
                        <Link href="bit.ly/PKKMB2024">
                            <LinkText padding={5} onPress={() => Linking.openURL(poster.link)}>
                                {poster.link}
                            </LinkText>
                        </Link>
                    </HStack>
                </Box>
                <Box padding={10} borderBottomWidth={0.5}>
                    <HStack>
                        <Icon as={GlobeIcon} m="$2" w="$4" h="$4"></Icon>
                        <Link href="https://www.instagram.com/dewangkara.maetala/">
                            <LinkText padding={5} onPress={() => Linking.openURL(poster.socialmedia)}>
                                {poster.link}
                            </LinkText>
                        </Link>
                    </HStack>
                </Box>
            </ScrollView>
        </>
    )
}

export default AdminDetailPoster