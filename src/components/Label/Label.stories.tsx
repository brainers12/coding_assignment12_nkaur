import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Label, LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label Text',
  disabled: false,
  size: '16px', // assuming 'small', 'medium', 'large' or similar are your size options
  color: 'black', // default color
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
