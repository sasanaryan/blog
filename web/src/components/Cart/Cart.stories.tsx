// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Cart from './Cart'

const meta: Meta<typeof Cart> = {
  component: Cart,
}

export default meta

type Story = StoryObj<typeof Cart>

export const Primary: Story = {}
