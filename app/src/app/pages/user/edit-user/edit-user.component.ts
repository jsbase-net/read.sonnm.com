import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  user: { userId: string } | null = null;
  constructor(route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(
      map((p) => (p as { id: string }).id)
    );
    id.subscribe((userId) => {
      if (userId) {
        this.user = {
          userId,
        };
      }
    });
  }
}
