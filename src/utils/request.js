
const url = "https://juiegzuqlaacubisfriq.supabase.co/rest/v1/";
const apiKey = "sb_publishable_ePBHGPAvwjKaPAp3clli4w_B1jKSQ8r"

export default async function request(path = "/", method = "GET", data = null) {
    const options = {
        headers: {
            apiKey,
        }
    };

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
}
