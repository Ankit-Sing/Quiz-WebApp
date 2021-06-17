let Name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("Points");
let user_time = sessionStorage.getItem("time");

document.querySelector(".Name").innerHTML = Name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".time").innerHTML = user_time;