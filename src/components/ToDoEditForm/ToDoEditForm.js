import React from 'react';

class toDoEditForm extends React.Component {
    render () {
        return(
            <div>
                Edit form for {this.props.match.params.itemId}
            </div>
        )
    }
}

export default toDoEditForm;