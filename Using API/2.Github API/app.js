// Elementleri Seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    let username = nameInput.value.trim();

    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı girin...");
    }
    else {
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                // Hata Mesajı
                ui.showError("Kullanıcı Bulunamadı !");
            }
            else {

                ui.addSearchedUsersToUI(username);
                Storage.addSearchedUsersToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err => ui.showError(err));
    }

    ui.clearInput();  //Input Temizleme İşlemi
    e.preventDefault();
}


function clearAllSearched(){
    // Tüm arananları temizleme fonksiyonu

    if(confirm("Emin misiniz ?")){
        // Son arananları Silme İşlemi
        Storage.clearAllSearchedUsersFromStorage(); // Storage dan Temizleme
        ui.clearAllSearchedFromUI();
    }
}
function getAllSearched(){
    // Tüm arananları Storage'dan al ve Ui ye Ekle

    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach(user => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>

        result += `<li class="list-group-item">${user}</li>`;

    });

    lastUsers.innerHTML = result;
}