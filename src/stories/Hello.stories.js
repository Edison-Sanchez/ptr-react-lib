import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hello } from '../components/Hello';

const stories = storiesOf('App Test', module);

stories.add( 'Hello', () => { 
return <Hello />
} );