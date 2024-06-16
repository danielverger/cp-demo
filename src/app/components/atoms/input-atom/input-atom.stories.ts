import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { InputAtomComponent } from './input-atom.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputAtomComponent> = {
  title: 'Atoms/Input-atom',
  component: InputAtomComponent,
  tags: ['autodocs'],
  argTypes: {
    class: { control: 'text' },
    //   labelClass: { control: 'text'},
    // required: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    placeholder: 'Input',
    inputId: 'input',
    // disabled: false,
    loading: false,
  },
  // render: (args) => ({
  //   template: `<app-label-atom>Label</app-label-atom>`
  // })
};

export default meta;
type Story = StoryObj<InputAtomComponent>;

export const Email: Story = {
  args: {
    type: 'email',
  },
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Invalid: Story = {
  args: {
    class: 'ng-dirty ng-invalid',
  },
};

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//   },
// };
