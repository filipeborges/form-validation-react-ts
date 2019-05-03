import { personAttrValidators } from './attributeValidators';
import { Person, PersonErrors } from '../store';

export default function personValidationErrors(person: Person) {
  return Object.keys(personAttrValidators).reduce((errors: PersonErrors, attribute) => {
    errors[attribute] = !personAttrValidators[attribute](person)
    return errors
  }, {});
}