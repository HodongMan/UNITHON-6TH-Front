import * as React from 'react';

export default class Message extends React.PureComponent<{}, {}> {

    render() {
        return (
            <div className="msg-insert">
                <div className="msg-send" id="msg-send"/>
            </div>
        );
    }
}