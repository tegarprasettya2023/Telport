import React from "react";
import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../components";

const ECITTS = () => {
    return (
        <>
            <Header title={"ECITTS"} />
            <Center flex={1}>
                <Heading>Halaman ECITTS</Heading>
                {/* Isi halaman BEM di sini */}
            </Center>
        </>
    );
};

export default ECITTS;
