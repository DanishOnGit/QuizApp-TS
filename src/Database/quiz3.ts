import { Quiz } from "./quiz.type";
import rules from "./Assets/rules.jpg";
export const quiz3:Quiz={
    
        _id: "3",
        categoryName: "Game Rules",
        quizName: "Game Rules",
        score: 0,
        image:rules,
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