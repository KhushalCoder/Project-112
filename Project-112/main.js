var prediction_1 = ""


Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
})
 
camera = document.getElementById("camera")
Webcam.attach('#camera')

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "image" src = "' + data_uri + '">'
    })
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZdGiHCqQI/model.json", modelLoaded)
function modelLoaded() {
    console.log("model is loaded");
}
 
function speak() {
    synth = window.speechSynthesis
    speakdata = "the prediction is" + prediction_1;
    utterthis = new SpeechSynthesisUtterance(speakdata1)
    synth.speak(utterthis)
}

function prediction() {
    Img = document.getElementById("image")
    classifier.classify(Img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
    console.log(results);

    document.getElementById("result_emotion_name").innerHTML = results[0].label
    
    prediction_1 = results[0].label
    
    speak()

    if (prediction_1 == "Happy") {
        document.getElementById("update_emoji").innerHTML = "&#128522;" 
    }
    if (prediction_1 == "Sad") {
        document.getElementById("update_emoji").innerHTML = "&#128532;"
    }
    if (prediction_1 == "Angry") {
        document.getElementById("update_emoji").innerHTML = "&#128545;"
    }
   
}

}
