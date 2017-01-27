angular.module('App')
.component('browseComp', {
  templateUrl: 'app/containers/browse/browse.html',
  controller: 'BrowseCompCtrl',
  controllerAs: 'browseComp'
})

function BrowseCompCtrl() {
  var browseComp = this;

}

BrowseCompCtrl.$inject = [];
