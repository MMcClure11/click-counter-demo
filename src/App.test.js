import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

