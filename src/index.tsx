import * as React from 'react'
import * as ReactDOM from 'react-dom'

const a: number = 3
console.log(a)

function myFunc(parameter: number) {
  throw new Error('Not implemented yet')
}

ReactDOM.render(<h1>Hello</h1>, document.querySelector('main'))
