alert("are you getting bored with the same look"
);

alert("do you need a new style"
); 
var answer = prompt(
    "do you prefer get our service at home or at salon"
);
// 
// while (answer !== 'home' && answer !== 'salon') {
//     aswer = prompt('please only write home/salon');
// }
// var services = ""
// if (answer == 'home') {
//     services += '<img src="picture/home.jpg"/>';
// } else if (answer == 'salon') {
//     services += '<img src="picture/salon.jpg"/>';
// } else {
//     alert('choose betwen home or salon please ');
// }

// var numberOfstar = prompt ('What star rating would you give us');
// var stars = '';
// var result=""
// for (var i = 0; i < numberOfstar; i++) {
//    stars +='<img src="picture/star.jpg"/>'
// }
// document.write(stars);
// // 

var services= prompt("which services do you want to get?");
function getService(services);
 {

    if (service >= "nails" && services <=" hair") {
        alert('welcome to the site');
    } else if
     (services="massage " || 'wax' )
     {
        alert('');
    } else {
        alert('please input the services you want');
    }
}

getservice(services);





var services = prompt
 ("which services do you interested in more")

var getnumberOfServices = function () {
    while (services !== 'nails' && favouriteArtist !== 'vangoghhair') {
        services = prompt('please only write nails/hair');
    
    }


    var services = prompt('how many services you will take?"');

    var servies = '';
    var result = '';

    if (sarvices == 'nails') {
        services = '<img src="picture/nail.jpg"/>';
    } else if (services == 'hair') {
        services = '<img src="picture/hair.jpg"/>';
    }
    console.log(services);

    for (var i = 0; i < numberOfPaintings; i++) {

        result += services;
    }
    return result
}
