import React from "react";
import { ScrollView, Image, Box, Text } from "@gluestack-ui/themed";
import { Header } from "../components";

const BEM = () => {
    return (
        <ScrollView>
            <Header title={"Profil HMSI"} />
            <Box paddingHorizontal={10} paddingVertical={20} backgroundColor="#eeeeee">
                <Text fontSize={23} fontWeight="bold">
                    Badan Eksekutif Mahasiswa Institut Teknologi Telkom Surabaya
                </Text>
            </Box>
            <Box padding={10}>
                <Image
                    source={{
                        uri: "https://instagram.fcgk37-2.fna.fbcdn.net/v/t51.2885-19/242927053_115756297516237_5869469486212388162_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk37-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=F2yKwbReHzsAX8_cerW&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCzwku-w94j8IY_NXwmM4_fZZ5g27Isn5a5X9d7cbW7Jg&oe=65546B2B&_nc_sid=ee9879",
                    }}
                    height={200}
                    width={500}
                />
                <Box height={10} />
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Sejarah</Text> -
                    Badan Eksekutif Mahasiswa (BEM) IT Telkom Surabaya telah memainkan peran integral dalam kehidupan kampus sejak didirikan. Dibentuk untuk mewakili suara dan kepentingan mahasiswa, BEM IT Telkom Surabaya menjadi wadah bagi aspirasi, ide, dan proyek kolaboratif yang bertujuan meningkatkan pengalaman belajar mahasiswa di lingkungan kampus. Seiring berjalannya waktu, BEM ini telah melibatkan diri dalam berbagai inisiatif, termasuk kegiatan sosial, advokasi mahasiswa, dan pengembangan soft skill. Sejarah panjang BEM IT Telkom Surabaya mencerminkan dedikasi dan semangat mahasiswa untuk menciptakan lingkungan kampus yang dinamis dan inklusif. Dengan melibatkan diri dalam berbagai proyek, acara, dan dialog dengan pihak universitas, BEM ini terus berkembang sejalan dengan perkembangan kebutuhan dan harapan mahasiswa di IT Telkom Surabaya.

                </Text>
                <Box height={10} />
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Visi Misi</Text> - Setiap tahun, HMSI 
                    membentuk kabinet baru yang mengemban visi dan misi khusus, menciptakan dinamika yang terus berkembang 
                    dalam peran dan tujuannya.  
                </Text>
                <Box height={10} />
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Visi :</Text> 
                </Text>
                <Text>
                Mewujudkan BEM ITTelkom Surabaya agar dapat membangun serta meningkatan kualitas mahasiswa ITTelkom Surabaya dan menjadikan BEM sebagai ruang aktualisasi untuk memfasilitasi kebutuhan dalam kegiatan baik itu akademik dan non akademik. Serta membangun hubungan yang harmonis antar organisasi agar terciptanya kerja sama dan kolaborasi yang baik untuk kedepannya.Membangun serta meningkatkan kualitas mahasiswa ITTelkom Surabaya
                </Text>
                <Box height={10} />
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Misi :</Text> 
                </Text>
                <Text>
                1. Transparansi sebagai nilai inti dari birokrasi di lingkup internal BEM KEMA ITTelkom Surabaya.
                </Text>
                <Text>
                2. Membangun Badan Eksekutif Mahasiswa yang lebih solid dan kontributif dalam menampung seluruh aspirasi mahasiswa kampus.
                </Text>
                <Text>
                3. Menjalin hubungan yang baik dengan organisasi di dalam atau luar kampus.
                </Text>
                <Text>
                4. Mampu mengayomi dan menjembatani semua permasalahan mahasiswa dengan kampus.
                </Text>
                <Text>
                5. Mewujudkan pengembangan minat dan bakat mahasiswa yang inspiratif dan kreatif.
                </Text>
                <Text>
                6. Menjadikan Himpunan Mahasiswa Sistem Informasi yang mandiri dalam pengadaan kegiatan namun 
                tidak meninggalkan tanggungjawab terhadap Institusi dan Mahasiswa
                </Text>
                <Box height={10} />
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Departemen</Text> -
                    <Text>
                1. PSDM: Bergerak dalam Kaderisasi dan Koordinasi Ormawa dan UKM Kampus sebagai wadah Pengembangan Sumber Daya Manusia
                </Text>
                <Text>
                2. ADKESMA: Memastikan kesejahteraan mahasiswa dan yang menjadi jembatan aspirasi dari mahasiswa kepada pihak dekanat
                </Text>
                <Text>
                3. HUBLU: Menjadi ujung tombak dalam memperluas jaringan serta sebagai batu pijak BEM untuk terus maju dan mensejahterakan mahasiswa
                </Text>
                <Text>
                4. DAGRI: Menjadi vasilitator dalam kegiatan mahasiswa serta menjadi wadah untuk menampung aspirasi mahasiswa yang tergabung dalam organisasi baik komunitas, UKM, Hima, maupun HMJ sehingga tercipta lingkungan internal kampus yang harmonis.
                </Text>
                <Text>
                5. RISTEK: Menjadi motor penggerak mahasiswa IT Telkom Surabaya dalam bidang Riset dan Teknologi sehingga mampu berprestasi, inovatif dan kreatif.
                </Text>
                <Text>
                6. KOMINFO: Menjadikan sarana dalam bidang pencitraan kampus yang informatif, komunikatif, produktif, serta responsif yang dikemas dan diintegrasikan dalam bentuk informasi visual yang kreatif kepada civitas kampus dan masyarakat umum.
                </Text>

                </Text>
            </Box>
        </ScrollView>
    );
};

export default BEM;
