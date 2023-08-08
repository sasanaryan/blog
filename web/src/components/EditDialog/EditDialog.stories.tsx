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

import EditDialog from './EditDialog'

const meta: Meta<typeof EditDialog> = {
  component: EditDialog,
}

export default meta

type Story = StoryObj<typeof EditDialog>

export const Primary: Story = {}
