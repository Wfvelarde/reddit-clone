const myRedditApp = angular.module('myRedditApp', ['ngRoute']);

myRedditApp.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'RedditController'
		})

}]);


myRedditApp.controller('RedditController', ['$scope', '$http', function($scope, $http){
	$scope.count = 0;

	$scope.upVote = function(){
		$scope.count += 1;

	}

	$scope.downVote = function(){

		if($scope.count > 0){
			$scope.count -= 1;
		} else {
			$scope.count = 0;
		}
	}

	$scope.addPost = function(){
		$scope.posts.push({
			title: $scope.newpost.title,
			body: $scope.newpost.body,
			author: $scope.newpost.author,
			image: $scope.newpost.image
		});

		$scope.newpost.title = "";
		$scope.newpost.body = "";
		$scope.newpost.author = "";
		$scope.newpost.image = "";
	};
	
	$http.get('data/posts.json').then(function(response){
		$scope.posts = response.data;
	
	});
}]);