import React, {Component} from 'react';


class ItemStatusFilter extends Component {

    render() {
        return (
            <div>
                <button type="button">
                    All
                </button>
                <button type="button">
                    Active
                </button>
                <button type="button">
                    Done
                </button>
            </div>
        )
    }
};

export default ItemStatusFilter;

// const ItemStatusFilter = () => {
//     return (
//         <div>
//             <button type="button">
//                 All
//             </button>
//             <button type="button">
//                 Active
//             </button>
//             <button type="button">
//                 Done
//             </button>
//         </div>
//     )
// };

