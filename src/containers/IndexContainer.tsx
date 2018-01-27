import *as React from 'react';

import { Header, Timeline, TimelineHeader } from '../components';

export default class IndexContainer extends React.Component <{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header />
                <div className="container">
                    <TimelineHeader />
                    <div id="timeline">
                        <Timeline />
                        <Timeline />
                        <Timeline />
                        <Timeline />
                        <Timeline />
                    </div>
                </div>
            </div>
        );
    }
}