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
          text: 'Walk the Dog',
          completed: true
        },
        {
          id: uuid(),
          text: 'Clean the House',
          completed: true

        },
        {
          id: uuid(),
          text: 'Take out the trash',
          completed: false

        },
        {
          id: uuid(),
          text: 'Wash the Windows',
          completed: false
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
          text: text,
          completed: false
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
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos:updatedTodos});
  },
  render: function () {

    var {todos} = this.state;

    return (
      <div className="columns medium-6 large-4 small-centered">
        <h1>Todo App</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
