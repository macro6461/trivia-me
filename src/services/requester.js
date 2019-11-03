import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import {notification} from 'antd';
import merge from 'merge';

function jsonParse(res) {
    return res.json();
}

function errorHandle(res) {
    if (res.status !== 200) {
        let message
        if (res.result && res.result.errorMessage === "ESOCKETTIMEDOUT") {
            message = "The connection to the server has timed out because a task has run longer than normal. Please refresh the page and try again.";
        }

        notification.error({
            duration: 15,
            message: res.status,
            description: res.statusText
        });
    }
    return res;
}

const requester = async (url, body) => {

    return await fetch(url, body).then((res, status)=>{
        if (res.status !== 200){
            return errorHandle(res)
        } else {
            return jsonParse(res)
        }
    })
};

export default requester;