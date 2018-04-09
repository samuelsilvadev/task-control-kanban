// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDlJJH67lJXvgGon7oxi7lG1VxnuBv-xg8',
    authDomain: 'task-control-kanban.firebaseapp.com',
    databaseURL: 'https://task-control-kanban.firebaseio.com',
    projectId: 'task-control-kanban',
    storageBucket: 'task-control-kanban.appspot.com',
    messagingSenderId: '440784810409'
  }
};
