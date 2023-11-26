var myCanvas1 = document.getElementById("myCanvas1");
var myCanvas2 = document.getElementById("myCanvas2");
var myCanvas3 = document.getElementById("myCanvas3");
var myCanvas4 = document.getElementById("myCanvas4");
var myCanvas5 = document.getElementById("myCanvas5");
var myCanvas6 = document.getElementById("myCanvas6");
var myCanvas7 = document.getElementById("myCanvas7");
var myCanvas8 = document.getElementById("myCanvas8");
var myCanvas9 = document.getElementById("myCanvas9");
var myCanvas10 = document.getElementById("myCanvas10");

var myCanvas1a = myCanvas1.getContext("2d");
myCanvas1a.moveTo(0, 0);
myCanvas1a.lineTo(300, 150);
myCanvas1a.stroke();

var myCanvas2a = myCanvas2.getContext("2d");
myCanvas2a.moveTo(300, 0);
myCanvas2a.lineTo(0, 150);
myCanvas2a.stroke();

var myCanvas3a = myCanvas3.getContext("2d");
var myCanvas3b = myCanvas3a.createLinearGradient(0,0,200,10);
myCanvas3b.addColorStop(0,"yellow");
myCanvas3b.addColorStop(1,"red");
myCanvas3a.fillStyle = myCanvas3b;
myCanvas3a.fillRect(0,0,350,250);

var myCanvas4a = myCanvas4.getContext("2d");
myCanvas4a.beginPath();
myCanvas4a.arc(150, 75, 60, 0, 2 * Math.PI);
myCanvas4a.stroke();

var myCanvas5a = myCanvas5.getContext("2d");
myCanvas5a.font = "50px Arial";
myCanvas5a.strokeText("Adhish Bahl", 20, 100);

var myCanvas6a = myCanvas6.getContext("2d");
myCanvas6a.fillRect(25, 25, 100, 100);
myCanvas6a.clearRect(45, 45, 60, 60);
myCanvas6a.strokeRect(50, 50, 50, 50);
myCanvas6a.fillRect(170, 25, 100, 100);
myCanvas6a.clearRect(190, 45, 60, 60);
myCanvas6a.strokeRect(195, 50, 50, 50);

const myCanvas7a = myCanvas7.getContext("2d");
myCanvas7a.beginPath();
myCanvas7a.moveTo(60, 90);
myCanvas7a.lineTo(100, 115);
myCanvas7a.lineTo(100, 55);
myCanvas7a.fill();
myCanvas7a.beginPath();
myCanvas7a.moveTo(240, 90);
myCanvas7a.lineTo(190, 115);
myCanvas7a.lineTo(190, 55);
myCanvas7a.fill();
myCanvas7a.beginPath();
myCanvas7a.moveTo(150, 20);
myCanvas7a.lineTo(190, 45);
myCanvas7a.lineTo(110, 45);
myCanvas7a.fill();

const myCanvas8a = myCanvas8.getContext("2d");
const rectangle = new Path2D();
rectangle.rect(10, 10, 50, 50);
const circle = new Path2D();
circle.arc(100, 35, 25, 0, 2 * Math.PI);
const rectangle2 = new Path2D();
rectangle2.rect(140, 10, 50, 50);
const circle2 = new Path2D();
circle2.arc(240, 35, 25, 0, 2 * Math.PI);
const rectangle3 = new Path2D();
rectangle3.rect(75, 85, 50, 50);
const circle3 = new Path2D();
circle3.arc(35, 110, 25, 0, 2 * Math.PI);
const rectangle4 = new Path2D();
rectangle4.rect(215, 85, 50, 50);
const circle4 = new Path2D();
circle4.arc(165, 110, 25, 0, 2 * Math.PI);
myCanvas8a.stroke(rectangle);
myCanvas8a.fill(circle);
myCanvas8a.stroke(rectangle2);
myCanvas8a.fill(circle2);
myCanvas8a.stroke(rectangle3);
myCanvas8a.fill(circle3);
myCanvas8a.stroke(rectangle4);
myCanvas8a.fill(circle4);

var myCanvas9a = myCanvas9.getContext('2d');
function calc(myVal) {
    var radius = 70;
    myCanvas9a.clearRect(0,0,myCanvas9.width, myCanvas9.height);
    myCanvas9a.beginPath();
    myCanvas9a.arc(140, 80, 50, myVal * Math.PI, 0, true);
    myCanvas9a.lineWidth = 10;
    myCanvas9a.stroke();
};
var count = 0;
var parsedCount;
function go(){  
    if (count <= 200) {
        parsedCount = count*.01
        calc(parsedCount);
        count++;
    }
}
setInterval(go, 100)


var myCanvas10a = myCanvas10.getContext("2d");
var i = 0;
function drawThings(myCanvas10a) {
    myCanvas10a.fillStyle = i === 0 ? 'red' : 'blue';
    myCanvas10a.fillRect(100,25,100,100);   
    if (i === 0)
        i = 1;
    else
        i = 0;
}
setInterval(function() {drawThings(myCanvas10a);}, 100)

