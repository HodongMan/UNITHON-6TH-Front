import * as React from 'react';

export default class Timeline extends React.PureComponent<{}, {}> {

    render() {
        return (
            <div className="timeline-item">
                <div className="timeline-icon" />
                <div className="timeline-content ">
                    <h2>LOREM IPSUM DOLOR</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
                        </p>
                    <a href="#" className="btn">button</a>
                </div>
            </div>
        );
    }
}
