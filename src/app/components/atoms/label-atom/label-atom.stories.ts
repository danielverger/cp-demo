import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { LabelAtomComponent } from './label-atom.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<LabelAtomComponent> = {
  title: 'Atoms/Label-atom',
  component: LabelAtomComponent,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text'},
    labelClass: { control: 'text'},
    required: { control: 'boolean' }
  },
  args: { text: 'Label', required: true, forId: 'input', labelClass: 'block text-900 text-xl font-medium mb-2' },
  // render: (args) => ({
  //   template: `<app-label-atom>Label</app-label-atom>`
  // })
};

export default meta;
type Story = StoryObj<LabelAtomComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
  },
};



