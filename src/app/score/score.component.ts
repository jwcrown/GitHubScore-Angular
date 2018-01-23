import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service'


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  userExists = null;
  score = null;
  username = null;
  promise;

  constructor(private _mainService: MainService) {}

  calculateScore() {
    this.promise = this._mainService.getUser(this.username)
    if (this.promise) {
      this.promise.then( (user) => {
        if (user.id) {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
          console.log(this.score)
        } else {
          this.userExists = false;
          this.score = null;
        }
        this.username = null;
      })
      .catch( (err) => {
        this.userExists = false;
      });
    } else {
      this.userExists = false;
    }
  }

}
