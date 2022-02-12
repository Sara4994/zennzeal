import axios from 'axios';

export const getData = async() => {
    const response = axios.get('http://localhost:8080/apis/v1/users')
    console.log('utils', response)
    return response;
}

export const updateData = async () => {
    //source code
    axios.put('http://localhost:8080/apis/v1/users')
}
