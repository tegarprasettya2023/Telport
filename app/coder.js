import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const CODER = () => {
    return (
        <>
            <Header title={"CODER"} />
            <Center flex={1}>
                <Heading>Halaman CODER</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default CODER;
