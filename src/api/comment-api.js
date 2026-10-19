import request from "../utils/request";

export const getAll = (gameId) => {
    return request(`/comments?game_id=eq.${gameId}&order=created_at.desc`);
};

export const create = (data, accessToken) => {
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
