import React  from 'react'
import ReactDOM  from 'react-dom'
import underscore  from 'underscore'
import AppContainer  from './components/AppContainer.jsx'

ReactDOM.render(<AppContainer />, document.getElementById('main'));
window._ = underscore;
