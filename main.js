prediction_1="";


Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera").value;

Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pYuctN5wo/.json', modelLoaded);

function modelLoaded(){
    console.log("Model from TM is compeletely loaded");
}

function speak(){
    var synth=window.speechSynthesis;
     speak_1="The first prediction is"+prediction_1;
      var utterThis=new SpeechSynthesisUtterance(speak_1);
      synth.speak(utterThis);
}
