# soeasy-reactjs-redux
Sample application for React.js and Redux

### Installation

```
git clone https://github.com/aizzouke/soeasy-reactjs-redux.git
npm install
```

### Run the application

To run it in localhost :

```
npm run developement

Then Launch http://localhost:3000
```

To build production sources :

```
npm run production
```

### Features
- Simple SPA structure based on ReacT.js and Redux

- Post configuration file : the configuration file is called __configuration.js__ it contains some generic parameters used in the app. To this file, we can add any other parameters we want

- Http requests : we use __Axios__ and a custom __HttpHelper__ to consume a fake rest api

- I18n : I've also created a component to manage multi-language. You should know that two languages are available (en (default) and fr). You can add any other language in __./src/static/locales/translations.json__. To test it put the added language code in __configuration.js__

- Eslinting : Based on _AirBnb__ configurtion

### It looks like 

![alt text](https://github.com/aizzouke/soeasy-reactjs-redux/blob/master/it_look_like.png)

### Thanks To 

```
{ JSON : Placeholder }

Fake Online REST API for Testing and Prototyping 
```

https://jsonplaceholder.typicode.com/

### You need help ?
Contact me : a.iz@outlook.com 
