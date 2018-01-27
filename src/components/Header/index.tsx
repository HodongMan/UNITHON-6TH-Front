import * as React from 'react';

export default class Header extends React.PureComponent<{}, {}> {

    render() {
        return (
            <header>
                <div className="container">
                    <h1 className="logo">
                        BRUNO<span>RODRIGUES</span>
                    </h1>
                    <section className="social">
                        <a className="btn" href="https://www.github.com/itbruno">Github</a>
                        <a className="btn" href="https://www.twitter.com/_brunoweb">Twitter</a>
                    </section>
                </div>
            </header>
        );
    }
}