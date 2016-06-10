var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var ToDoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {

    var {todos} = this.state;

    return (
      <div className="columns medium-6 large-4 small-centered">
        <h1>Todo App</h1>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
