/*本文件根据jupiter项目的前端进行的modify，大家可以根据需要进行更改*/
// If you don't want to host your server code and client code together, you can
// pay AWS to host your server with HTTPS then config the api url endpoints like below
// const SERVER_ORIGIN = '<Your server's url>';
import axios from "axios"

const SERVER_ORIGIN = '/api';

const loginUrl = `${SERVER_ORIGIN}/login`;

// Ma: the content type should be x-www-form-urlencoded.
export const login = (credential) => {
    const {username, password} = credential;
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlencoded,
        redirect: 'follow'
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to log in');
        }
        return response.headers.get("username");
        // console.log(response);
        // return response.json();
    })
}

const registerUrl = `${SERVER_ORIGIN}/register`;

export const register = (data) => {
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.status !== 201) { // Ma: 201 created.
            throw Error('Fail to register');
        }
    })
}

const getTrackingDetailsUrl = `${SERVER_ORIGIN}/tracking?orderId=`;

export const getTrackingDetails = (orderId) => {
    return fetch(`${getTrackingDetailsUrl}${orderId}`, {
        method: 'GET',
        redirect: 'follow'
    }).then((response) => {
            if (response.status !== 200) {
                throw Error('Fail to track the order');
            }

            return response.json();
        })
}

const makeAPaymentUrl = `${SERVER_ORIGIN}/payment`;//this is following "addFavoriteItem" in jupiter project

//allPaymentInfo: sender_address, receiver_address, receiver_name, card_number, package_size, weight, description, delivery_method, fee
export const makeAPayment = (allPaymentInfo) => {
    return fetch(makeAPaymentUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',//does this credentials include cardNumber or just username and password
        body: JSON.stringify(allPaymentInfo)
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to make a payment');
        }
    })
}

// Ma: the method will get the [currently logged in user's info], so it's unnecessary to provide credentials.
const getAccountInfoUrl = `${SERVER_ORIGIN}/accountinfo`

export const getAccountInfo = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(getAccountInfoUrl, requestOptions)
      .then((response) => {
          if (response.status !== 200) {
              throw Error('Fail to get Account Info');
          }

          return response.json();
      });
}
