import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './todo-list-item.css'


class TodoListItem extends Component {
    // onLabelClick = () => {
    //     this.setState({
    //       done: true
    //     })
    // };

    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     })
    // };
    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         }
    //
    //     })
    // };

    // constructor() {
    //     super();
    //
    //     this.onLabelClick = () => {
    //         console.log(`asasdf ${this.props.label}`)
    //     }
    // }

    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                <span
                    onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button"
                        onClick={onDeleted}
                >
                    <i className="fa fa-trash-o"></i>
                </button>

                <button type="button"
                        onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>
            </span>
        )
    };
}

export default TodoListItem;

// const TodoListItem = ({label, important = false}) => {
//     const style = {
//         color: important ? 'tomato' : 'black'
//     };
//     return (
//         <span style={style}>
//             {label}
//             <button type="button">
//                 <i className="fa fa-trash-o"></i>
//             </button>
//
//             <button type="button">
//                 <i className="fa fa-exclamation"></i>
//             </button>
//         </span>
//     )
// };

