const triviaGame = {
    timed: false,
    questions: [
    {
        id: 0,
        qTitle: "When is Independence Day?",
        qAnswers: [
            {aId: 0, aContent: "July 18th"},
            {aId: 1, aContent: "July 19th"},
            {aId: 2, aContent: "July 30th"},
            {aId: 3, aContent: "July 4th"}
        ],
        answer: 3,
        correct: null
    },
    {
        id: 1,
        qTitle: "When is Christmas Day?",
        qAnswers: [
            {aId: 0, aContent: "July 18th"},
            {aId: 1, aContent: "July 19th"},
            {aId: 2, aContent: "December 25th"},
            {aId: 3, aContent: "December 31st"}
        ],
        answer: 2,
        correct: null
    },
    {
        id: 2,
        qTitle: "When is New Year's Eve?",
        qAnswers: [
            {aId: 0, aContent: "January 1st"},
            {aId: 1, aContent: "December 31st"},
            {aId: 2, aContent: "February 30th"},
            {aId: 3, aContent: "December 25th"}
        ],
        answer: 1,
        correct: null
    }
]}

export default triviaGame;