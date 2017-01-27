angular.module('App')
.component('browseComp', {
  templateUrl: 'app/containers/browse/browse.html',
  controller: 'BrowseCompCtrl',
  controllerAs: 'browseComp'
})

function BrowseCompCtrl() {
  var browseComp = this;

  var users = [1, 2, 3, 4, 5];

}

BrowseCompCtrl.$inject = [];
