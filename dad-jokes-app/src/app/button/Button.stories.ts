import { Meta, Story } from '@storybook/angular';

import { ButtonComponent } from './button.component';

// This default export determines where your story goes in the story list
export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
} as Meta;

// // Create a template of how args map to rendering
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const MaterialPrimaryRaisedButton = Template.bind({});
// args refers to React props, Vue's props and Angular's @Input

MaterialPrimaryRaisedButton.args = { label: 'Button' };
