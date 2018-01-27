import * as React from 'react';

interface Props {
    pk: number;
    title: string;
    content: string;
    right: string;
    onclick: Function;
}

export default class Timeline extends React.PureComponent<Props, object> {

    render() {
        const right: string = `timeline-content ${this.props.right}`;
        return (
            <div className="timeline-item">
                <div className="timeline-icon" />
                <div className={right}>
                    <h2>{this.props.title}</h2>
                        <p>
                            {this.props.content}
                        </p>
                    <a 
                        href="/" 
                        className="btn"
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onclick(this.props.pk);
                        }}
                    >
                        button
                    </a>
                </div>
            </div>
        );
    }
}
