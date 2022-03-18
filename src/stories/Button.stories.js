import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../components/Button';

const stories = storiesOf('App Test', module);

stories.add( 'Button', () => { 
return <Button onClick={() => console.log('Clicked')}>This is a button</Button>
} );