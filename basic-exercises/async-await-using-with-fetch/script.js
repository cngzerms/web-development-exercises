class Request {
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    async post(url,data){
        const response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    }
    async put(url,data){
        const response = await fetch(url,{
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    }
    async delete(url){
        const response = await fetch(url,{
            method: "DELETE"
        });
        return "Veri silme işlemi başarılı";
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(albums => console.log(albums))
//     .catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1, title:"lorem ipsum dolor"})
//     .then(newAlbum => console.log(newAlbum))
//     .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:5000, title:"sara tancredi"})
//     .then(album => console.log(album))
//     .catch(err => console.log(err));

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
//     .then(message => console.log(message))
//     .catch(err => console.log(err));