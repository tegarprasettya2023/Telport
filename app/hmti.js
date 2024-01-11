import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const HMTI = () => {
    return (
        <>
            <Header title={"HMTI"} />
            <Center flex={1}>
                <Heading>Halaman HMTI</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default HMTI;
