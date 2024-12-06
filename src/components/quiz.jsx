import {useState, useEffect} from "react"
import questions from "../data"

const Quizzington = () => {
    const [value, setValue] = useState(0)
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState(questions[value])
    
    console.log(questions.length)
    var answer = false

    useEffect(()=>{
        setQuestion((questions[value]))
    }, [value])

    const check = (choice) =>{
        if(choice === question.answer){
            alert("Correct!")
            answer = true
        } else {
            alert("Incorrect! The correct answer is: " + question.answer)
            answer = false
        }
        var buttons = document.querySelectorAll(".button")
        buttons.forEach(button => button.disabled = true)
    }

    const next = () =>{
        if(value === questions.length){
            return alert("Game Over!")
        }
        setValue(value+1)
        if(answer){
            answer = false
            setScore(score+1)
        }else{
            answer = false
        }
        var buttons = document.querySelectorAll(".button")
        buttons.forEach(button => button.disabled = false)
    }
    return(
        <>
            <h1>The Quizzington</h1>
            <main>
                <h2>{question.question}</h2>
                <div className="data">
                    <h3>Question: {value}/20</h3>
                    <h3>Score: {score}/20</h3>
                </div>
                <div>
                    {question.options.map((option, index) => (
                        <button className="button" key={index} onClick={()=>check(option)}>
                            {option}
                        </button>
                    ))}
                </div>
                <button className="next" onClick={()=> next()}>Next Question</button>
            </main>
        </>
    )
}

export default Quizzington