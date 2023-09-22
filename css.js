function setup() {
 canvas=createCanvas(499,399);
 canvas.center();
 video=createCapture(VIDEO);
 video.position(649,149);
 classier=ml5.imageClassifier("MobileNet",messi)
}

function messi() {
console.log("pedri")
}
function draw() {
 image(video,0,0,499,399);
//checar//
 classifier.classify(video,google);   
}
var guardar6_a_2="";
function google(error,resultados_6_a_2) {
 if (error) {
 console.log(error);  
 } else {
console.log(resultados_6_a_2);
if ((guardar6_a_2!=resultados_6_a_2[0].label)&&( resultados_6_a_2[0].confidence>0.5)) {
console.log("cocodriloDante");
guardar6_a_2 = resultados_6_a_2[0].label;
var synth = window.speechSynthesis;
speak_data = 'El objeto detectado es - '+resultados_6_a_2[0].label;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);


document.getElementById("inspect").innerHTML = resultados_6_a_2[0].label;
document.getElementById("ningun").innerHTML = resultados_6_a_2[0].confidence.toFixed(3);  
}
 }
}
