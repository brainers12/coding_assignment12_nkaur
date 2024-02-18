import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'dropdown',
  value: 'option1',
  onChange: () => {},
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // ...more options
  ],
};
