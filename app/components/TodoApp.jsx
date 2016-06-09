var React = require('react');
var TodoList = require('TodoList');

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
  render: function () {

    var {todos} = this.state;

    return (
      <TodoList todos={todos}/>
    )
  }
});

module.exports = ToDoApp;
