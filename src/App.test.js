import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/** 
  * Factory function to create a ShallowWrapper for the App Component.
  * @funtion setup
  * @returns {ShallowWrapper}
*/
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});
test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
});
test('counter starts at 0', () => {

});
test('clicking on the button increments counter display', () => {

});