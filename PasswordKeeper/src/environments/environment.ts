// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAEeIIRVYw6eA5btQovnmgDz1NcOYIZUzg",
    authDomain: "moorect-password-keeper.firebaseapp.com",
    databaseURL: "https://moorect-password-keeper.firebaseio.com",
    projectId: "moorect-password-keeper",
    storageBucket: "moorect-password-keeper.appspot.com",
    messagingSenderId: "116185973242"
  },
  rosefireRegistryToken: "43de9247-b500-4810-b16f-66f123152ccc"
};
