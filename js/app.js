var app = angular.module("app", []);

function MainCtrl($scope){
    $scope.count = 0;
}

app.directive('workhistory', function($compile){
    return function(scope, element, attrs) {
        element.bind("click", function(){
            scope.count ++;
            angular.element(document.getElementById('prev-work')).append(
                $compile('<div class="pre-cardview"><div placeholder="What\'s your latest role?"  contenteditable="true" class="prev-job prev-per">' +
                '</div><div contenteditable="true" placeholder="Which company?" class="comp prev-per"></div>' +
                '<div contenteditable="true" placeholder="How long have you been in this role?" class="years prev-per"></div>' +
                '<div contenteditable="true" placeholder="Your position or achievements" class="achie prev-per"></div>' +
                '<button class="button tiny alert del-btn"  style="visibility: hidden">DELETE</button></div>')(scope)
            );
        });
    }
});

