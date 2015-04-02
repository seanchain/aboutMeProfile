var app = angular.module("app", []);

function MainCtrl($scope){
    $scope.count = 0;
}

app.directive('workhistory', function($compile){
    return function(scope, element, attrs) {
        element.bind("click", function(){
            scope.count ++;
            angular.element(document.getElementById('workprofile')).append(
                $compile('<div><div placeholder="What\'s your latest role?"  contenteditable="true" class="job cur-per">' +
                '</div><div contenteditable="true" placeholder="Which company?" class="comp cur-per"></div>' +
                '<div contenteditable="true" placeholder="How long have you been in this role?" class="years cur-per"></div>' + 
                '<div contenteditable="true" placeholder="Your position or achievements" class="achie cur-per"></div></div>')(scope)
            );
        });
    }
});

