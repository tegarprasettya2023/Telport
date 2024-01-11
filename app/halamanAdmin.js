import React from "react";
import { Center, Heading, Text } from "@gluestack-ui/themed";
import { Header } from "../components";

const ESPORT = () => {
    return (
        <>
        {/* admin1@gmail.com */}
            <Header title={"ADMIN"} />
            <Center backgroundColor="blue" flex={1}>
                <Heading >Halaman ADMIN</Heading>
            </Center>
            <Text backgroundColor="red" flex={1}>firli</Text>
        </>
    );
}; 

export default ESPORT;

