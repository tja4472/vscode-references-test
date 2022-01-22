import { Component } from '@angular/core';
import { foo, Todo } from '@my-workspace-vscode/my-library';

foo.bar();

@Component({
  selector: 'my-workspace-vscode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vscode-references-test';

  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
}
