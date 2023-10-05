import { useState } from 'react'



const kills = (counter)=>{

    switch(counter){
         case 1:
         return "First kill"
         case 2:
         return "Double kill"
         case 3:
         return "Triple kill"
         case 4:
         return "Goodlike "
        default:
            return "Counter"
    }
}

const Counter = (props) => {

    const [counter, setCounter] = useState(props.counts)

    const buttonClick = (e) => {

        setCounter(state => state + 1)

    }

    const decrementCounter = (e) => {

        setCounter(state => state - 1)
    }
    const clearClick = (e) => {

        setCounter(0)
    }


    return (
        <div>
            <h3>{counter >4? "God" : kills(counter)}: {counter} </h3>
            {counter>0 ? 
            <button onClick={decrementCounter}>UnPush me</button>
            :
            null}
            <button onClick={clearClick}>CLEAR</button>

            {counter < 10 ? 
            <button onClick={buttonClick}>Push me</button>
            :
            null} 
         


        </div>

    );


}


export default Counter