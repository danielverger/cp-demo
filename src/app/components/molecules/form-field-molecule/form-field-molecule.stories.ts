import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { FormFieldMoleculeComponent } from './form-field-molecule.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<FormFieldMoleculeComponent> = {
  title: 'Molecules/Form-field-molecule',
  component: FormFieldMoleculeComponent,
  tags: ['autodocs'],
  argTypes: {
    //   text: { control: 'text'},
    //   labelClass: { control: 'text'},
    required: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    labelText: 'Username',
    required: true,
    labelFor: 'input',
    inputPlaceholder: 'Enter username',
    loading: false,
  },
  // render: (args) => ({
  //   template: `<app-label-atom>Label</app-label-atom>`
  // })
};

export default meta;
type Story = StoryObj<FormFieldMoleculeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
  },
};
