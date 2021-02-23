# HackYourFuture.dk

![content](/static/logo-dark.svg)

This is a fork from [Kevin's repo](`https://github.com/kevinsimper/hackyourfuture.dk`)

To preview on Heroku hosting [`https://hyf-dk.herokuapp.com/`](https://hyf-dk.herokuapp.com/)


### Why Next.js

nodejs is react server-rendering universal-rendering.
It is a framework that most notably allows you to
write server-rendered React apps easily – amongst other cool things.
Also one of the most important features is SEO-friendly.

### Run project
Set the node_env. This is how you do in git bash:
`export NODE_ENV=develop`
`cmder`
`set NODE_ENV=develop`
Now you can run 
`npm run start`
or run
`nodemon`

#### Dependencies vs devDependencies
All modules that are used by heroku must be in dependencies! 
Fx `compression-webpack-plugin`, `node-sass`, `sass-loader`. Are all in dependencies.
The issue is this: https://github.com/zeit/next.js/issues/6478 and this: https://github.com/zeit/next.js/issues/198

### Staging environment
The develop branch automatically deploys to https://dashboard.heroku.com/apps/test-hackyourfuture-dk
This heroku app is registred at staging.hackyourfuture.dk with the NODE_ENVIRONMENT set to develop

### project structure refs
The project is depend on Next.js & Express.js, and here is a tutorial
about the same structure using both next.js and express.js
* [custom-server-express](https://github.com/zeit/next.js/tree/canary/examples/custom-server-express)
* [external styled jsx sass](https://github.com/zeit/next.js/tree/canary/examples/with-external-styled-jsx-sass)
* [material UI width nextjs](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)
#### Website Fonts

there is two basic fonts: Space Mono, and Work Sans

```
 @import url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');
 //font-family: 'Space Mono', monospace;
 //font-family: 'Work Sans', sans-serif;
```

#### UI components

Many components are coming from [Material UI](https://material-ui.com)

## project structure:

![structure](/static/readme/project-structure.png)

- `server.js` is the entry point for this project, which is node.js server based on express.js
- the `backend` folder contains express.js routes where we can connect the database later and create our API
- `static` folder contains the assets like: images, fonts, icons...
- `pages` folder contains the next.js files. Each one of the represent
  a route or a link at the website. For example: about.js file on the root of this folder represents `hackyourfuture.dk/about`
  and so on. We can also make sub-folders contains files to create links like `hackyourfuture/folder-name/file-name`
- `components` folder contains our react components.
  we are importing these components at `pages` files.

### pages content

most of pages content is comming from `components/content/...`
content is stored in these files as variables. and at `pages` we are importing them
`marked` module is used to convert the content from markup to html
and the component `<content>` is the wrapper div for them
example:
  
 ![content](/static/readme/content.png)

Many components are using data coming from `json` files. You can find these files in the same component folder.

**Note:**
_These files are temporary, and the real date will come later from database_

### JSX styling

the default way to add `css` for components with next.js is `jsx`
at the components we can add something like:

```
<style jsx>{`
  body {
    font-size : 16px;
  }
`}
</style>
```

### Navbar

![content](/static/readme/navbar.png)

> components/navbar

This component is a `Material-UI` component. you can read more about it 
[here](https://material-ui.com/demos/app-bar/).

the content exists at ``links.json`` file at the same component folder.
Some menus has sub menus which are 
[Material UI Menus component](https://material-ui.com/demos/menus/)

When is screen is small you will see hamburger icon, which opens left menu, 
which is [Drawer Material UI component](https://material-ui.com/demos/drawers/)

![content](/static/readme/navbar2.png)

## Members card
![card-memeber](/static/readme/card-member.png)

This component is exists under ``team/card-member`` 
and it is responsible for viewing each of: 
- team ``components/team/index.js``
- core team ``components/core-team/index.js``
- alumni ``components/hire/index.js`` at hire page

## Icons
![icons](/static/readme/icons.png)

At ``static/social-icons/font`` there is an icons font contains some social icons.
These icons collected from [flaticon.com](https://www.flaticon.com/)

Usage example: ```<i className="flaticon-twitter-logo" />```

## Hire page

![hire](/static/readme/filter.png)

``alumni.json`` file contains temporary list of alumni. 
At ``components/hire/index.js`` we view them with a drop-down 
menu for filtering them according to there skills. The current options
at this list are coming from tags at alumni array.
