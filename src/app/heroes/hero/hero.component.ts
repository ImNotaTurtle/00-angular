import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public heroName: string = 'batman';
  public heroAge: number = 30;
  public isNameChanged: boolean = true;
  public isAgeChanged: boolean = true;

  get capitalizedName(): string {
    return this.heroName.toUpperCase();
  }

  getHeroDesc(): string {
    return `${this.heroName}- ${this.heroAge}`;
  }

  changeHeroName(): void {
    this.heroName = 'spiderman';
    this.isNameChanged = false;
  }

  changeHeroAge(): void {
    this.heroAge = 25;
    this.isAgeChanged = false;
  }

  resetForm(): void {
    this.heroName = 'batman';
    this.heroAge = 30;
    this.isAgeChanged = true;
    this.isNameChanged = true;
  }
}
