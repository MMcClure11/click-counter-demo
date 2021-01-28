import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {

});
test('rnders button', () => {

});
test('renders counter display', () => {

});
test('counter starts at 0', () => {

});
test('clicking on the button increments counter display', () => {

});