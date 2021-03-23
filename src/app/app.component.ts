import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private router:Router,
    private locationStrategy: LocationStrategy,
) {}

  ngOnInit(){
    this.router.navigate(["login"]); 
    // On refresh route to login page
    this.router.navigate(['/login']);
    // to handle back button 
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }
}

