const btn = document.querySelector('#listen');
const content = document.querySelector('#load');

function speak(text){
   const text_speak =  new SpeechSynthesisUtterance(text);
   text_speak.rate = 1;
   text_speak.volume = 1;
   text_speak.pitch = 1;
   window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    const day = new Date();
    var hour = day.getHours();
    if(hour>=0 && hour<=12){
        speak("Good Morning Sir")
    }
    else{
        speak("Good Evening Sir");
    }
}

window.addEventListener('load',()=>{
    speak("Initializing Jarvis..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
 recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
 }

 btn.addEventListener('click',()=>{
    content.textContent = "Listening..."
    recognition.start();
 });

 function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak('Hello Sir, How May I help You')
    }
    else if(message.includes('what is my name'))
        {
            speak('Your Name is Charan')
        }
    else if(message.includes('what is your name'))
        {
            speak('My name is jarvis, i am, a, Ai')
        }
    else if(message.includes(`${message}`) || message.includes(`${message}`)){
        message = message.split(" ");
        console.log(message.length);
        window.open(`http://${message[message.length-1]}.com`,"_blank");
        speak(`opening${message[message.length-1]}`)
    }
 }

