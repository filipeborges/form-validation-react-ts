import { createStore, combineReducers, compose } from "redux";


interface StoreAction {
  type: string
  payload: {
    personAttribute?: {
      [attribute: string]: string
    }
    error?: {
      [attribute: string]: boolean
    }
  }
}

const INITIAL_PERSON: Person = {
  name: '',
  age: 0,
  sex: '',
  errors: {
    name: false,
    age: false,
    sex: false
  }
}

function personReducer(state = INITIAL_PERSON, action: StoreAction): Person {
  switch (action.type) {
    case 'UPDATE_PERSON':
      return {
        ...state,
        ...action.payload.personAttribute,
        errors: {
          ...state.errors,
          ...action.payload.error
        }
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  person: personReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface PersonErrors {
  [attribute: string]: boolean
}

export interface Person {
  name: string
  age: number
  sex: string
  errors: PersonErrors
}

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeEnhancers()
);

export function updatePerson(attribute: string, value: any): StoreAction {
  return {
    type: 'UPDATE_PERSON',
    payload: {
      personAttribute: {
        [attribute]: value
      }
    }
  }
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
  }
}