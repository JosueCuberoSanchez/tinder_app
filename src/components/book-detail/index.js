import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

class BookDetail extends Component {

    render() {

        if (this.props.book === '') {
            return (
                <div>Select a book to display its details</div>
            )
        } else {
            return (
                <div>
                    <h3>Details for: </h3>
                    <div>{this.props.book.title}</div>
                    <div>{this.props.book.pages}</div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {book: state.activeBook};
};

export default connect(mapStateToProps)(BookDetail);