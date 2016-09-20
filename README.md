Federal Prototype
============
![Build Status](https://travis-ci.org/CenterForOpenScience/Federal-Prototype.svg?branch=master)

### Overview
* The Federal Prototype Project was a project that was centered around a new government mandated that states that any research that is funded by the government must not be behind a paywall.

* The problem that we are addressing is that this mandate was put into place but there was never  platform that was created to do that, that is where we come in. 

* We created an API with endpoints that anyone can connect to and hook into their system
* We also made a front end that can handle all of our sites backend with some added features.

### Setup
Globally install the ember CLI @ v2.6, then install all required frontend packages

- `$npm install -g ember-cli@2.6`
- `$npm install`
- `$bower install`

Make a new virtualenv, install the required python packages via pip, then remake the migrations and start the server.

- `$ mkvirtualenv <federal prototype venv>`
- `$ pip install -r requirements.txt`
- `$ python backend/manage.py makemigrations api`
- `$ python backend/manage.py migrate`

Install ember-osf in your home directory (assuming that federal-prototype is also installed in your home directory), and don’t forget to npm link ../../ember-osf from the frontend directory of this repo.
- `$ ember install ../../ember-osf`
- `$ npm link ../../ember-osf`

You may need to generate blueprints for some of this project's dependencies.

- `ember generate ember-osf`
- `ember generate ember-cli-dynamic-forms`

## Developer's Notes
###Backend
API endpoints:

* Department
 * Individual department within an organization where metadata form layout is saved.
Acts as a usergroup in terms of permissions (NOT YET IMPLEMENTED)
* Usertype
 * Linked one-to-one with Users (a built-in Django model), determines whether a user is a moderator or researcher.
* Grant
 * All information for a particular grant is stored here, meaning the grant ID, the department associated with the grant, the document associated with the grant, and the researcher associated with the grant, along with all the metadata required about the document attached to the grant (specific to the grant’s department).
* Document
 * Contains a link/access to the file (which is stored on the OSF).

### Frontend
Routes

* Researcher
 * Grant (make new grant(s), upload document)
 * Metadata (add metadata associated with grant)
 * Index
* Settings
 * Api (review some of the basics of our public API)
 * Metadata (use a JSON-form-builder to construct/edit a metadata form)
* Login
 * Self-explanatory
* Moderator
 * I forget?

### General Workflow
![some text](https://raw.githubusercontent.com/Rytiggy/Federal-Prototype/master/Federal%20Prototype%20Documentation%20(1).png)

### Researcher `Upload Document` Workflow
![some text](https://raw.githubusercontent.com/Rytiggy/Federal-Prototype/master/Federal%20Prototype%20Documentation.png)

## Future Ideas
1. Further implementation of GUI Form builder 
2. Editable status filters 
3. More options to settings page 
4. Json to from builder Xml (so if you update the json maulay it will update the xml)

## Major Libraries 
1. FormBuilder https://formbuilder.online/
2. BootstrapGrowl http://ifightcrime.github.io/bootstrap-growl/

## To dos
1. Authentication, Permissions
2. Allow multiple grants per document (front and backend)
3. Metadata Form Builder, get json format to be able to build xml for drag and drop form
