prediction_1="";

Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pYuctN5wo/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model from TM is compeletely loaded");
}

function speak(){
    var synth=window.speechSynthesis;
     speak_data_1="The prediction is"+prediction_1;
      var utterThis=new SpeechSynthesisUtterance(speak_data_1);
      synth.speak(utterThis);
}

function predict(){
    img=document.getElementById("captured_img");
    classifier.classify(img, gotResult);
    }
    
    function gotResult(error, results){
    if(error){
        console.error();
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
        prediction_1=results[0].label;
        speak();
    
        if(results[0].label == "Amazing"){
            document.getElementById("update_emoji1").innerHTML="&#128076";
        }
        if(results[0].label == "Victory"){
            document.getElementById("update_emoji1").innerHTML="&#9996";
        }
        if(results[0].label == "Good"){
            document.getElementById("update_emoji1").innerHTML="&#128077";
        }
    }
    }
    
