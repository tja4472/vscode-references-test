- [vscode-references-test](#vscode-references-test)
  - [Install Nx globally](#install-nx-globally)
  - [Create workspace with an Angular app](#create-workspace-with-an-angular-app)
  - [Change folder](#change-folder)
  - [Add library](#add-library)
  - [Add data.ts](#add-datats)
  - [Update index.ts](#update-indexts)
  - [Update app.module.ts](#update-appmodulets)
  - [Update app.component.ts](#update-appcomponentts)

# vscode-references-test

## Install Nx globally

```bash
npm install nx --global
```

## Create workspace with an Angular app

```bash
npx create-nx-workspace@latest myWorkspaceVscode --preset angular --appName "vscode-references-test" --style "css" --nx-cloud false
```

## Change folder

```bash
cd my-workspace-vscode
```

## Add library

```bash
nx generate @nrwl/angular:library --name=myLibrary
```

## Add data.ts

libs>my-library>src>lib

```ts
export interface Todo {
  title: string;
}
```

## Update index.ts

libs>my-library>src>lib

```ts
export * from './lib/my-library.module';
export * from './lib/data';
```

## Update app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { MyLibraryModule } from '@my-workspace-vscode/my-library';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MyLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Update app.component.ts

```ts
import { Component } from '@angular/core';
import { Todo } from '@my-workspace-vscode/my-library';

@Component({
  selector: 'my-workspace-vscode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vscode-references-test';

  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
}
```

- Open workspace with vscode with no editors open.
- Open libs>my-library>src>lib>data.ts.
- Right click on `Todo` and select `Find All References`.
- Notice that `app.component.ts` is not in the results.

Cannot find all references to shared lib's interfaces in VS Code
https://github.com/nrwl/nx/issues/3106
