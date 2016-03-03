export default function (module) {
  module.component('nameGenerator', {
    bindings: {},
    controller: function nameGeneratorCtrl(NameService) {
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.letter = '';

      this.refresh = function () {
        let letter = (this.letter || NameService.randomLetter()).toLowerCase();
        this.person = NameService.randomPerson(letter);
        this.car = NameService.randomCar(letter);
      };

      this.toggleLetter = function (letter) {
        this.letter = this.letter != letter ? letter : '';
        this.refresh();
      };

      this.refresh();
    },
    template: `
      <md-card class="fat-card">
      <md-card-content>
        <form ng-submit="$ctrl.refresh()">
            <div class="letter-buttons">
              <md-button class="md-fab md-mini" ng-click="$ctrl.toggleLetter(letter)" aria-label="{{letter}}"
                ng-repeat="letter in $ctrl.alphabet" ng-class="$ctrl.letter === letter ? 'md-accent' : 'md-primary'">
                {{letter}}
              </md-button>
            </div>

            <h1 class="generated-name">{{$ctrl.person}}'s {{$ctrl.car}}</h1>

            <div layout="row" layout-align="center center">
              <md-button class="md-raised" type="submit">Refresh</md-button>
            </div>
        </form>
      </md-card-content>
      </md-card>
    `
  });
}