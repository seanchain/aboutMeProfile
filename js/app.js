var app = angular.module("app", []);

function MainCtrl($scope){
    $scope.count = 0;
}

app.directive('workhistory', function($compile){
    return function(scope, element, attrs) {
        element.bind("click", function(){
            scope.count ++;
            angular.element(document.getElementById('prev-work')).append(
                $compile('<div class="pre-cardview" id="prev-section-' + scope.count + '"><div id="prev-job-' + scope.count + '" placeholder="What\'s your latest role?"  contenteditable="true" class="prev-job prev-per">' +
                '</div><div contenteditable="true" id="prev-place-' + scope.count + '" placeholder="Which company?" class="comp prev-per"></div>' +
                '<div contenteditable="true" id="prev-years-' + scope.count + '" placeholder="How long have you been in this role?" class="years prev-per"></div>' +
                '<div contenteditable="true" id="prev-achi-' + scope.count + '" placeholder="Your position or achievements" class="achie prev-per"></div>' +
                '<button class="button tiny alert del-btn" id="prev-btn-' + scope.count + '" style="visibility: hidden">DELETE</button></div>')(scope)
            );
        });
    }
});

app.directive('userlinks', function($compile){
    return function(scope, element, attrs) {
        element.bind("click", function(){
            scope.count ++;
            angular.element(document.getElementById('othersites')).append(
                $compile('<div class="small-6 columns link-panel left">' +
                        '<span class="link-cell">' +
                        '<img src="./images/github.png" alt="other links icon" class="link-cell-icon"/>' +
                        '<span class="link-cell-title">' +
                        '<span class="link-cell-content" contenteditable="true" placeholder="Enter your content"></span>' +
                        '<span class="link-cell-link" contenteditable="true" placeholder="Enter your link"></span>' +
                        '</span>' +
                        '</span>' +
                        '<br /><br/><button class="button alert tiny">DELETE</button>')(scope)
            );
        });
    }
});


