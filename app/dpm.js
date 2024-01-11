import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const DPM = () => {
    return (
        <>
            <Header title={"DPM"} />
            <Center flex={1}>
                <Heading>Halaman DPM</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default DPM;
