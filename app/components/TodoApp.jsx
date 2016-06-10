var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the Dog'
        },
        {
          id: uuid(),
          text: 'Clean the House'
        },
        {
          id: uuid(),
          text: 'Take out the trash'
        },
        {
          id: uuid(),
          text: 'Wash the Windows'
        }
      ]
    }
  },
  handleAddToDo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {

    var {todos} = this.state;

    return (
      <div className="columns medium-6 large-4 small-centered">
        <h1>Todo App</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
