const context = require.context("../sagas/", true, /\.js$/);
const keys = context.keys();

export const sagaInitiator = sagaMiddleware => {
    keys.forEach(v => {
        if (context(v).default) {
            sagaMiddleware.run(context(v).default);
        }
    });
};