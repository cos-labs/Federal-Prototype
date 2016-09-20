Federal Prototype
============
![Build Status](https://travis-ci.org/CenterForOpenScience/Federal-Prototype.svg?branch=master)

## Overview

The Federal Prototype Project is centered around a new government mandate. This mandate states that any research that is funded by the government must not be behind a paywall. There has been no platform created to facilitate this proccess. It is a primary objective of this project to develop a user frindly API for other software to make use of. A user-friendly interface has also been developed to allow users to make use of this API, even though other software may not exist to do so yet.

## Setup

The following comprise the steps to run this software locally for those that wish to develop with this project.
Assuming `$FED_PROTO` is the root of this repository.

- `cd $FED_PROTO/frontend`
- `$ npm install -g ember-cli@2.6`
- `$ npm install`
- `$ bower install`

Make a new virtual environment, install the required python packages via pip, then remake the migrations and start the server.

- `cd $FED_PROTO/backend`
- `$ mkvirtualenv <federal prototype venv>`
- `$ pip install -r requirements.txt`
- `$ python backend/manage.py makemigrations api`
- `$ python backend/manage.py migrate`

Install ember-osf. Assuming ember-osf will be or is installed in the same directory as Federal-Prototype;

- `cd $FED_PROTO && cd ..`
- `git clone https://github.com/CenterForOpenScience/ember-osf.git`

Link ember-osf to Federal-Prototype.

- `cd $FED_PROTO/frontend`
- `$ ember install ../../ember-osf`
- `$ npm link ../../ember-osf`

Blueprints may need to be generated for some of this project's dependencies.

- `cd $FED_PROTO/frontend`
- `ember generate ember-osf`
- `ember generate ember-cli-dynamic-forms`

To run this project, the ember server needs to be started, as does the django backend. It may be helpful to specify which backend to use for ember. Backends are defined in `$FED_PROTO/frontend/config/local.yml`. Running the local backend will require running OSF, Waterbutler, and CAS to be running locally. See the respective documentation for more information on this software.

- `python $FED_PROTO/backend/manage.py runserver`
- `export BACKEND=stage` *It may be convenient to add this line at the end of the virtual environment's `activate.sh`, which would cause `BACKEND` to be set whenever the virtual environment is activated. Other programns that alter the environment, or resetting the environment may cause this evironment variable to be unset.*

Build and run the frontend.

- `cd $FED_PROTO/frontend && ember server`

## Developer's Notes

### Backend

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
 * API (review some of the basics of our public API)
 * Metadata (use a JSON form builder to construct/edit a metadata form)
* Login
 * Self-explanatory
* Moderator
 * (documentation incomplete)

### General Workflow
![some text](https://raw.githubusercontent.com/Rytiggy/Federal-Prototype/master/Federal%20Prototype%20Documentation%20(1).png)

### Researcher `Upload Document` Workflow
![some text](https://raw.githubusercontent.com/Rytiggy/Federal-Prototype/master/Federal%20Prototype%20Documentation.png)

## Future Ideas
1. Further implementation of GUI Form builder 
2. Editable status filters 
3. More options to settings page 
4. JSON to from builder XML (so if you update the json maulay it will update the XML)

## Major Libraries 
1. FormBuilder https://formbuilder.online/
2. BootstrapGrowl http://ifightcrime.github.io/bootstrap-growl/

****************

> #### TODO
> 1. Authentication, permissions
> 2. Allow multiple grants per document (front and backend)
> 3. Metadata form builder, get JSON format to be able to build XML for drag and drop form
