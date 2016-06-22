import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {

    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
    }
    
    var todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(()=> {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
