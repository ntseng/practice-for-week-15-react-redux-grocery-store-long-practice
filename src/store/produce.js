import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";

export default function produceReducer(state = {}, action) {
	switch (action.type) {
		case POPULATE:
			let produceState = {};
			action.produce.forEach(item => {
				produceState[item.id] = item;
			})
			return produceState;
		default:
			return state;
	}
}

export function populateProduce() {
	return {
		type: POPULATE,
		produce: produceData
	}
}
