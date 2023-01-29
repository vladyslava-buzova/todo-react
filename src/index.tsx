import createRoot from 'react-dom';
import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import { App } from './App';

createRoot.render(
  <App />,
  document.getElementById('root'),
);
