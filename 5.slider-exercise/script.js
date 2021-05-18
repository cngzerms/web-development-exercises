const models = [
    {
        name: "Skoda SuperB",
        image: "img/skoda.jpg",
        link: "http://www.arabalar.com.tr/skoda/superb/2021/1-5-tsi-comfort-plus-dsg"
    },
    {
        name: "Bmw X1",
        image: "img/bmw.jpg",
        link: "http://www.arabalar.com.tr/bmw/1-serisi/2021/1-5-116d"
    },
    {
        name: "Mazda Pajero",
        image: "img/mazda.jpg",
        link: "http://www.arabalar.com.tr/mitsubishi/eclipse-cross"
    },
    {
        name: "Honda Attrage",
        image: "img/honda.jpg",
        link: "http://www.arabalar.com.tr/mitsubishi/lancer/2013/1-6-invite-otomatik"
    },
    {
        name: "Volvo Lancer",
        image: "img/volvo.jpg",
        link: "http://www.arabalar.com.tr/mitsubishi/eclipse-cross/2018/1-5-instyle-cvt-4x4"
    }
];

let index = 0;
let slaytCount = models.length;
let interval;

let settings = {
    duration: "1000",
    random: false
};

init(settings);

function init(settings) {
    let previous;

    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == previous)
            previous = index;
        }else {
            if(slaytCount == index){
                index = 0;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
}

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    });
});

document.querySelector(".card-img-top").addEventListener("mouseenter",function(){
    clearInterval(interval);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(item){
        init(settings);
    });
});

document.querySelector(".card-img-top").addEventListener("mouseleave",function(){
    init(settings);
});

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
    
    index--;
    showSlide(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
   
    index++;
    showSlide(index);
});

function showSlide(i){

    index = i;

    if(i < 0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount) {
        index = 0;
    }

    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".btn").setAttribute("href",models[index].link); 
}




