// UI Class ını Oluşturalım 

class UI {
    static addFilmToUI(newFilm){
        const filmList = document.getElementById("films");
     
        filmList.innerHTML += 
        `<tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="width: 150px;"/></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr>`;
    }
     
    static clearInputs(title,director,url){
        title.value = "";
        director.value = "";
        url.value = "";
    }
     
    static showAlerts(msg,type){
     
        const firstCardBody = document.querySelector(".card-body");
     
        // Create Alert Div
     
        const alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${type}`;
        alertDiv.setAttribute("role","alert");
        alertDiv.textContent = msg;
     
        firstCardBody.appendChild(alertDiv);
     
        setTimeout(function(){
            alertDiv.remove();
        },1500);
     
    }
     
    static loadAllFilmsToUI(films){
        const filmList = document.getElementById("films");
     
        films.forEach(function(film){
            filmList.innerHTML += 
            `<tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail" style="width: 150px;"/></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Siliniz</a></td>
            </tr>`;
        });
    }
     
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
     
    static deleteAllFilms(){
        const filmList = document.getElementById("films");
        // filmList.innerHTML = "";
        do{
            filmList.firstElementChild.remove();
        }while(filmList.firstElementChild)
    }
     
    static displayNone(){
        const deleteAllBtn = document.getElementById("clear-films"); 
        deleteAllBtn.setAttribute("style","display: none");
    }
     
    static displayBlock(){
        const deleteAllBtn = document.getElementById("clear-films"); 
        deleteAllBtn.setAttribute("style","display: block");
    }
}


