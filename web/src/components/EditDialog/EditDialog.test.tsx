import { render } from '@redwoodjs/testing/web'

import EditDialog from './EditDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditDialog />)
    }).not.toThrow()
  })
})
