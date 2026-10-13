import request from "../utils/request";

export const create = (data, accessToken) => {
    console.log(accessToken)
    return request('/comments', 'POST', data, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    });
}

// TOdo delete next time
function getAuthHeader(accessToken) {
    console.log(accessToken)

    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    };
}
