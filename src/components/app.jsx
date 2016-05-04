/*jshint esversion: 6 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import ScoreBox from './quiz/ScoreBox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Mike'
            },
            {
              id: 'b',
              text: 'Mary'
            },
            {
              id: 'c',
              text: 'Nick'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your father\'s name?',
          choices: [
            {
              id: 'a',
              text: 'Viktor'
            },
            {
              id: 'b',
              text: 'John'
            },
            {
              id: 'c',
              text: 'Alex'
            }
          ],
          correct: 'a'
        },
        {
          id: 3,
          text: 'What is best friend\'s name?',
          choices: [
            {
              id: 'a',
              text: 'Sasha'
            },
            {
              id: 'b',
              text: 'Yulia'
            },
            {
              id: 'c',
              text: 'Kate'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'What is grandmother\'s name?',
          choices: [
            {
              id: 'a',
              text: 'Louisa'
            },
            {
              id: 'b',
              text: 'Maria'
            },
            {
              id: 'c',
              text: 'Anna'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    };
  }

  setCurrent(current){
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }

  render(){
    if(this.state.current > this.state.questions.length){
      var scorebox = '';
      var results = <Results {...this.state} />;
    } else {
      var scoreboox = <ScoreBox {...this.state} />;
      var results = '';
    }

    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
      </div>
    )
  }
}

export default App
