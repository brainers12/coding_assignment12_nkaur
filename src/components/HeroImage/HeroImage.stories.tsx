import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { HeroImage, HeroImageProps } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/600x400',
  alt: 'A stunning Hero Image',
  caption: 'This is a hero image caption',
};
