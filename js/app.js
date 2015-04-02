var app = angular.module("app", []);

function MainCtrl($scope){
    $scope.count = 0;
}

app.directive('workhistory', function($compile){
    return function(scope, element, attrs) {
        element.bind("click", function(){
            scope.count ++;
            angular.element(document.getElementById('prev-work')).append(
                $compile('<div><div placeholder="What\'s your latest role?"  contenteditable="true" class="job prev-job">' +
                '</div><div contenteditable="true" placeholder="Which company?" class="comp prev-job"></div>' +
                '<div contenteditable="true" placeholder="How long have you been in this role?" class="years prev-job"></div>' +
                '<div contenteditable="true" placeholder="Your position or achievements" class="achie prev-job"></div></div>')(scope)
            );
        });
    }
});

