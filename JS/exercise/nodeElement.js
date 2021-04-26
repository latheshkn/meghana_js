let courses = [
    {
        courseName : "Android Development",
        coursePrice : "234"
    },
    {
        courseName : "Web Development",
        coursePrice : "240"
    },
    {
        courseName : "Python",
        coursePrice : "200"
    },
    {
        courseName : "React JS",
        coursePrice : "300"
    },
    {
        courseName : "React Native",
        coursePrice : "400"
    }
]

function list(){
    const unordered=document.querySelector(".list-group");
    unordered.innerHTML ="";
    courses.forEach((course) => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.courseName);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode(course.coursePrice);
        span.appendChild(price);

        li.appendChild(span);
        unordered.appendChild(li);

    });

    


}
// list();
window.addEventListener("load",list);


const button = document.querySelector(".sort-btn");
const highLowButton = document.querySelector(".btn-primary");

button.addEventListener("click",() => {

    courses.sort((a,b) => a.coursePrice-b.coursePrice);
    list();
});

highLowButton.addEventListener("click",() => {

courses.sort((a,b) => b.coursePrice-a.coursePrice);
list();

});




