import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {

  switch (action.type) {

	case 'HINDI':
          return state = 'Namaste Duniyawalon'

    case 'SPANISH':
		  return state = 'Hola Mundo'

    case 'FRENCH':
      return state = 'Bonjour le monde'

		default:
			return state;
	}
}