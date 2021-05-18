class Storage {

    static getSearchedUsersFromStorage(){
        // Tüm kullanıcıları almak için

        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUsersToStorage(username){
        // Kullanıcı ekle,Aynısı varsa Ekleme

        let users = this.getSearchedUsersFromStorage();

        // IndexOf // Aynısı var mı yok mu kontrolü

        if (users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){
        // Tüm kullanıcıları sil

        localStorage.removeItem("searched");
    }
}