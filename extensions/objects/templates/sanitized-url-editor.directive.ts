// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Directive for sanitized URL editor.
 */

angular.module('oppia').directive('sanitizedUrlEditor', [
  'UrlInterpolationService',
  function(UrlInterpolationService) {
    // Editable URL directive.
    return {
      restrict: 'E',
      scope: {},
      bindToController: {
        value: '='
      },
      templateUrl: UrlInterpolationService.getExtensionResourceUrl(
        '/objects/templates/sanitized-url-editor.directive.html'),
      controllerAs: '$ctrl',
      controller: [function() {
        var ctrl = this;
        ctrl.$onInit = function() {
          ctrl.SCHEMA = {
            type: 'unicode',
            validators: [{
              id: 'is_nonempty'
            }],
            ui_config: {
              placeholder: 'https://www.example.com'
            }
          };
        };
      }]
    };
  }]);
