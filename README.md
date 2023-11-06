### @chatwoot/ui

This is the [monorepo](https://turbo.build/repo/docs/handbook) for Chatwoot UI. The objective is to separate the frontend as an independent application, while the backend uses Rails as a service exclusively for API/websocket.


### Basic concepts

**Folder Structure:** The project is divided into two sections: `apps/` and `packages/`. The `apps/` folder contains the applications that the user interacts with directly, while the `packages/` folder contains libraries that are shared among these applications.

```
root-folder/
  apps/
    @chatwoot/app1
      package.json
    @chatwoot/app1
      package.json
  packages
    @chatwoot/shared
      package.json
  package.json
  turbo.json
```

**Workspaces:** Workspaces are the fundamental units of the monorepo. Each app and package in this structure is located within its own workspace. These workspaces are managed using yarn workspaces. Every workspace has a unique name listed in its respective package.json file.

### Prerequisites

You need to install [Yarn](https://yarnpkg.com/) with 1.22.19, [Node.js](https://nodejs.org/en) with 20.x+ and the latest version of the [TurboRepo](https://turbo.build/).

### Getting started


**Step 1**: Install the packages

```
yarn
```

**Step 2**: Run the development server


```
yarn dev
```

This will start the development build for the follwing apps.

- @chatwoot/livechat-widget at [port 4104](http://localhost:4104)
- @chatwoot/sdk at the [port 6174](http://localhost:6174)
