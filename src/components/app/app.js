import React, {Component} from 'react'
import AppHeader from "./../../components/app-header/app-header"
import SearchPanel from "./../../components/search-panel/search-panel";
import TodoList from "./../../components/todo-list/todo-list";
import ItemStatusFilter from "./../../components/item-status-filter/item-status-filter"
import AddNewItem from "./../../components/add-new-item/add-new-item";

class App extends Component {
    maxId = 100;
    state= {
        todoData : [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Make App'),
            this.createTodoItem('Eat')
            ]
    };
    createTodoItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++,
            done: false
        }
    };
    deleteItem = (id) => {
        this.setState(({todoData}) =>{
            const index = todoData.findIndex((el)=> el.id === id);
            const before = todoData.slice(0, index);
            const after = todoData.slice(index +1);
            const newArr = [...before.slice(0, index), ...after.slice(index)];
            return {
                todoData:newArr
            }

        })
    };
    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData})=> {
            const newArr =[
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        });
    };

    onToggleImportant = (id) => {
        console.log('Importatnt', id)
    };

    onToggleDone = (id) => {
        console.log('Done', id)
    };
    render() {
        return (
            <div>
                <AppHeader toDo={'1'} done={'2'}/>
                <SearchPanel/>
                <ItemStatusFilter/>
                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <AddNewItem onItemAdded={this.addItem}/>
            </div>
        )
    }
}

export default App;
// const App = () => {
//     const todoData = [
//         {label: 'Drink Cofee', important: false, id: 1},
//         {label: 'Make App', important: true, id: 2},
//         {label: 'Eat', important: false, id: 3},
//     ];
//
//     return (
//         <div>
//             <AppHeader toDo={'1'} done={'2'}/>
//             <SearchPanel/>
//             <ItemStatusFilter/>
//             <TodoList todos={todoData}
//                       onDeleted={(id) => {
//                           console.log(`deleted ${id}`)
//                       }}/>
//         </div>
//     )
// };


