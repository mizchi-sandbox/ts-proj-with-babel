import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import foo from './foo'

const a: number = 3
console.log(a)
foo()

ReactDOM.render(<App title="Welcome" />, document.querySelector('main'))
