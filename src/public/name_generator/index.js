import styles from './styles/styles.scss';

import nameGeneratorComponent from './components/name_generator.compoment';
import nameService from './services/name.service';

let module = angular.module('nameGenerator', []);
nameGeneratorComponent(module);
nameService(module);

module.config(function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
});

export default function (module) {
  module.requires.push('nameGenerator');
}