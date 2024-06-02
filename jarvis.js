const btn = document.querySelector('#listen');
const content = document.querySelector('#load');

function speak(text){
   const textspeak =  new SpeechSynthesisUtterance(text);
   textspeak.rate = 1;
   textspeak.volume = 1;
   textspeak.pitch = 1;
   window.speechSynthesis.speak(textspeak);
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
// recognition.interimResults = true;
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
    else if(message.includes('calculator')){
            window.open('Calculator')
            speak('opening Calculator')
        }
    
    else if(message.includes("what is") || message.includes("who is") || message.includes("where is") || message.includes("about")){
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`),"_blank"
        speak("This is What i found on Internet")
    }
    else if(message.includes(`${message}`)){
        message = message.split(" ");
        console.log(message.length);
        window.open(`com.google.android.${message[message.length-1]}`),"_blank";
        speak(`opening${message[message.length-1]}`)
    }
    else if(message.includes(`${message}`)){
        message = message.split(" ");
        console.log(message.length);
        window.open(`com.${message[message.length-1]}`),"_blank";
        speak(`opening${message[message.length-1]}`)
    }
    else if(message.includes(`${message}`)){
        message = message.split(" ");
        console.log(message.length);
        window.open(`com.${message[message.length-1]}.android.`),"_blank";
        speak(`opening${message[message.length-1]}`)
    }
    else if(message.includes(`${message}`)){
        message = message.split(" ");
        console.log(message.length);
        window.open(`com.pubg,imobile`),"_blank";
        speak(`opening${message[message.length-1]}`)
    }
    else if(message.includes(`${message}`)){
        message = message.split(" ");
        console.log(message.length);
        window.open(`http://${message[message.length-1]}.com`),"_blank";
        speak(`opening${message[message.length-1]}`)
    }
 }

