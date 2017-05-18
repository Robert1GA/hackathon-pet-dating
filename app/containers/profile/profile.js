angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($stateParams, UserService) {
  profileComp = this;
  profileComp.something = "hey";
  profileComp.user = UserService.getUser($stateParams.index);

  // console.log("stateparams", $stateParams)
	// console.log("user", profileComp.user)

}

ProfileCompCtrl.$inject = ['$stateParams', 'UserService'];
