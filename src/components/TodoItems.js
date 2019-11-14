import React, { Component } from 'react'


//---------------------------Commented Code below is also correct its a class component way of doing--------------------------

// export default class TodoItems extends Component {
//     render() {
//         const { title, completed, handleDelete, handleEdit, handleItemChecked } = this.props;
//         return (

//             <li className="list-group-item text-capitalize d-flex justify-content-between my-2" id = 'item-list'>
//                 <h6 className={completed?"completed":"notcompleted"} onClick = {handleItemChecked}>{title}</h6>
//                 <div className="todo-icon">
//                     <span className="mx-2 text-success edit" onClick={handleEdit}>
//                         <i className="fas fa-pen"></i>
//                     </span>
//                     <span className="mx-2 text-danger deldel" onClick={handleDelete}>
//                         <i className="fas fa-trash"></i>
//                     </span>
//                 </div>
//             </li>
//         );
//     }
// }

const TodoItems = ({ title, completed, handleDelete, handleEdit, handleItemChecked }) => {
    return (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2" id='item-list'>
            <h6 className={completed ? "completed" : "notcompleted"} onClick={handleItemChecked}>{title}</h6>
            <div className="todo-icon">
                <span className="mx-2 text-success edit" onClick={handleEdit}>
                    <i className="fas fa-pen"></i>
                </span>
                <span className="mx-2 text-danger deldel" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </span>
            </div>
        </li>
    );
}

export default TodoItems;