import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedMenuItem: 'Dashboard' | 'Projects' | 'My Forms';
  constructor(private router: Router,
              private route: ActivatedRoute) {
    // console.log(this.route.snapshot)
    this.setSelectedMenuItem();
    this.onRouteChange();
  }

  ngOnInit() {
  }

  onRouteChange() {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.setSelectedMenuItem();
        }
      }
    );
  }

  setSelectedMenuItem() {
    this.selectedMenuItem = this.route.snapshot.firstChild.data.name;
  }
}
