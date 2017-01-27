angular.module('App')
.component('browseList', {
  templateUrl: 'app/components/browseList.html',
  controller: browseListCtrl,
  controllerAs: 'browseList'
});

function browseListCtrl(UserService) {

  var browseList = this;

  browseList.users = UserService.users;


}

browseListCtrl.$inject = ['UserService'];
