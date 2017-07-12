import * as React from 'react'
import * as ReactDOM from 'react-dom'
import foo from './foo'

const a: number = 3
console.log(a)
foo()

ReactDOM.render(<h1>Hello</h1>, document.querySelector('main'))
