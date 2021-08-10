import axios from 'axios';

export function loadPeople() {
    return axios.get("http://localhost:8080/")
        .then(function (response) {
            // handle success
            const jsonStr = JSON.stringify(response.data);
            console.log('JsonStr='+jsonStr);
            // const jsonObj = JSON.parse(jsonStr); // string to generic object first
            return response.data.people
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return null;
        })
}