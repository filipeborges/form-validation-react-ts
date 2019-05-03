import { Person } from '../store'

function isNameValid(person: Person): boolean {
  return person.name.length > 1;
}

function isAgeValid(person: Person): boolean {
  return person.age >= 10;
}

interface AttrValidator {
  [attribute: string]: typeof isNameValid
}

export const personAttrValidators: AttrValidator = {
  ['name']: isNameValid,
  ['age']: isAgeValid,
}
