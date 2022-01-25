import { Component } from '@angular/core';
import { Todo } from '@my-workspace-vscode/my-library';
import { sharedConst } from '@my-workspace-vscode/shared-lib';

@Component({
  selector: 'my-workspace-vscode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vscode-references-test';

  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  aaa = sharedConst;
}
