import React from 'react';

import {Meta, StoryFn} from '@storybook/react-vite';

import {MediaCardProps} from '../../../models';
import MediaCard from '../MediaCard';

import data from './data.json';

export default {
    component: MediaCard,
    title: 'Components/Cards/MediaCard',
    argTypes: {
        color: {
            control: {type: 'color'},
        },
    },
} as Meta;

const DefaultTemplate: StoryFn<MediaCardProps> = (args) => (
    <div style={{maxWidth: '500px'}}>
        <MediaCard {...args} />
    </div>
);

export const Image = DefaultTemplate.bind({});
export const WithLabel = DefaultTemplate.bind({});
export const ImageSlider = DefaultTemplate.bind({});
export const Video = DefaultTemplate.bind({});
export const Youtube = DefaultTemplate.bind({});
export const DataLens = DefaultTemplate.bind({});

Image.args = data.image.content;
WithLabel.args = {
    ...data.image.content,
    ...data.withLabel.content,
};
ImageSlider.args = data.imageSlider.content;
Video.args = data.video.content;
Youtube.args = data.youtube.content;
DataLens.args = data.dataLens.content;
