import React from "react";

class Homepage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        // this.getPopularCard = this.getPopularCard.bind(this);
    }


    componentDidMount() {
       console.log('mounted');
    }


    render() {
        return (
            <div>
                <h1>homepage</h1>
            </div>

        )
    }
};

export default Homepage;
