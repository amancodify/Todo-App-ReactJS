import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, item, items } = this.state;
    const newItem = {
      id: id,
      title: item,
      completed: false
    }
    const updatedItems = [...items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    })
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id)

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  };

  handleItemChecked = (id) => {
    const iterateItems = this.state.items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    })
    this.setState({
      items: iterateItems
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center title">TODO APP</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleItemChecked={this.handleItemChecked}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;