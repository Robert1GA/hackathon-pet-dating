angular.module('App')
.component('profileComp', {
  templateUrl: 'containers/profile/profile.html',
  controller: 'ProfileCompCtrl',
  controllerAs: 'profileComp'
})

function ProfileCompCtrl() {
  var profileComp = this;

}

ProfileCompCtrl.$inject = [];
