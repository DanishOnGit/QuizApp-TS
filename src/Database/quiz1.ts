import { Quiz } from "./quiz.type";
import skillImg from "./Assets/skills.jpg"
export const quiz1:Quiz={
    
        _id: "1",
        categoryName: "Skills",
        quizName: "Skills",
        image:skillImg,
        score: 0,
        totalQuestions: 5,
        questions: [
          {
            _id: "1",
            points: 2,
            question: "How to play a smash?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "punch down",
              },
              {
                _id: "2",
                isRight: false,
                text: "drive long",
              },
            ],
          },
          {
            _id: "2",
            points: 2,
            question: "How to play a smash?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "punch down",
              },
              {
                _id: "2",
                isRight: false,
                text: "drive long",
              },
            ],
          },
          {
            _id: "3",
            points: 2,
            question: "How to play a smash?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "punch down",
              },
              {
                _id: "2",
                isRight: false,
                text: "drive long",
              },
            ],
          },
          {
            _id: "4",
            points: 2,
            question: "How to play a smash?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "punch down",
              },
              {
                _id: "2",
                isRight: false,
                text: "drive long",
              },
            ],
          },
          {
            _id: "5",
            points: 2,
            question: "How to play a smash?",
            options: [
              {
                _id: "1",
                isRight: true,
                text: "punch down",
              },
              {
                _id: "2",
                isRight: false,
                text: "drive long",
              },
            ],
          },
        ],
      
}