// =============================================================================================

var myCanvas11 = document.getElementById("myCanvas11");
var myCanvas12 = document.getElementById("myCanvas12");
var myCanvas13 = document.getElementById("myCanvas13");
var myCanvas14 = document.getElementById("myCanvas14");
var myCanvas15 = document.getElementById("myCanvas15");
var myCanvas16 = document.getElementById("myCanvas16");
var myCanvas17 = document.getElementById("myCanvas17");
var myCanvas18 = document.getElementById("myCanvas18");
var myCanvas19 = document.getElementById("myCanvas19");
var myCanvas20 = document.getElementById("myCanvas20");
var myCanvas21 = document.getElementById("myCanvas21");
var myCanvas22 = document.getElementById("myCanvas22");
var myCanvas23 = document.getElementById("myCanvas23");
var myCanvas24 = document.getElementById("myCanvas24");
var myCanvas25 = document.getElementById("myCanvas25");
var myCanvas26 = document.getElementById("myCanvas26");
var myCanvas27 = document.getElementById("myCanvas27");
var myCanvas28 = document.getElementById("myCanvas28");
var myCanvas29 = document.getElementById("myCanvas29");
var myCanvas30 = document.getElementById("myCanvas30");

var myCanvas11a = myCanvas11.getContext("2d");
myCanvas11a.moveTo(0, 0);
myCanvas11a.lineTo(300, 150);
myCanvas11a.stroke();

var myCanvas12a = myCanvas12.getContext("2d");
myCanvas12a.moveTo(300, 0);
myCanvas12a.lineTo(0, 150);
myCanvas12a.stroke();

var myCanvas13a = myCanvas13.getContext("2d");
var myCanvas13b = myCanvas13a.createLinearGradient(0,0,200,10);
myCanvas13b.addColorStop(0,"white");
myCanvas13b.addColorStop(1,"blue");
myCanvas13a.fillStyle = myCanvas13b;
myCanvas13a.fillRect(0,0,350,250);

var myCanvas14a = myCanvas14.getContext("2d");
myCanvas14a.beginPath();
myCanvas14a.arc(150, 75, 60, 0, 2 * Math.PI);
myCanvas14a.stroke();

var myCanvas15a = myCanvas15.getContext("2d");
myCanvas15a.font = "50px Arial";
myCanvas15a.strokeText("Adhish Bahl", 20, 100);

var myCanvas16a = myCanvas16.getContext("2d");
myCanvas16a.fillRect(25, 25, 100, 100);
myCanvas16a.clearRect(45, 45, 60, 60);
myCanvas16a.strokeRect(50, 50, 50, 50);
myCanvas16a.fillRect(170, 25, 100, 100);
myCanvas16a.clearRect(190, 45, 60, 60);
myCanvas16a.strokeRect(195, 50, 50, 50);

const myCanvas17a = myCanvas17.getContext("2d");
myCanvas17a.beginPath();
myCanvas17a.moveTo(60, 90);
myCanvas17a.lineTo(100, 115);
myCanvas17a.lineTo(100, 55);
myCanvas17a.fill();
myCanvas17a.beginPath();
myCanvas17a.moveTo(240, 90);
myCanvas17a.lineTo(190, 115);
myCanvas17a.lineTo(190, 55);
myCanvas17a.fill();
myCanvas17a.beginPath();
myCanvas17a.moveTo(150, 20);
myCanvas17a.lineTo(190, 45);
myCanvas17a.lineTo(110, 45);
myCanvas17a.fill();

const myCanvas18a = myCanvas18.getContext("2d");
const rectangle18 = new Path2D();
rectangle18.rect(10, 10, 50, 50);
const circle18 = new Path2D();
circle18.arc(100, 35, 25, 0, 2 * Math.PI);
const rectangle218 = new Path2D();
rectangle218.rect(140, 10, 50, 50);
const circle218 = new Path2D();
circle218.arc(240, 35, 25, 0, 2 * Math.PI);
const rectangle318 = new Path2D();
rectangle318.rect(75, 85, 50, 50);
const circle318 = new Path2D();
circle318.arc(35, 110, 25, 0, 2 * Math.PI);
const rectangle418 = new Path2D();
rectangle418.rect(215, 85, 50, 50);
const circle418 = new Path2D();
circle418.arc(165, 110, 25, 0, 2 * Math.PI);
myCanvas18a.stroke(rectangle18);
myCanvas18a.fill(circle18);
myCanvas18a.stroke(rectangle218);
myCanvas18a.fill(circle218);
myCanvas18a.stroke(rectangle318);
myCanvas18a.fill(circle318);
myCanvas18a.stroke(rectangle418);
myCanvas18a.fill(circle418);

var myCanvas19a = myCanvas19.getContext('2d');
function calc19(myVal) {
    var radius = 70;
    myCanvas19a.clearRect(0,0,myCanvas19.width, myCanvas19.height);
    myCanvas19a.beginPath();
    myCanvas19a.arc(140, 80, 50, myVal * Math.PI, 0, true);
    myCanvas19a.lineWidth = 10;
    myCanvas19a.stroke();
};
var count = 0;
var parsedCount;
function go19(){  
    if (count <= 200) {
        parsedCount = count*.01
        calc19(parsedCount);
        count++;
    }
}
setInterval(go19, 100)


