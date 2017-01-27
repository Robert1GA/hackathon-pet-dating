angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($stateParams) {
	console.log("stateparams", $stateParams)
	console.log("user",$stateParams.user)
}

ProfileCompCtrl.$inject = ['$stateParams'];
