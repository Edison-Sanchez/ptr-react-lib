import React from 'react';
import { storiesOf } from '@storybook/react';

import { Title } from '../components/Title';

const stories = storiesOf('App Test', module);

stories.add( 'Title', () => { 
return <Title>This is a Title</Title>
} );