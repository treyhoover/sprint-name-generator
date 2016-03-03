import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMaterialStyles from 'angular-material/angular-material.scss';
import fontAwesome from 'font-awesome/scss/font-awesome.scss';

import styles from './styles.scss';
import nameGenerator from './name_generator';

let app = angular.module('app', ['ngMaterial']);

app.config(function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
});

nameGenerator(app);