import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECTION, CHANGE_DATE_RANGE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}

export function changeSelection(selected) {
	return {
		type: CHANGE_SELECTION,
		payload: { selected }
	}
}

export function changeDateRange(dateRange) {
	return {
		type: CHANGE_DATE_RANGE,
		payload: { dateRange }
	}
}