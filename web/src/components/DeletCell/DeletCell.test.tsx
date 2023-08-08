import { render } from '@redwoodjs/testing/web'

import DeletCell from './DeletCell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeletCell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeletCell />)
    }).not.toThrow()
  })
})
