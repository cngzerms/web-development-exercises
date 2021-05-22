class Storage {
    static getFilmsFromLS(){
        let films;
        if(localStorage.getItem("films") === null) {
            films = [];
        }else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }
    
    static addFilmToLS(newFilm){
        let films = this.getFilmsFromLS();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static deleteFilmFromLS(filmName){
        let films = this.getFilmsFromLS();
        films.forEach(function(film,index){
            if(film.title === filmName){
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static deleteAllFilmsFromLS(){
        let films = this.getFilmsFromLS();
        films = [];
        localStorage.setItem("films",JSON.stringify(films));
    }
}


