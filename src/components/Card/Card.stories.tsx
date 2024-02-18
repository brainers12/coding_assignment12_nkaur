import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  body: 'This is the card body content.',
  actions: <button>Click Me</button>,
};
