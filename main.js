var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("Mensagem").innerHTML = "";
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("Mensagem").innerHTML = content;
    if (content == "tire minha selfie") {
        speak()
    }
}
var cont = 0;

function speak() {
    var synth = window.speechSynthesis;
    //speakData = document.getElementById("Mensagem").value;


    Webcam.attach(camera);
    setTimeout(() => {
        speakData = "Tirando sua selfie em 5 segundos"
        imgId = "Selfie_1"
        takeSelfie()
        //save()
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        temp(cont)
    }, 11000);
    

    setTimeout(() => {
        speakData = "Tirando sua selfie em 7 segundos"
        imgId = "Selfie_2"
        takeSelfie()
        //save()
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 24000);
    

    setTimeout(() => {
        speakData = "Tirando sua selfie em 9 segundos"
        imgId = "Selfie_3"
        takeSelfie()
        //save()
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 39000);
    
}


camera = document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function takeSelfie() {
    Webcam.snap(function (data_uri) {

        if(imgId == "Selfie_1"){
            document.getElementById("result_1").innerHTML = '<img id = "Selfie_1" src = "' + data_uri + '"/>'
        }
        if(imgId == "Selfie_2"){
            document.getElementById("result_2").innerHTML = '<img id = "Selfie_2" src = "' + data_uri + '"/>'
        }
        if(imgId == "Selfie_3"){
            document.getElementById("result_3").innerHTML = '<img id = "Selfie_3" src = "' + data_uri + '"/>'
        }
    })
}

function save() {
    link = document.getElementById("link")
    image = document.getElementById("selfies").src;
    link.href = image;
    link.click()
}

function temp(cont) {
    for (var i = 0; i < 5; i++) {
        cont = cont + 1
        var synth = window.speechSynthesis;
        speak_data = cont;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }
}
