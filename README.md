## Frontend Testing

The frontend uses [jest](https://jestjs.io/docs/en/api) as its test runner and [enzyme](https://github.com/enzymejs/enzyme) to render React components in the enzyme test environment.

To run all frontend tests, run 
```
npm run test 
```

To run a specific frontend test, simply append the file name to the test command. 
```
npm run test -- <path/to/your/file.js>
```

In order to make writing test assertions easier and more robust, this project extends jest's built-in assertions with the [jest-enzyme](https://jestjs.io/docs/en/api) assertion library.