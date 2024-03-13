var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var camera=document.getElementById("camera")
function Start()
{
document.getElementById("textbox").innerHTML = ""
recognition.start()
}
recognition.onresult = function(event) {
    console.log(event)
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content
    if(Content=="Take my selfie."){
        speak()
    }
}
function speak(){
    var Criss=window.speechSynthesis
    var dizerisso=new SpeechSynthesisUtterance("sua selfie sera tirada em 10000 anos") 
    Criss.speak(dizerisso)
    Webcam.attach(camera)
    setTimeout(function(){
        takeselfie()
        save()

    },5000)
}
Webcam.set({
    width:400,
    height:400,
    image_format:"jpeg",
    jpeg_quality:90
})
function takeselfie(){
    Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>" })
}
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie").src
    link.href=image
    link.click()
}