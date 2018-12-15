const url = "http://localhost:42069/";

export function fetchPost(address: string, data: object) {
    return fetch( url + address, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    });
}