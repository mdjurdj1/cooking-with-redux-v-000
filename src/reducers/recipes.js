import uuidV4  from 'uuid/v4';

export default function recipe(state = [], action){
  switch(action.type) {
    case 'ADD_RECIPE':
      return [].concat(state, action.payload, {id: uuidV4()})
    default:
      return state
    }
}
