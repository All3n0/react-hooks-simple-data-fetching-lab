// create your App component here
import React,{useEffect,useState} from "react";

function App(){
    const [dog,setdog]=useState("");
    const [isLoaded,setIsLoaded]=useState(false);
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then((data)=>{
            setdog(data);
            setIsLoaded(true);
            console.log(data);
            console.log(dog.message);
        })
    }
    ,[]);
    if(!isLoaded) return <h2>Loading...</h2>
    const message=dog.message;
    return(
        <main>
            <p>This is my dog</p>
            <img src={message} alt="A random dog"/>
        </main>
    )
}

export default App;