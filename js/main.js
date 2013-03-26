
function PhotoAlbum($scope, $http) {

	$scope.album = {};

	$scope.currentImage = 0;

	$http.get('gallery_json.js')
	.then(function(res){
		$scope.album = res.data;             
	});

	$scope.isActive = function(image) {
		return image === $scope.selected ? 'active' : undefined;
	};

	$scope.setCurrentImage = function(image, index){
		$scope.selected = $scope.bigImg = image ; 
		$scope.currentImage = index;
	}

	$scope.changeImage = function(direction){

		ctrl = null;

		switch(direction) {
			case '>' :
			ctrl = parseInt( $scope.currentImage ) + 1;
			if (parseInt( $scope.currentImage ) >= ($scope.album.photos.length - 1)) {
				ctrl = 0;
			}
			break;

			case '<':
			ctrl = parseInt( $scope.currentImage ) - 1;
			if (parseInt( $scope.currentImage ) < 1) {
				ctrl = $scope.album.photos.length - 1
			}
			break;
		}

		$scope.setCurrentImage($scope.album.photos[ctrl], ctrl);
	}

	if($scope.currentImage = 0){
		$scope.setCurrentImage($scope.album.photos[0], 0);
	}
}
