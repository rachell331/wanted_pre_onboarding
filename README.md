# Wanted Pre-Onboarding Assignment
✨ 
✨ 



## 1. Settings
1. install

```
yarn create react-app wanted-pre-onboarding
```

2. Router

```
yarn add react-router-dom
```

3. styled-components

```
yarn add styled-components
```

4. prettier & eslint-plugin install

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier
```

5. `.eslintrc.json`

```
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-var": "warn",
    "no-multiple-empty-lines": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "eqeqeq": "warn",
    "dot-notation": "warn",
    "no-unused-vars": "warn",
    "react/destructuring-assignment": "warn",
    "react/jsx-pascal-case": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-key": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": false
      }
    ]
  },
}
```

6. `prettierrc.json`

```
{
  "tabWidth": 2,
  "endOfLine": "lf",
	"arrowParens": "avoid",
	"singleQuote": true,
}
```

7. `.vscode/setting.json`

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.tabSize": 2,
  "editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
	"javascript.format.enable": false,
	"eslint.alwaysShowStatus": true,
	"files.autoSave": "onFocusChange"
}
```

8. `.gitignore`

```
.eslintcache
.vscode
.eslintrc
.prettierrc
```

9. Others install

```
yarn add styled-reset // reset style install
yarn add react-icons // to use icons
```

## 2. Directory Structure
```
.
├── build
│   ├── data
│   └── static
├── public
│   └── data
└── src
    ├── assets
    ├── components
    ├── pages
    └── styles
```

## 3. Features
- Navigation Bar
- Main Slider

### 3-1. Common
- Using Navigation Common Component

### 3-2. Main
- Data Fetching with **Mockup Data in Array**
- 📎 **Line Chart**
  - 

## 4. Build
```jsx
yarn build
```
❇️ netlify continuous deployment

## 5. Git-Issue
branch name `master` to `main
master ↔️ main
```
1. git add .
2. git commit -m “Add: Initial settings completed”
3. git branch -M main
4. git remote add origin “repository url”
5. git push origin main -f / git push -u origin main
```
