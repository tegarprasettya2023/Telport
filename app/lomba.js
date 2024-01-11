import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";
import { Link } from "expo-router";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import Separator from "../components/separator";
import { Tabs } from "expo-router/tabs";


const Lomba = () => {
    return (
        <ScrollView>
        <Center>
        <View style={styles.content}>
        <Separator height={10} />
        <Heading>
            Lomba
        </Heading>
        <Separator height={10} />
        <Image
          source={{
            uri: "https://scontent-xsp1-3.cdninstagram.com/v/t51.2885-15/397536968_1598243730979677_5059249394304513035_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent-xsp1-3.cdninstagram.com&_nc_cat=109&_nc_ohc=WtsU6fMPEmMAX_wAKYI&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNzYwNzA0NTUyNjMwNjE3NQ%3D%3D.2-ccb7-5&oh=00_AfBMX9mJ8QLEnSXFaxTtkmj-5MLGIfbfOv34ngy2jh5qqQ&oe=65547E4B&_nc_sid=ee9879",
          }}
          style={styles.mainImage}
        />
        <Separator height={10} />
        <Text>
          <Text style={{ fontWeight: "bold" }}>Surabaya, Oktober 2022</Text> -
          Ada sebuah sebutan baru-baru ini yang kerap dilemparkan pada mereka
          yang lahir pada tahun 2000-an, generasi strawberi. Pelabelan ini
          dikarenakan generasi sebelumnya (Boomers dan X) menilai generasi muda
          lunak dan mudah terluka seperti buah strawberi.
        </Text>
        <Separator height={10} />
        <Image
          source={{
            uri: "https://scontent-xsp1-3.cdninstagram.com/v/t51.2885-15/397536968_1598243730979677_5059249394304513035_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent-xsp1-3.cdninstagram.com&_nc_cat=109&_nc_ohc=WtsU6fMPEmMAX_wAKYI&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNzYwNzA0NTUyNjMwNjE3NQ%3D%3D.2-ccb7-5&oh=00_AfBMX9mJ8QLEnSXFaxTtkmj-5MLGIfbfOv34ngy2jh5qqQ&oe=65547E4B&_nc_sid=ee9879",
          }}
          style={styles.mainImage}
        />
        <Separator height={10} />
        <Text>
          <Text style={{ fontWeight: "bold" }}>Surabaya, Oktober 2022</Text>
            <Text>Detail</Text>
            <Separator height={10} />   
            <Text>° Close Regist Sabtu, 4 November 2023 17:00 WIB</Text>
            <Separator height={10} />
            <Text>° Technical meeting Sabtu, 4 November 2023</Text>
            <Separator height={10} />
            <Text>° Match day start 19:30 WIB Sabtu, 4 November 2023</Text>
            <Text>° Tournament ini Khusus Mahasiswa ITTS (Free Regist)</Text>
            <Text>° Online Tournament</Text>
            <Text>° No Multi Slot, No Multi Team</Text>
            <Text>° Format Tournament Single Elimination (Sistem Gugur)</Text>

            Information
            ° System:
            1. Qualification Round : Sistem *Custom Classic Wajib Pick Hero Melisa - BO1*
            2. Semifinals - Bronze Match : Sistem *Custom Draft Pick Hero bebas - BO1*
            3. Final Match : Sistem *Custom Draft Pick Hero bebas - BO3*

            *Note
            - Jika Draft Pick Tim pada bagian atas bracket first pick (sebelah kiri), bawah second pick (sebelah kanan)*

            ° All tier
            ° Open Up To 8 Team

            Prizepool 6000 dm
            ° Juara 1 : 500 dm/player
            ° Juara 2 : 400 dm/player
            ° Juara 3 : 300 dm/player

            *Prizepool bisa berubah tergantung slot

            link pendaftaran:
            https://bit.ly/MelisaSLTSE

            Bronze dan Final Match live Youtube ITTS Esport

            CP:
            082234766193 (naufal)    
        </Text>
        <Text>
            
        </Text>
      </View>
      </Center>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  titleView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#eeeeee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainImage: {
    height: 220,
    resizeMode: "contain",
  },
  content: {
    padding: 15,
  },
});

export default Lomba;

