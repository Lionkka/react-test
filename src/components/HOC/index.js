import React from 'react';
import Border from './Border';

const Text = (props) => {
    console.log(props);
    props.sayHello();

    return (
        <div>Hello world</div>
    );
}

export default Border(Text);