import React from "react";
import { Box, ScrollView, Text, Image } from "@gluestack-ui/themed";
import { Header } from "../components";

const HMSI = () => {
    return (
        <ScrollView>
            <Header title={"Profil HMSI"} />
            <Box paddingHorizontal={10} paddingVertical={20} backgroundColor="#eeeeee">
                <Text fontSize={23} fontWeight="bold">
                    Himpunan Mahasiswa Sistem Informasi Institut Teknologi Telkom Surabaya
                </Text>
            </Box>
            <Box padding={10}>
                <Image
                    source={{
                        uri: "https://linktr.ee/og/image/HMSIITTelkomSBY.jpg",
                    }}
                    height={200}
                    width={500}
                />
                <Box height={10} />
                <Text>
                    <Text fontWeight="bold">Sejarah</Text> -
                    Himpunan Mahasiswa Sistem Informasi (HMSI) Institut Teknologi Telkom Surabaya, 
                    didirikan pada tahun 2018, menjadi sebuah entitas yang penting dalam kehidupan 
                    akademis di institusi ini. Bertujuan sebagai wadah aspirasi bagi seluruh mahasiswa 
                    Sistem Informasi, himpunan ini muncul sebagai platform untuk membahas isu-isu penting, 
                    berbagi ide, dan mengembangkan potensi mahasiswa. Dengan keanggotaan yang beragam, 
                    Himpunan Mahasiswa Sistem Informasi menciptakan ruang kolaboratif di mana pemikiran 
                    kritis dan inovasi dapat berkembang.

                </Text>
                <Box height={10} />
                <Text>
                    <Text fontWeight="bold">Visi Misi</Text> - Setiap tahun, HMSI 
                    membentuk kabinet baru yang mengemban visi dan misi khusus, menciptakan dinamika yang terus berkembang 
                    dalam peran dan tujuannya.  

                </Text>
                <Text>
                    <Text fontWeight="bold">Visi :</Text> 
                </Text>
                <Text>
                Mewujudkan Himpunan Mahasiswa Sistem Informasi sebagai wadah untuk menciptakan generasi yang 
                Bersinergi, Aspiratif, Inovatif, serta Unggul dan Terampil dalam bidang akademis dan non-akademis 
                dengan esensi pribadi yang bermanfaat bagi masyarakat.
                </Text>
                <Text>
                    <Text fontWeight="bold">Misi :</Text> 
                </Text>
                <Text>
                1. Membangun serta menjaga akhlak dan etika dalam berkehidupan bermasyarakat.
                </Text>
                <Text>
                2. Menjaga komunikasi, solidaritas, dan keharmonisan baik kepada civitas Internal Institut 
                Teknologi Telkom Surabaya maupun civitas Eksternal Institut Teknologi Telkom Surabaya.
                </Text>
                <Text>
                3. Menerapkan ilmu serta berbagi pengetahuan yang didapat kepada seluruh civitas baik internal 
                institusi maupun eksternal institusi
                </Text>
                <Text>
                4. Mengembangkan minat bakat Mahasiswa Sistem Informasi supaya menjadi pribadi yang unggul 
                dalam bidang akademis dan non-akademis.
                </Text>
                <Text>
                5. Menjadikan Himpunan Sistem Informasi sebagai mediator dalam berdiskusi dan berkomunikasi 
                serta menjadi penampung dan penyalur aspirasi mahasiswa.
                </Text>
                <Text>
                6. Menjadikan Himpunan Mahasiswa Sistem Informasi yang mandiri dalam pengadaan kegiatan namun 
                tidak meninggalkan tanggungjawab terhadap Institusi dan Mahasiswa
                </Text>
                <Text>
                7. Memaksimalkan program kerja yang dibuat dengan tujuan demi terwujudnya visi & misi Himpunan 
                Mahasiswa Sistem Informasi
                </Text>
                <Box height={10} />
                <Text>
                    <Text fontWeight="bold">Departemen</Text> - Departemen yang ada di dalam Himpunan Mahasiswa Sistem Informasi mencakup berbagai aspek 
                    kehidupan mahasiswa. Departemen Hubungan Masyarakat bertugas membangun komunikasi yang efektif 
                    antara himpunan dan mahasiswa. Sementara itu, Departemen Pengembangan Sumber Daya Manusia 
                    berfokus pada pengembangan potensi personal dan profesional mahasiswa. Departemen lainnya, 
                    seperti Media dan Informasi, Riset dan Teknologi, Kewirausahaan, Advokasi Kesejahteraan Mahasiswa, 
                    serta Pengembangan Minat dan Bakat, turut serta dalam membentuk mahasiswa menjadi individu yang 
                    lebih holistik dan siap menghadapi tantangan masa depan. Melalui keberagaman departemen ini, 
                    Himpunan Mahasiswa Sistem Informasi menciptakan lingkungan yang dinamis dan mendukung untuk 
                    pertumbuhan akademis dan pribadi mahasiswa.

                </Text>
            </Box>
        </ScrollView>
    );
};

export default HMSI;