var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the Dog'
        },
        {
          id: 2,
          text: 'Clean the House'
        },
        {
          id: 3,
          text: 'Take out the trash'
        },
        {
          id: 4,
          text: 'Wash the Windows'
        }
      ]
    }
  },
  handleAddToDo: function (text) {
    alert('new todo: ' + text);
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
