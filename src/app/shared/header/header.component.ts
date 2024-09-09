import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignalsService } from '../signals.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  providers: [],
})
export class HeaderComponent {
  signals = inject(SignalsService);
}
