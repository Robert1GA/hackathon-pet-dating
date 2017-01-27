angular.module('App')
.component('browseComp', {
  templateUrl: 'app/containers/browse/browse.html',
  controller: BrowseCompCtrl,
  controllerAs: 'browseComp'
});

function BrowseCompCtrl($scope, $state, $stateParams) {
	console.log("stateparams", $stateParams)
	console.log("user", $stateParams.user)
	$scope.viewProfile = function(index, user) {
		console.log("hello");
		$state.go('profileState', {index: index, user: user});
	}
}

BrowseCompCtrl.$inject = ['$scope', '$state', '$stateParams'];
