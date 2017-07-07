import { Dispatcher } from './flux';

const controlPanelDispatcher = new Dispatcher();

document.getElementById('userNameInput').addEventListener('input', ({target}) => {
  const name = target.value;
  console.log('Dispatching...', name);

  controlPanelDispatcher.dispatch('TODO_UPDATE_NAME');
});

document.forms.fontSizeForm.fontSize.forEach(element => {
  element.addEventListener('change', ({target}) => {
    controlPanelDispatcher.dispatch('TODO_UPDATE_FONT');
  });
});

controlPanelDispatcher.register(action => {
  console.info("Received action....", action);
});
