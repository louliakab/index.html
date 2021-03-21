alert("are you getting bored with the same look"
);

alert("do you need a new style"
);

var answer= prompt(
     "do you prefer get our service at home or at salon"
 );
  console.log(answer);
  if(answer=='home'){
    document.write('<img src="picture/home.jpg"/>');
}else if (answer=='salon'){
    document.write('<img src="picture/salon.jpg"/>');
}else{
    alert('choose betwen home or salon please ');
}
