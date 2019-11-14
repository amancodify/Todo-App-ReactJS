import React, { Component } from 'react'

//---------------------------Commented Code below is also correct its a class component way of doing--------------------------
// export default class TodoInput extends Component {
//     render() {
//         const { item, handleChange, handleSubmit, editItem } = this.props
//         return (
//             <div className="card">
//                 <div className="card-body">
//                     <div className="my-3">
//                         <form onSubmit={handleSubmit}>
//                             <div className="input-group">
//                                 <div className="input-group-prepend">
//                                     <div className="input-group-text bg-primary text-white">
//                                         <i className="fas fa-book" />
//                                     </div>
//                                 </div>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Add A Todo Item"
//                                     value={item}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <button type="submit"
//                                 className={
//                                     editItem
//                                         ? "btn btn-block btn-success mt-3"
//                                         : "btn btn-block btn-primary mt-3"}>
//                                 {editItem ? 'Update Item' : 'Add Item'}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="my-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book" />
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Add A Todo Item"
                                value={item}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit"
                            className={
                                editItem
                                    ? "btn btn-block btn-success mt-3"
                                    : "btn btn-block btn-primary mt-3"}>
                            {editItem ? 'Update Item' : 'Add Item'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default TodoInput;