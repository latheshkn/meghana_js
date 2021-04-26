var user = {
    firstName: 'Meghana',
    lastName: 'B',
    role: "Admin",
    loginFromFacebook: true,
    visitCount: 54
};

console.log(user.firstName);

user.visitCount = 34
console.log(user.visitCount);
console.table(user);
var users = {
    firstName: 'Meghana',
    lastName: 'B',
    role: "Admin",
    loginFromFacebook: true,
    visitCount: 54,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCouseCount: function () {
        return `${this.firstName.concat(" ").concat(this.lastName)} has enrolled in ${this.courseList.length} course(s)`;

    },


};

console.log(users.buyCourse("Android Application Tutorial"));

console.log(users.getCouseCount());