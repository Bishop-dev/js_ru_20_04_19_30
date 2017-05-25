import {ADD_COMMENT, LOAD_ALL_COMMENTS, SUCCESS, START} from '../constants'
import {arrayToMap} from '../utils'
import {OrderedMap, Record} from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null,
    loading: false
});

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    articleId: null,
    loading: false,
    loaded: false
});

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId, articleId} = action;
    switch (type) {
        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true);
        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                //каждый раз перезатираешь комменты, используй mergeIn
                .set('entities', arrayToMap(payload.response, CommentModel))
                //а если несколько статей сразу будут грузиться?
                .set('articleId', payload.articleId)
                .set('loading', false)
                .set('loaded', true);
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })
    }

    return comments
}
