import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

// import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
<React.StrictMode>
<Provider store={store}>
<Playground endpoint='https://api-us-west-2.graphcms.com/v2/ckhkrkt47eyly01z12b702jo6/master' />

</Provider>
</React.StrictMode>,
rootElement
)