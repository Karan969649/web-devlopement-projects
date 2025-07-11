let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    

    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    
    if(hours>=0 && hours<120){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("good evening sir")
    }
    else{
        speak("good night sir sweet dreams")
    }

}

window.addEventListener('load' ,()=>{
    wishMe()
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()

recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
     

btn.addEventListener("click", ()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"

})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("hello sir ,how can i help you?")
    }
    else if(message.includes("who are you")){
        speak("hello sir,i am virtual assistant created by karan sir")
    }

    else if(message.includes("open youtube")){
         speak("opening youtube......")    
         window.open("https://www.youtube.com/","_blank")

    }
    else if(message.includes("open google")){
        speak("opening google......")    
        window.open("https://www.google.co.in/","_blank")

   }
   else if(message.includes("open instagram")){
    speak("opening instagram......")    
    window.open("https://www.instagram.com/accounts/login/?hl=en","_blank")

}
else if(message.includes("open facebook")){
    speak("opening facebook......")    
    window.open("https://www.facebook.com/","_blank")
}
    else if(message.includes("open calculator")){
        speak("opening calculater......")    
        window.open("calculater://")
    
     }
     else if(message.includes("time")){
        let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
     } 

     else if(message.includes("date")){
        let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     } 
    
    
else{
    speak(`this is what i found on internet regarding ${message.replace("jarvis","")}`)
    window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`)
}

}




