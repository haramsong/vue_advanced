import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
async function fetchUserInfo(username) {
    try {
        const response = axios.get(`${config.baseUrl}user/${username}.json`);
        return response;
    } catch (e) {
        console.log(e);
    }
}
async function fetchItemInfo(id) {
    try {
        return axios.get(`${config.baseUrl}item/${id}.json`); 
    } catch (e) {
        console.log(e);
    }
}
export {
    fetchList,
    fetchUserInfo,
    fetchItemInfo,
}