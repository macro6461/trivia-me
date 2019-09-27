import {handleActions} from 'redux-actions';

const games = handleActions({
    ['games/fetchGames'](state, action) {

    },
    ['games/getGame'](state, action) {
        var game = state.games.find((x)=>{return x.id === action.payload});
        return {...state, game}
    },
    ['games/deleteGame'](state, action) {
        var games = state.games.filter((x)=>{return x.id !== action.payload});
        return {...state, games}
    }
}, {
    games: [
        {
        id: 1,
        name: 'My First Trivia Game',
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
        ]},
        {
            id: 2,
            name: 'My Second Trivia Game',
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
            ]},
    ],
    game: null
});

export default games;