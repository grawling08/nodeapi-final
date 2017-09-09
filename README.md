
# 4LOOP MEAN

# ![MEAN Logo](https://www.mysql.com/common/logos/logo-mysql-170x115.png)  <img src="https://mariadb.org/wp-content/uploads/2015/10/mariadb-usa-inc.png" width="200px" />

<img src="http://mean.io/wp-content/themes/twentysixteen-child/images/express.png" width="200px" />![MEAN Logo](https://code-maven.com/img/angularjs.png) <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="100px" height="100px" />


4LOOP MEAN is a framework for an easy starting point with [MySQL](https://www.mysql.com/) / [MariaDB](https://mariadb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](https://angularjs.org/) based applications. It is designed to give you a quick and organized way to start developing MEAN based web apps with useful modules pre-bundled and configured.

## Prerequisite Technologies
### Linux
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started. We recommend node-4.x as the preferred node version to run mean.io.
* *MongoDB* - <a href="https://www.mongodb.org/downloads">Download</a> and Install mongodb - <a href="https://docs.mongodb.org/manual/">Checkout their manual</a> if you're just starting.

If you're using ubuntu, this is the preferred repository to use...

```bash
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get update
$ sudo apt-get install nodejs
```

* *Git* - Get git using a package manager or <a href="http://git-scm.com/downloads">download</a> it.

### Windows
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.
* *MongoDB* - Follow the great tutorial from the mongodb site - <a href="https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/">"Install Mongodb On Windows"</a>
* *Git* - The easiest way to install git and then run the rest of the commands through the *git bash* application (via command prompt) is by downloading and installing <a href="http://git-scm.com/download/win">Git for Windows</a>

### OSX
* *Node.js* -  <a href="http://nodejs.org/download/">Download</a> and Install Node.js or use the packages within brew or macports.
* *MongoDB* - Follow the tutorial here - <a href="https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/">Install mongodb on OSX</a>
* *git* - Get git <a href="http://git-scm.com/download/mac">from here</a>.

## Prerequisite packages

* Mean currently uses gulp as a build tool and bower to manage frontend packages.
```
$ npm install -g gulp
// and bower
$ npm install -g bower
```

## Installation
To start with MEAN 

1. Download the repository
2. Install npm modules: 
```bash
$ npm install
```
3. Install bower dependencies 
```bash
$ bower install
```
4. Start up the server: 
```bash
$ node index
```
5. Then, open a browser and go to:
```bash
http://localhost:3000
```

### Running on a different port
If you have a node, or other MEAN project already running, you may need to use a different port. You can set the port and start your new MEAN project with one command:
```bash
$ export PORT=3001 && node index
```

Then, open a browser and change the port number before you visit:
```bash
  http://localhost:3001
```

### Troubleshooting
During installation depending on your os and prerequisite versions you may encounter some issues.

Most issues can be solved by one of the following tips, but if you are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Gulp
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```bash
$ npm update -g npm
```

* Updating Gulp:
```bash
$ npm update -g gulp
```

* Updating Bower:
```bash
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```bash
$ npm cache clean
```

* Bower Clean Cache:
```bash
$ bower cache clean
```

#### Installation problems on Windows 8 / 8.1
Some of Mean.io dependencies uses [node-gyp](https://github.com/nodejs/node-gyp) with supported Python version 2.7.x. So if you see an error related to node-gyp rebuild follow next steps:

1. install [Python 2.7.x](https://www.python.org/downloads/)
2. install [Microsoft Visual Studio C++ 2012 Express](http://www.microsoft.com/en-us/download/details.aspx?id=34673)
3. Run NPM update

```bash
$ npm update -g
```

#### Git "not found" on Windows
If you get this error when trying to `mean init`:

```text
Prerequisite not installed: git
```

And you definitely have Git for Windows installed, then it's not included in your path. Find the folder containing git.exe (likely `C:\Program Files (x86)\Git\cmd`) and add it to your PATH.

## Technologies

### The MEAN stack

MEAN is an acronym for *M*ySQL/*M*ariaDB , *E*xpress.js , *A*ngular.js and *N*ode.js

<dl class="dl-horizontal">
<dt>MySQL/MariaDB</dt>
<dd>Go through <a href="https://www.mysql.com/">MySQL Official Website</a> or <a href="https://mariadb.org/">MariaDB Official Website</a> and proceed to its docs which should help you understand SQL better.</dd>
<dt>Express</dt>
<dd>The best way to understand express is through its <a href="http://expressjs.com/">Official Website</a>, particularly <a href="http://expressjs.com/">The Express Guide</a>; you can also go through <a href="http://stackoverflow.com/q/8144214/6115857">this StackOverflow thread</a> for more resources.</dd>
<dt>AngularJS</dt>
<dd>Angular's Official Website is a great starting point. CodeSchool and google created a <a href="https://www.codeschool.com/courses/shaping-up-with-angular-js">great tutorial</a> for beginners, and the angular videos by <a href="https://egghead.io/">Egghead</a>.</dd>
<dt>Node.js</dt>
<dd>Start by going through <a href="https://nodejs.org">Node.js Official Website</a> and the <a href="https://nodejs.org/en/docs/">documentation page</a> as well as <a href="http://stackoverflow.com/q/2353818/6115857">this StackOverflow thread</a>, which should get you going with the Node.js platform in no time.</dd>
</dl>

### Additional Tools
* <a href="https://github.com/mysqljs/mysql">Node MySQL</a> - A pure node.js JavaScript Client implementing the MySql protocol.
* <a href="http://passportjs.org/">Passport</a> - An authentication middleware for Node.js which supports authentication using a username and password, Facebook, Twitter, and more.
* <a href="http://getbootstrap.com/">Twitter Bootstrap</a> - The most popular HTML, CSS, and JS framework for developing responsive, mobile first projects.
* <a href="http://angular-ui.github.io/bootstrap/">UI Bootstrap</a> - Bootstrap components written in pure AngularJS


## Packages
### File structure
The file structure is similar to that of the MEAN project itself

`Fundamental` Files at the `root` of the package

**Server**

Packages are registered in the **app.js**
Defines package name, version and `mean=true` in the **package.json**

All of the Server side code resides in the `/app` directory.

    app       
    --- controllers   # Server side logic goes here
    --- daos          # Database Active Objects (Database Queries logic goes here)
    --- routes        # Rest api endpoints for routing
    --- views         # Swig based html rendering

All of the Server side configuration resides in the `/config` directory.

	config            # Configuration files
	--- environment   # node environment

All of the API documentation resides in the `/docs` directory.
     
     docs
     --- api   # swagger json file
	
**Client**

All of the Client side code resides in the `/public` directory.

There are 2 types for Client side setup:

1.)

    public
    --- assets        # JavaScript/CSS/Images (not aggregated)
    --- controllers   # Angular controllers
    --- config        # Contains routing files
    --- services      # Angular services (also directive and filter folders)
    --- views         # Angular views

2.)

	public
    --- assets                                 # CSS/Images (not aggregated)
    --- scripts      
	    ---- services                          # Angular services
	    ---- directives                        # Angular directives
   	    ---- filters                           # Angular filters
	    ---- config                            # Contains main routing files  
    --- modules                                # Angular views and controllers
	    ---- (feature)foldername
		----- feature.html                 # Angular View
		----- feature.modal.html           # Angular View
		----- feature.config.js            # Contains routing files
		----- controllers                  # Angular controllers
			----- feature.controller.js
		    

## Config
All the configuration is specified in the [config](/config/) folder,
through the [env](config/env/) files, and is orchestrated through the [meanio](https://github.com/linnovate/meanio) NPM module.
Here you will need to specify your application name, database name, and hook up any social app keys if you want integration with Twitter, Facebook, GitHub, or Google.

### Environmental Settings
To run with a different environment, just specify NODE_ENV:
```bash
$ NODE_ENV=test node index
```
or :
```bash
$ node index test
```
### Heroku
Before you start make sure you have the [Heroku toolbelt](https://toolbelt.heroku.com/)
installed.

Add the db string to the production env in *server/config/env/production.js*.

Create heroku app (if needed)
```bash
$ git init
$ git add .
$ git commit -m "initial version"

$ heroku apps:create
```

If you get missing module errors, install missing dependencies
```
npm i -S ms kerberos
npm update --save
git commit -m "save versions to package.json"
```

Push to heroku and configure
```
$ git push heroku master
$ heroku config:set NODE_MODULES_CACHE=false
$ heroku config:set NODE_ENV=production
$ heroku config:set CPU_COUNT=2
```
You can adjust the CPU_COUNT variable up or down based on how much memory your app is consuming, or leave it unset to fork a process for each CPU.

## More Information
  * Visit us at [4loop.ph](http://www.4loop.ph/).

## License
We believe that MEAN should be free and easy to integrate within your existing projects so we chose [The MIT License](http://opensource.org/licenses/MIT)
