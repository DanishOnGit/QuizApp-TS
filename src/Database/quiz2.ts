import { Quiz } from "./quiz.type";
import trophy from "./Assets/trophy.jpg";
export const quiz2:Quiz={
    
        _id: "2",
        categoryName: "Tournaments",
        quizName: "Tournaments",
        score: 0,
        image:trophy,
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