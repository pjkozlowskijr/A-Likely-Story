import apiClientNoAuth from './clientNoAuth'
import apiClientBasicAuth from './clientBasicAuth'
import apiClientTokenAuth from './clientTokenAuth'

const endpointLogin = '/login'

const endpointPPD = '/user'

const post = async (data, cancelToken) => {
    let error;
    let user;

    const response = await apiClientNoAuth(cancelToken).post(endpointPPD, data);
    if (response.ok){
        user = response.data
    }else{
        error = 'An unexpected error has occured.'
    }
    return {
        error,
        user
    }
}

const get = async (email, password, cancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, cancelToken).get(endpointLogin);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error = 'Invalid email/password combo.'
    }else{
        error = 'An unexpected error has occured.'
    }
    return {
        error,
        user
    }
}

const put = async (token, data, cancelToken) => {
    const response = await apiClientTokenAuth(token, cancelToken).put(endpointPPD, data);
    return response.ok
}

const del = async (token, cancelToken) => {
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpointPPD)
    return response.ok
}

const apis = {
    post,
    get,
    put,
    del
}
export default apis