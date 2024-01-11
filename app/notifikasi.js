import { VStack, Text, FlatList } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
import { Header } from '../components';


const NotificationScreen = () => {
  const navigation = useNavigation();
  const dummyNotifications = [
    { id: '1', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! IKUTI Lomba Desain Poster hanya sampai 2 November 2023 ' },
    { id: '2', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Open Recruitment Panitia PKKMB hanya sampai 7 Agustus 2023.' },
    { id: '3', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! IKUTI Seminar hanya sampai 12 Agustus 2023.' },
    { id: '4', title: 'Pengingat', message: 'JANGAN TELAT DAFTAR! Open Recruitment UKM ECITTS hanya sampai 1 Januari 2024.' },
  ];

  const renderNotificationItem = ({ item }) => (
    <VStack marginBottom={16} padding={16} borderRadius={8} backgroundColor="#e0e0e0">
      <Text fontSize={18} fontWeight="bold" marginBottom={8}>{item.title}</Text>
      <Text fontSize={16} color="gray">{item.message}</Text>
    </VStack>
  );



  return (
    <>
    <Header title={"Notifikasi"} withBack="true" />
 
    <VStack flex={1} padding={16}>
      <Text fontSize={24} fontWeight="bold" marginBottom={16}>Notifikasi</Text>
      <FlatList
        data={dummyNotifications}
        keyExtractor={item => item.id}
        renderItem={renderNotificationItem}
      />
    </VStack>
 
    </>
  );
  }

export default NotificationScreen;