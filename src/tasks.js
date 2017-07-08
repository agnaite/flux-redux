import { generate as id } from 'shortid';
import { Dispatcher, ReduceStore } from './flux';

const tasksDispatcher = new Dispatcher();

const CREATE_TASK = 'CREATE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const SHOW_TASKS = 'SHOW _TASKS';

const createNewTaskAction = (content) => {
  return {
    type: CREATE_TASK,
    value: content
  }
}

const showTasksAction = (show) => {
  return {
    type: SHOW_TASK,
    value: show
  }
}

const completeTaskAction = (id, isComplete) => {
  return {
    type: COMPLETE_TASK,
    id,
    value: isComplete
  }
}

class TasksStore extends ReduceStore {
  getInitialState() {
    return {
      tasks: {
        id: id(),
        contents: 'get a job',
        complete: false
      },
      showComplete: true
    }
  }
  getState() {
    return this.__state;
  }
  reduce(state, action) {
    console.log("reducing...", state, action);
    return state;
  }
}

const TaskComponent = ({content, complete, id}) => (
  `<section>
    ${content} <input type='checkbox' name='taskCompleteCheck' data-taskid=${id} ${complete ? 'checked' : ''}>
  </section>`
)

const render = () => {
  const tasksSection = document.getElementById('tasks');
  const state = tasksStore.getState();
  console.log('state: ', state);
  const rendered = state.tasks
    .filter(task =>  state.showComplete ? true : !task.complete)
    .map(TaskComponent).join('');

  tasksSection.innerHTML = rendered;
}

const tasksStore = new TasksStore(tasksDispatcher);
tasksDispatcher.dispatch("TEST__DISPATCH");

render();
