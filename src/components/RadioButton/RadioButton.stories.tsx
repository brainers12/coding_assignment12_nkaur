import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <RadioButton
      {...args}
      checked={value === args.value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'radio1',
  name: 'radio-group',
  value: 'option1',
  checked: false,
};
