angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: 'ProfileCompCtrl',
  controllerAs: 'profileComp'
})

function ProfileCompCtrl() {
  var profileComp = this;

}

ProfileCompCtrl.$inject = [];
