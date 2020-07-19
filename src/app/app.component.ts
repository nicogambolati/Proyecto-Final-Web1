import { Component } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalweb1';
  pageTitle = '';

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) { 
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const route = event.state.root.firstChild;
        this.pageTitle = route.data.title || '';
        console.log('Page', route.data.title);
      }
    });
  }

}
