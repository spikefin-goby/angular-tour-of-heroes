import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'app-dashboard',
  template: `
    <h3>My Dashboard</h3>
  `,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[];

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5 ));
  }

  constructor(private heroService: HeroService) {}
}
