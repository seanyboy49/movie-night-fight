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

## Writing effective tests

#### Snapshot tests

Snapshot tests are a really effective way to guard against visual regressions in your React Component's rendered html.

```
const wrapper = shallow(<MyComponent {...props} />)

expect(wrapper).toMatchSnapshot()
```

The first time you run this test, it will generate a snapshot which will be committed to git. If you change the rendered html of you Component in the future, the snapshot will fail. If you want to update this snapshot, use the `-u` flag in the testing shell.
