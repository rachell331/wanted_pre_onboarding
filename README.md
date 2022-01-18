# Wanted Pre-Onboarding Assignment
✨ 
✨ 



## 1. Settings
1. install

```jsx
yarn create react-app my-app --template typescript
```

2. `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "es2016",
    "jsx": "react-jsx",
    "noImplicitAny": true,
    "module": "esnext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"]
}
```

3. `.eslintrc.json`

```jsx
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    //"prettier/@typescript-eslint" 
//prettier/@typescript-eslint has been removed in eslint-config-prettier v8.0.0.
  ]
}
```

4. `.vscode/setting.json`

```jsx
{
  "eslint.validate": [
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
  "javascript.format.enable": false,
  "typescript.format.enable": false
}
```

5. `.gitignore`

```jsx
.eslintcache
.vscode
.eslintrc
.prettierrc
```

6. Others install

```jsx
yarn add react-router-dom @types/react-router-dom  //router
yarn add styled-components @types/styled-components //style components
yarn add styled-reset // reset style install
```
<br />

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
- User Report Chart 
- PassengerList InfiniteScroll

### 3-1. Common
- Select Types using Interface & Generic
- Create common style attributes using GlabalStyle, Themeprovieder
- Using Navigation Common Component

### 3-2. Chart
- Data Fetching with **Axios**
- 📎 **Line Chart**
  - Calculate slope using **Math.tan, Math.cos**
  - Calculate position & width using **calc** & attributes transferred to the **props**.
- 📎 **Bar Chart**
  - Get maximum vale of array : using **apply()**
  - Calculate the ratio by dividing the elements in each array by the maximum value.
  - Each Diagram Bar : [Total height * ratio]

### 3-3. InfiniteScroll
- When the user's scroll touches the floor, add data.
- 📎 **moreFetchData function**
  - Get additional data when scrolling.
- 📎 **infiniteScroll function**
  - Reuse the funcion **useCallback**
  - Using **scrollTop, scrollHeight, clientHeight** : When `scrollTop+scrollHeight >= clientHeight` Callback function execution.
- 📎 **getFetchData function**
  - Insert data that is called **useEffect()**
  - Save data received through **axios** in the `result` variable, increase by pageNumber + 1

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
