import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sample text',
  color: 'black',
  size: '16px',
  weight: 'normal',
};
