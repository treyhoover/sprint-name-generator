export default function (module) {
  module.component('nameGenerator', {
    bindings: {
      letter: '@'
    },
    controller: function nameGeneratorCtrl(NameService) {
      this.liked = [];
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      this.refresh = function () {
        let letter = (this.letter || NameService.randomLetter()).toLowerCase();
        this.person = NameService.randomPerson(letter);
        this.car = NameService.randomCar(letter);
      };

      this.toggleLetter = function (letter) {
        this.letter = this.letter != letter ? letter : '';
        this.refresh();
      };

      this.getName = function () {
        return `${this.person}'s ${this.car}`;
      };

      this.upvote = function () {
        this.liked.unshift(this.getName());
        this.refresh();
      };

      this.downvote = this.refresh;

      this.refresh();
    },
    template: `
      <md-card class="fat-card">
      <md-card-content>
        <form>
            <div class="letter-buttons">
              <md-button class="md-fab md-mini" ng-click="$ctrl.toggleLetter(letter)" aria-label="{{letter}}"
                ng-repeat="letter in $ctrl.alphabet" ng-class="$ctrl.letter === letter ? 'md-accent' : 'md-primary'">
                {{letter}}
              </md-button>
            </div>

            <h1 class="generated-name" ng-bind="$ctrl.getName()"></h1>

            <div layout="row" layout-align="center center">
              <md-button class="downvote-button md-raised md-accent" type="button" aria-label="downvote"
                         ng-click="$ctrl.downvote()">
                <i class="fa fa-thumbs-down fa-2x"></i>
              </md-button>

              <md-button class="upvote-button md-raised md-primary" type="button" aria-label="upvote"
                         ng-click="$ctrl.upvote()">
                <i class="fa fa-thumbs-up fa-2x"></i>
              </md-button>
            </div>

            <div layout="row" layout-align="center center">
              <ul class="liked">
                <li ng-repeat="name in $ctrl.liked track by $index">{{name}}</li>
                <li ng-if="$ctrl.liked.length == 0">Names you like will be listed here</li>
              </ul>
            </div>
        </form>
      </md-card-content>
      </md-card>
    `
  });
}