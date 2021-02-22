/*本文件根据jupiter项目的前端进行的modify，大家可以根据需要进行更改*/
// If you don't want to host your server code and client code together, you can
// pay AWS to host your server with HTTPS then config the api url endpoints like below
// const SERVER_ORIGIN = '<Your server's url>';

// Ma:
// 为了使用代理，这里的SERVER_ORIGIN应该在代理中写出
// 这里只需要填写一个标记，让setupProxy来在运行中替换为SERVER_ORIGIN即可。
// const SERVER_ORIGIN = 'http://localhost:8080';
const SERVER_ORIGIN = '/api'

const loginUrl = `${SERVER_ORIGIN}/login`;

export const login = (credential) => {
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credential)
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to log in');
        }

        return response.json();
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
        if (response.status !== 200) {
            throw Error('Fail to register');
        }
    })
}

/*
const logoutUrl = `${SERVER_ORIGIN}/logout`;

export const logout = () => {
    return fetch(logoutUrl, {
        method: 'POST',
        credentials: 'include',
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to log out');
        }
    })
}*/
const getTrackingDetailsUrl = `${SERVER_ORIGIN}/tracking?orderId=`;

export const getTrackingDetails = (orderId) => {
    return fetch(`${getTrackingDetailsUrl}${orderId}`).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to track the order');
        }

        return response.json();
    });
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

const getAccountInfoUrl = `${SERVER_ORIGIN}/accountInfo`;

export const getAccountInfo = (credential) => {
    return fetch(getAccountInfoUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credential)
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to get Account Info');
        }

        return response.json();
    })
}
