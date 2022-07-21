import axios from "axios";
import React from "react";

const URL ="http://my-json-server.typicode.com/gowtham3105/react-native-test/profile/"

export const list=()=>{
    return axios({
        method:"get",
        url:URL
    })
}