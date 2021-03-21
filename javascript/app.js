alert("are you getting bored with the same look"
);

alert("do you need a new style"
);

var answer = prompt(
    "do you prefer get our service at home or at salon"
);

while (answer !== 'home' && answer !== 'salon') {
    aswer = prompt('please only write home/salon');
}
var services = " "
if (answer == 'home') {
    services = '<img src="picture/home.jpg"/>';
} else if (answer == 'salon') {
    services = '<img src="picture/salon.jpg"/>';
} else {
    alert('choose betwen home or salon please ');
}

var numberOfstar = prompt('What star rating would you give us');
var stars = '';
var result=""
if (stars =>3) {
    stars ='<img src="picture/star.jpg"/>';
} else if (stars =>5) {
    stars ='<img src="picture/star.jpg"/>';
}
for (var i = 0; i < numberOfstar; i++) {
    result += stars;
}

