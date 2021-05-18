// Course constructor
function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

// UI constructor
function UI(){

}

UI.prototype.addCourseToList = function(course){
    const list = document.getElementById("course-list");
    
    let html = `
        <tr>    
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;

    list.innerHTML += html;
}

UI.prototype.clearControls = function(){
    const title = document.getElementById("title").value = "";
    const instructor = document.getElementById("instructor").value = "";
    const image = document.getElementById("image").value = "";
}

UI.prototype.deleteCourse = function(element){
    if(element.classList.contains("delete")){
        const ui = new UI();
        element.parentElement.parentElement.remove();
        ui.showAlert("The course has been deleted","danger");
    }
    
}

UI.prototype.showAlert = function(message,className){
    let alert = `
        <div class="alert alert-${className}">
        ${message}
        </div>
    `;

    const row = document.querySelector(".row");
    // beforeBegin , afterBegin , beforeEnd , afterEnd
    row.insertAdjacentHTML("beforeBegin",alert);
    setTimeout(() => {
        document.querySelector(".alert").remove();
    },1500);
}

document.getElementById("new-course").addEventListener("submit",function(e){
    
    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    // create course object
    const course = new Course(title,instructor,image);

    // create UI
    const ui = new UI();

    if(title === "" || instructor === "" || image === ""){
        ui.showAlert("Please complete the form !","warning");
    }else{
        ui.addCourseToList(course);
        ui.clearControls();
        ui.showAlert("The course has been added","success");
    }
    e.preventDefault();
});

document.getElementById("course-list").addEventListener("click",function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
});