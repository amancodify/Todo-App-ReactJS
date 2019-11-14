import React, { Component } from 'react'
import TodoItems from './TodoItems'

//---------------------------Commented Code below is also correct its a class component way of doing--------------------------

// export default class TodoList extends Component {
//     render() {
//         const { items, clearList, handleDelete, handleEdit, handleItemChecked } = this.props
//         return (
//             <ul className="list-group my-5">
//                 <h3 className="text-center">Todo List</h3>
//                 {
//                     items.map(item => {
//                         return <TodoItems 
//                         key={item.id} 
//                         title={item.title}
//                         completed={item.completed}
//                         handleDelete={()=>handleDelete(item.id)}
//                         handleEdit={()=>handleEdit(item.id)}
//                         handleItemChecked={()=>handleItemChecked(item.id)}
//                         />

//                     })
//                 }


//                 <button type="button" className="btn btn-block btn-danger mt-5" onClick={clearList}>Clear Items</button>
//             </ul>

//         );
//     }
// }

const TodoList = ({ items, clearList, handleDelete, handleEdit, handleItemChecked }) => {
    return (
        <ul className="list-group my-5">
            <h3 className="text-center title">TASK LIST</h3>
            {
                items.map(item => {
                    return <TodoItems 
                    key={item.id} 
                    title={item.title}
                    completed={item.completed}
                    handleDelete={()=>handleDelete(item.id)}
                    handleEdit={()=>handleEdit(item.id)}
                    handleItemChecked={()=>handleItemChecked(item.id)}
                    />

                })
            }


            <button type="button" className="btn btn-block btn-danger mt-5" onClick={clearList}>Clear Items</button>
        </ul>

    );
}
export default TodoList;
