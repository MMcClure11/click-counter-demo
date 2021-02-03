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

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

describe('Increment', () => {

  test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1);
  });

  test('counter increments when button is clicked', () => {
    const wrapper = setup();
    // find the button
    const button = findByTestAttr(wrapper, 'increment-button');
    // click the button
    button.simulate('click');
    // find the display, and test that the number has been incremented
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('Decrement', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button')
    expect(button.length).toBe(1);
  });

  test('clicking decrement button decrements counter display when state is greater than 0', () => {
    const wrapper = setup();
    //click the increment button so that the counter is greater than 0
    const incButton = findByTestAttr(wrapper, 'increment-button');
    incButton.simulate('click');
    //find decrement button and click
    const decButton = findByTestAttr(wrapper, 'decrement-button');
    decButton.simulate('click');
    //find display and test value
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('error when counter goes below 0', () => {
  test('error does not show when not needed', () => {
    //implement by using a 'hidden' class for the error div
    //use data-test value 'error-message' for the error div
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');

    //use enzyme's '.hasClass()' method
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    console.log(wrapper.debug());
    expect(errorHasHiddenClass).toBe(true)
  });
});


