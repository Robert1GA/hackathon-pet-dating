angular.module('SubtitleApp')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: 'WatchCompCtrl',
  controllerAs: 'profileComp'
})

function ProfileCompCtrl() {
  var profileComp = this;

}

ProfileCompCtrl.$inject = [];