var myCanvas20a = myCanvas20.getContext("2d");
var i = 0;
function drawThings(myCanvas20a) {
    myCanvas20a.fillStyle = i === 0 ? 'green' : 'orange';
    myCanvas20a.fillRect(100,25,100,100);   
    if (i === 0)
        i = 1;
    else
        i = 0;
}
setInterval(function() {drawThings(myCanvas20a);}, 100)

var myCanvas21a = myCanvas21.getContext("2d");
myCanvas21a.moveTo(0, 0);
myCanvas21a.lineTo(300, 150);
myCanvas21a.stroke();

var myCanvas22a = myCanvas22.getContext("2d");
myCanvas22a.moveTo(300, 0);
myCanvas22a.lineTo(0, 150);
myCanvas22a.stroke();

var myCanvas23a = myCanvas23.getContext("2d");
var myCanvas23b = myCanvas23a.createLinearGradient(0,0,200,10);
myCanvas23b.addColorStop(0,"black");
myCanvas23b.addColorStop(1,"white");
myCanvas23a.fillStyle = myCanvas23b;
myCanvas23a.fillRect(0,0,350,250);

var myCanvas24a = myCanvas24.getContext("2d");
myCanvas24a.beginPath();
myCanvas24a.arc(150, 75, 60, 0, 2 * Math.PI);
myCanvas24a.stroke();

var myCanvas25a = myCanvas25.getContext("2d");
myCanvas25a.font = "50px Arial";
myCanvas25a.strokeText("Adhish Bahl", 20, 100);

var myCanvas26a = myCanvas26.getContext("2d");
myCanvas26a.fillRect(25, 25, 100, 100);
myCanvas26a.clearRect(45, 45, 60, 60);
myCanvas26a.strokeRect(50, 50, 50, 50);
myCanvas26a.fillRect(170, 25, 100, 100);
myCanvas26a.clearRect(190, 45, 60, 60);
myCanvas26a.strokeRect(195, 50, 50, 50);

const myCanvas27a = myCanvas27.getContext("2d");
myCanvas27a.beginPath();
myCanvas27a.moveTo(60, 90);
myCanvas27a.lineTo(100, 115);
myCanvas27a.lineTo(100, 55);
myCanvas27a.fill();
myCanvas27a.beginPath();
myCanvas27a.moveTo(240, 90);
myCanvas27a.lineTo(190, 115);
myCanvas27a.lineTo(190, 55);
myCanvas27a.fill();
myCanvas27a.beginPath();
myCanvas27a.moveTo(150, 20);
myCanvas27a.lineTo(190, 45);
myCanvas27a.lineTo(110, 45);
myCanvas27a.fill();

const myCanvas28a = myCanvas28.getContext("2d");
const rectangle28 = new Path2D();
rectangle28.rect(10, 10, 50, 50);
const circle28 = new Path2D();
circle28.arc(100, 35, 25, 0, 2 * Math.PI);
const rectangle228 = new Path2D();
rectangle228.rect(140, 10, 50, 50);
const circle228 = new Path2D();
circle228.arc(240, 35, 25, 0, 2 * Math.PI);
const rectangle328 = new Path2D();
rectangle328.rect(75, 85, 50, 50);
const circle328 = new Path2D();
circle328.arc(35, 110, 25, 0, 2 * Math.PI);
const rectangle428 = new Path2D();
rectangle428.rect(215, 85, 50, 50);
const circle428 = new Path2D();
circle428.arc(165, 110, 25, 0, 2 * Math.PI);
myCanvas28a.stroke(rectangle28);
myCanvas28a.fill(circle28);
myCanvas28a.stroke(rectangle228);
myCanvas28a.fill(circle228);
myCanvas28a.stroke(rectangle328);
myCanvas28a.fill(circle328);
myCanvas28a.stroke(rectangle428);
myCanvas28a.fill(circle428);

var myCanvas29a = myCanvas29.getContext('2d');
function calc29(myVal) {
    var radius = 70;
    myCanvas29a.clearRect(0,0,myCanvas29.width, myCanvas29.height);
    myCanvas29a.beginPath();
    myCanvas29a.arc(140, 80, 50, myVal * Math.PI, 0, true);
    myCanvas29a.lineWidth = 10;
    myCanvas29a.stroke();
};
var count = 0;
var parsedCount;
function go29(){  
    if (count <= 200) {
        parsedCount = count*.01
        calc29(parsedCount);
        count++;
    }
}
setInterval(go29, 100)


var myCanvas30a = myCanvas30.getContext("2d");
var i = 0;
function drawThings30(myCanvas10a) {
    myCanvas30a.fillStyle = i === 0 ? 'black' : 'blue';
    myCanvas30a.fillRect(100,25,100,100);   
    if (i === 0)
        i = 1;
    else
        i = 0;
}
setInterval(function() {drawThings30(myCanvas30a);}, 100)