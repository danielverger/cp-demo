import type { Meta, StoryObj } from '@storybook/angular';
import { FormCheckboxFieldMoleculeComponent } from './form-checkbox-field-molecule.component';

const meta: Meta<FormCheckboxFieldMoleculeComponent> = {
  title: 'Molecules/Form-checkbox-field-molecule',
  component: FormCheckboxFieldMoleculeComponent,
  tags: ['autodocs'],
  // argTypes: {
  //   disabled: { control: 'boolean' },
  //   readonly: { control: 'boolean' },
  //   binary: { control: 'boolean' }
  // },
  args: { labelText: 'Username', required: true, labelFor: 'checkbox', disabled: false },
};

export default meta;
type Story = StoryObj<FormCheckboxFieldMoleculeComponent>;

export const Disabled: Story = {
  args: {
    disabled: true
  },
};

// export const Readonly: Story = {
//   args: {
//     // readonly: true,
//   },
// };





