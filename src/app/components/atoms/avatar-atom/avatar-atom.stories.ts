import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { AvatarAtomComponent } from './avatar-atom.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AvatarAtomComponent> = {
  title: 'Atoms/Avatar-atom',
  component: AvatarAtomComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['', 'large', 'xlarge'],
      control: { type: 'select' },
    },
    //   severity: {
    //     options: ['primary', 'secondary', 'success', 'info', 'warning', 'help', 'danger'],
    //     control: { type: 'select' }
    //   },
    //   disabled: { control: 'boolean' }
  },
  // args: { onClick: fn(), size: 'medium', disabled: false },
};

export default meta;
type Story = StoryObj<AvatarAtomComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    size: 'large',
  },
};
