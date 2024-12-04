import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loggedin:boolean=true;
  constructor(private router: Router){}
navigateTo(arg0: string) {
  this.router.navigate([`${arg0}`]);
}

}
