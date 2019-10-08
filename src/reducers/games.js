import {handleActions} from 'redux-actions';
import { notification} from "antd";

const games = handleActions({
    ['games/fetchGames'](state, action) {
        
    },
    ['games/getGame'](state, action) {
        return {...state, loading: true}
    },
    ['games/getGame/success'](state, action) {
        var game = action.payload;
        return {...state, game, loading: false}
    },
    ['games/getGame/fail'](state, action) {
        notification.error({
            message: 'Game could not be found.'
        });
        return {...state, game: null, loading: false}
    },
    ['games/newGame'](state, action) {
        return {...state, loading: true}
    },
    ['games/newGame/success'](state, action) {
        var games = state.games;
        games.push(action.payload);
        notification.success({
            message: `${action.payload.name} has been created successfully.`
        });
        return {...state, games, loading: false}
    },['games/newGame/fail'](state, action) {
        notification.success({
            message: 'Game could not be created.'
        });
        return {...state, loading: false}
    },
    ['games/editGame'](state, action) {
        return {...state, loading: true}
    },
    ['games/editGame/success'](state, action) {
        var games = state.games;
        var game = games.find((x)=>{
            return x.id === action.payload.id
        });
        var index = games.indexOf(game);
        games[index] = action.payload;
        
        notification.success({
            message: `${action.payload.name} has been updated successfully.`
        });
        return {...state, games, loading: false}
    },['games/editGame/fail'](state, action) {
        notification.success({
            message: 'Game could not be updated.'
        });
        return {...state, loading: false}
    },
    ['games/deleteGame'](state, action) {
        return {...state, loading: true}
    },
    ['games/deleteGame/success'](state, action) {
        var games = state.games.filter((x)=>{return x.id !== action.payload});
        notification.success({
            message: 'Game has been deleted.'
        });
        return {...state, games, loading: false}
    },
    ['games/deleteGame/fail'](state, action) {
        notification.error({
            message: 'Game could not been deleted.'
        });
        return {...state, loading: false}
    }
}, {
    loading: false,
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