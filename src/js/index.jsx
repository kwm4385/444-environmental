import moment  from 'moment'
import React  from 'react'
import ReactDOM  from 'react-dom'
import ReactWidgets  from 'react-widgets'
import momentLocalizer  from 'react-widgets/lib/localizers/moment'
import underscore  from 'underscore'
import AppContainer  from './components/AppContainer.jsx'

window._ = underscore;
momentLocalizer(moment);
ReactDOM.render(<AppContainer />, document.getElementById('main'));
