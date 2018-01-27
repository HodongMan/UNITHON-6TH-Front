import *as React from 'react';

import { Header, Timeline, TimelineHeader, Message } from '../components';
import { getBoardList, getBoardContentAnalyzePretty, getBoardContentCollocationPretty } from '../lib/toServer';

interface BoardType {
    pk: number;
    user: string;
    title: string;
    content: string;
    background_color: string;
    color: string;
    created: string;
    updated: string;
}

interface MainState {

    boardList: BoardType[];
}

export default class IndexContainer extends React.Component <{}, MainState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            boardList : []
        };
        this.onClickToGetKeywordAnalys = this.onClickToGetKeywordAnalys.bind(this);
    }

    componentDidMount() {
        getBoardList()
        .then(response => {
            this.setState({
                boardList : response.data,
            });
        })
        .catch(error => window.console.log(error));
    }

    onClickToGetKeywordAnalys(id: number) {
        getBoardContentAnalyzePretty(id)
        .then((response) => window.console.log(response.data.result.split(',')))
        .catch((error) => window.console.log(error));
        getBoardContentCollocationPretty(id)
        .then((response) => window.console.log(response.data.result.split(',')))
        .catch((error) => window.console.log(error));
    }

    render() {
        return (
            <div>
                <Header />
                
                <div className="container">
                    <TimelineHeader />
                    <Message />
                    <div id="timeline">
                        {
                            this.state.boardList.map((item, index) => {    
                                if (index % 2 === 0) {
                                    return (
                                        <Timeline
                                            key={index}
                                            pk={item.pk}
                                            title={item.title}
                                            content={item.content}
                                            right={''}
                                            onclick={this.onClickToGetKeywordAnalys}
                                        />
                                    );
                                } else {
                                    return (
                                        <Timeline
                                            key={index}
                                            pk={item.pk}
                                            title={item.title}
                                            content={item.content}
                                            right={'right'}
                                            onclick={this.onClickToGetKeywordAnalys}
                                        />
                                    );
                                }}
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}