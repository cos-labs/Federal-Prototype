export { validator };
import Mixin from 'ember-validations/mixin';

export default Mixin;

function validator(callback) {
  return { callback: callback };
}