import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonIconAtomComponent, Size } from './button-icon-atom.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonIconAtomComponent> = {
  title: 'Atoms/Button-icon-atom',
  component: ButtonIconAtomComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['', 'small', 'large'],
      control: { type: 'select' },
    },
    severity: {
      options: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'help',
        'danger',
      ],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
    size: undefined,
    disabled: false,
    icon: 'pi pi-check',
    rounded: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<ButtonIconAtomComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: Size.large,
    label: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: Size.small,
    label: 'small',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disbled',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    severity: 'secondary',
  },
};

export const Info: Story = {
  args: {
    label: 'Info',
    severity: 'info',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    severity: 'warning',
  },
};

export const Help: Story = {
  args: {
    label: 'Help',
    severity: 'help',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger',
    severity: 'danger',
  },
};
