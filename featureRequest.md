What should create-rboil do? (general long term feature requests)

Hi,

I was just wondering whether users have any specific features they would like in a React boilerplate CLI. These are some of the features I was considering adding:

- A command to create a new file and associated tests in the source file. For example:
```
rboil gen my-filename
```
Creating:
```
my-app:
├── node_modules
├── package.json
├── .babelrc.json
├── .gitignore
├── public
│   └── template.html
└── src
    ├── App.js
    ├── App.test.js
    ├── index.js
    └── components
        └── ${my-filename}
            ├── ${my-filename}.js
            └── ${my-filename}.test.js
```

