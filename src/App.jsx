import {useState} from 'react'
import Card from './Card'
import './App.css';


export default function App()
{
  const questions = ["Start", "How many infinity stones did Thanos need for his gauntlet?", "Who created Ultron?", "Who is Thor's brother?", "What other Avenger was worthy of Thor's hammer?", "How many Guardians of the Galaxy are there?", "What is Spiderman's part time job?", "What is Deadpool's superpower?", "Who gave up their life for the Soul Stone?", "What is Shang Chi's weapon called?", "Who was the villian in Thor Ragnarok?"]
  const answers = ["Press the arrows to navigate through the flashcards!", "6!", "Iron Man!", "Loki!", "Captain America", "6!", "Photography!", "Regeneration!", "Black Widow!", "The Ten Rings!", "Hela, his sister!"];

  const [index, updateIndex] = useState(0);
  const [flipped, flipCard] = useState(false)
  const [text, updateText] = useState(questions[0]);

  const leftClick = () =>
  {
      if(index != 0)
      { 
        updateIndex(prevIndex => {
          const newIndex = prevIndex - 1;
          updateText(questions[newIndex]);
          return newIndex;
        });

        if(flipped)
          flipCard(false)
      }
  }

  const rightClick = () =>
  {
      updateIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % questions.length;
        updateText(questions[newIndex]);
        return newIndex;
      });
      if(flipped)
      {
        flipCard(false)
      }
  }

  const cardClick = () =>
  {
    if(flipped)
    {
      flipCard(false)
      updateText(questions[index])
    }
    else
    {
      flipCard(true);
      updateText(answers[index]);
    }
  }
  


  return (
    <div className = "App">
      <h1> Ultimate Marvel Trivia </h1>
      <h3> How big of a marvel fan are you? Test all your knowledge here!</h3>
      <h4> Number of Cards: 10</h4>
      <Card onClick = {cardClick} content = {text}/>
      <div className = "buttons">
          <button onClick = {leftClick}>Left</button>
          <button onClick = {rightClick}>Right</button>
      </div>
    </div>
  );
}

