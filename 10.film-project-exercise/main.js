const form = document.getElementById("film-form");
const filmNameInput = document.getElementById("filmName");
const directorInput = document.getElementById("directorName");
const urlInput = document.getElementById("filmLink");
const filmList = document.getElementById("films");
const deleteAllBtn = document.getElementById("clear-films"); 



// Load All Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromLS();
        UI.loadAllFilmsToUI(films);

        shouldBeDeleteBtn();
    });
    filmList.addEventListener("click",deleteFilm);
    deleteAllBtn.addEventListener("click",deleteAllFilms);
}   

function addFilm(e){

    const title = filmNameInput.value;
    const director = directorInput.value;
    const url = urlInput.value;


    if(title === "" || director === "" || url === ""){
        // Error
        UI.showAlerts("Tüm Alanları Doldurunuz !","danger");
    }
    else if(isInclude(title)){
        UI.showAlerts("Lütfen Baska Bir Film Giriniz !","warning");
    }
    else {
        // Create Film Object
        const newFilm = new Film(title,director,url);
        // Add New Film To UI
        UI.addFilmToUI(newFilm);
        // Add New Film To LS
        Storage.addFilmToLS(newFilm);
        // Clear Inputs
        UI.clearInputs(filmNameInput,directorInput,urlInput);
        // Check Clear All Button
        shouldBeDeleteBtn();
        // Show Success Alert
        UI.showAlerts("Film Başarıyla Eklendi !","success");
    }

    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromLS(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        shouldBeDeleteBtn();
        UI.showAlerts("Silme İşlemi Başarıyla Tamamlandı","success");
    }
}

function deleteAllFilms(){
    if(confirm("Gerçekten Bütün Filmleri Silmek İstiyor musun ?")){
        UI.deleteAllFilms();
        Storage.deleteAllFilmsFromLS();
        UI.showAlerts("Bütün Filmler Başarıyla Silindi","success");
        UI.displayNone();
    }
}

function shouldBeDeleteBtn(){
    let films = Storage.getFilmsFromLS();
    if(films.length === 0){
        UI.displayNone();
    }else{
        UI.displayBlock();
    }
}


function isInclude(newTitle){
    let films = Storage.getFilmsFromLS();
    let filmTitleList = [];

    films.forEach(function(film){
        filmTitleList.push(film.title);
    });
    return filmTitleList.includes(newTitle);
}

