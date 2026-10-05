
const restUrl = "https://juiegzuqlaacubisfriq.supabase.co/rest/v1";
const storageUrl = "https://juiegzuqlaacubisfriq.supabase.co/storage/v1/object/images";

export async function uploadFile(fileName, file) {
    const options = {
        headers: {
            apiKey: import.meta.env.VITE_API_KEY,
            'Content-Type': file.type || 'application/octet-stream'
        }
    };

    const response = await fetch(`${storageUrl}/${fileName}`, {
        method: "POST",
        body: file,
        ...options
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return `https://juiegzuqlaacubisfriq.supabase.co/storage/v1/object/public/images/${fileName}`;
}

export default async function request(path = "/", method = "GET", data = null, opts = {}) {
    const options = {
        headers: {
            apiKey: import.meta.env.VITE_API_KEY,
            Prefer: "return=representation"
        },
        ...opts
    };

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${restUrl}${path}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}
