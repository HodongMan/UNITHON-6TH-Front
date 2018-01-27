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
        .then((response) => {
            const modal: HTMLElement | null = document.getElementById('modal_content_one');
            if (modal) {
                modal.textContent = response.data.result;
            }
        })
        .catch((error) => window.console.log(error));
        getBoardContentCollocationPretty(id)
        .then((response) => {
            const modal: HTMLElement | null = document.getElementById('modal_content');
            if (modal) {
                modal.textContent = response.data.result.slice(0, response.data.result.length - 1);
            }
        })
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