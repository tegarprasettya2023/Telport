import React from "react";
import { Box, ScrollView, Text, Image } from "@gluestack-ui/themed";
import { Header } from "../components";

const UKKI = () => {
    return (
        <ScrollView>
            <Header title={"UKKI"} />
            <Box paddingHorizontal={10} paddingVertical={20} backgroundColor="#eeeeee">
                <Text fontSize={23} fontWeight="bold">
                    UKKI Al-Habsyi Institut Teknologi Telkom Surabaya
                </Text>
            </Box>
            <Box padding={10}>
                <Image
                    source={{
                        uri: "https://instagram.fsub21-1.fna.fbcdn.net/v/t51.2885-19/71179755_465844264142605_793319075622158336_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsub21-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0_8NHnovB70AX_KlryZ&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfBp5jpWvoHB1l3DZY30LXjMpB-KKjcYr_k89Hz8X0BQYg&oe=65568816&_nc_sid=94fea1",
                    }}
                    height={200}
                    width={500}
                />
                <Box height={10} />
                <Text>
                    <Text fontWeight="bold">Tentang</Text> -
                    Unit Kegiatan Kerohanian Islam (UKKI) Al-Habsyi merupakan suatu organisasi kemahasiswaan yang bergerak di bidang kerohanian Islam, berfungsi
                    sebagai wadah untuk mengembangkan serta mensyiarkan agama Islam kepada seluruh warga ITTelkom Surabaya.

                </Text>
                <Box height={10} />
                <Text>
                    <Text fontWeight="bold">Visi Misi</Text> - UKKI memiliki visi dan misi yang ditujukan untuk keberlangsungan serta kemajuan organisasi.

                </Text>
                <Text>
                    <Text fontWeight="bold">Visi :</Text> 
                </Text>
                <Text>
                Menjadikan UKKI Al-Habsyi ITTelkom Surabaya sebagai pusat dakwah kampus demi terwujudnya kader yang memiliki akiah lurus, akhlak mulia, intelektual,
                serta berjiwa sosial dan kepemimpinan yang berpedoman pada Al-Qur'an dan Hadits.
                </Text>
                <Text>
                    <Text fontWeight="bold">Misi :</Text> 
                </Text>
                <Text>
                1. Mengkader mahasiswa ITTelkom Surabaya menjadi insan yang beriman, bertaqwa, berintelektual tinggi, berloyalitas serta menjadi pelopor dalam 
                Amar Ma'ruf Nahi Munkar.
                </Text>
                <Text>
                2. Mengoptimalkan penggunaan syiar media dalam memberikan informasi mengenai program dakwah UKKI di lingkup internal maupun
                eksternal kampus.
                </Text>
                <Text>
                3. Menjalin Silaturahmi dan kerjasama dengan berbagai pihak pengurus dan ekstra kampus dalam pelaksanaan program kerja agar tercipta Ukhuwah Islamiyah. 
                </Text>
                <Text>
                4. Meningkatkan sinergitas warga kampus guna menghidupkan dan memakmurkan masjid kampus sebagai pusat dakwah UKKI Al-Habsyi.
                </Text>
                <Text>
                5. Pro akif dan edukatif dalam menanggapi isu - isu kemanusiaan.
                </Text>
                <Text>
                6. Pemantapan program pembinaan guna mewujudkan kader yang beraqidah lurus dan memiliki semangat dakwah.
                </Text>
                <Text>
                7. Peningkatan edukasi, leadership dan soft skill guna mewujudkan kader yang  intelektual dan jiwa kepemimpinan yang tinggi.
                </Text>
                <Box height={10} />
                <Text>
                    <Text fontWeight="bold">Departemen</Text> - Departemen yang ada di dalam UKKI Al-Habsyi yaitu Departemen Pengembangan Sumber Daya Manusia (PSDM) dan Departemen 
                    Syiar. Departemen PSDM sendiri memiliki bidang dibawahnya yaitu Bidang Pelatihan, Bidang Pembinaan dan Bidang Minat Bakat.
                    Sedangkan Departemen Syiar memiliki bidang dibawahnya yaitu Bidang Kajian, Bidang Islamic Softskill Development dan Bidang Media.

                </Text>
                <Box height={10} />
                <Text>
                    <Text fontWeight="bold">Sosial Media</Text> - Kunjungi Sosial Media UKKI Al-Habsyi 

                </Text>
                <Text>
                instagram : https://www.instagram.com/ukki.ittelkomsby/
                </Text>
                <Text>
                Youtube : https://www.youtube.com/@ukki.ittelkomsby1704
                </Text>
            </Box>
        </ScrollView>
    );
};

export default UKKI;
