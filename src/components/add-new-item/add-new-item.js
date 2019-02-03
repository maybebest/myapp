import React, {Component} from 'react';



class AddNewItem extends Component {

    render() {
        return (
            <div>
                <button onClick={()=> this.props.onItemAdded('asdfasdf')}>
                    Add New Item
                </button>
            </div>
        )
    }
}

export default AddNewItem;
