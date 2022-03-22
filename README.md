# REACT APP LIBRARY 
> Not using Create-React-App

## Setup

```properties
npm init
npm install --save-dev react react-dom
mkdir src
touch .gitignore
echo node_modules > .gitignore
```

### Storybook

Install and configure Storybook

```properties
npx sb init
```

- Remove default files and folders created in the project
- You could install more plugins but on this guide we will not use them.

### Adding eslint and prettier

```properties
npm install --save-dev eslint
npx eslint --init
npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
```
 After installing above, make changes to .eslintrc file.

```javascript
 "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"]
 ```

### Adding Rollup

```properties
 npm install --save-dev rollup rollup-plugin-babel rollup-plugin-node-resolve rollup-plugin-peer-deps-external @rollup/plugin-babel @babel/preset-react
 npm install --save-dev rollup-plugin-postcss
 npm install --save-dev rollup-plugin-terser
```



### Adding Script 

```properties
npm run build-lib
```

## Set Verdaccio
```properties
npm set registry http://ec2-54-227-233-82.compute-1.amazonaws.com:4873/
npm login
```
