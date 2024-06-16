import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxAtomComponent } from './checkbox-atom.component';

const meta: Meta<CheckboxAtomComponent> = {
  title: 'Atoms/Checkbox-atom',
  component: CheckboxAtomComponent,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    binary: { control: 'boolean' },
  },
  args: { disabled: false, readonly: false, binary: true },
};

export default meta;
type Story = StoryObj<CheckboxAtomComponent>;

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};
