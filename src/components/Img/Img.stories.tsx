import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Img, ImgProps } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: 150,
  height: 150,
};
