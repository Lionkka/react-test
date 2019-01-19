import React from 'react';

export default (Component) => {
    class HOC extends React.Component {
        render() {
            return (
                <div style={{ border: '1px solid red' }}>
                    <Component sayHello={() => console.log('Hello Hoc')}/>
                </div>
            )
        }
    }

    return HOC;
};