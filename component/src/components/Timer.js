import { useState } from 'react';



const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.start)


    setTimeout(() => {

        // setSeconds(seconds+1)

        setSeconds(state => state + 1)  //? update function

    }, 1000)
    return (
        <div>
            <h2>Time start</h2>
            Time:{seconds}s
        </div>
    )


}

export default Timer