import ReactDOM from 'react-dom';
import App from './components/App'

const app = App();
const element = document.querySelector(".root");
ReactDOM.render(app, element);