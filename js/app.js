var app = angular.module("app", ['ngFileUpload']);

function MainCtrl($scope) {
    $scope.count = 0;
}

function lnkCtrl($scope) {
    $scope.count = 0;
}


app.controller('MyCtrl', ['$scope', 'Upload', function ($scope, Upload) {
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.loader = {
        loading: false
    };

    $scope.upload = function (files) {
        var username = document.getElementById("nametag").value;
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: "http://www.chensihang.com/CSHiOS/upload.php",
                    file: file,
                    method: 'POST',
                    fileName: username
                }).progress(function () {
                    console.log("123");
                    $scope.loader.loading = true;
                }).success(function (data, status, headers, config) {
                    console.log(config.file.name);
                    $scope.loader.loading = false;
                    $("#homepage-hero").css("background-image", "url('http://www.chensihang.com/CSHiOS/portraits/chen.jpg')");
                });
            }
        }
    };
}]);

app.directive('workhistory', function ($compile) {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            scope.count++;
            angular.element(document.getElementById('prev-work')).append(
                $compile('<div class="pre-cardview" id="prev-section-' + scope.count + '"><div id="prev-job-' + scope.count + '" placeholder="What\'s your latest role?"  contenteditable="true" class="prev-job prev-per">' +
                '</div><div contenteditable="true" id="prev-place-' + scope.count + '" placeholder="Which company?" class="comp prev-per"></div>' +
                '<div contenteditable="true" id="prev-years-' + scope.count + '" placeholder="How long have you been in this role?" class="years prev-per"></div>' +
                '<div contenteditable="true" id="prev-achi-' + scope.count + '" placeholder="Your position or achievements" class="achie prev-per"></div>' +
                '<div class="button tiny alert del-btn" id="prev-btn-' + scope.count + '" style="visibility: hidden">DELETE</div>&nbsp;&nbsp;' +
                '<div class="button tiny success confirm-btn" id="conf-btn-' + scope.count + '" style="visibility:hidden" >CONFIRM</div>')(scope)
            );
        });
    }
});

app.directive('userlinks', function ($compile) {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            scope.count++;
            angular.element(document.getElementById('othersites')).append(
                $compile('<div class="small-6 columns link-panel left" id="lnk-cell-id-' + scope.count + '">' +
                '<span class="link-cell">' +
                '<img id="link-cell-icon-' + scope.count + '" src="./images/link.png" alt="other links icon" class="link-cell-icon"/>' +
                '<span class="link-cell-title">' +
                '<span id="link-cell-content-' + scope.count + '" class="link-cell-content" contenteditable="true" placeholder="Enter Your Description"></span>' +
                '<span id="link-cell-link-' + scope.count + '" class="link-cell-link" contenteditable="true" placeholder="Enter Your Link"></span>' +
                '</span>' +
                '</span>' +
                '<div class="button alert tiny lnk-del-btn" style="visibility: hidden" id="lnk-del-btn-' + scope.count + '">DELETE</div>&nbsp;&nbsp;' +
                '<div class="button success  tiny lnk-confirm-btn" style="visibility: hidden" id="lnk-confirm-btn-' + scope.count + '">CONFIRM</div>')(scope)
            );
        });
    }
});

app.directive('ngInitial', function () {
    return {
        restrict: 'A',
        controller: [
            '$scope', '$element', '$attrs', '$parse', function ($scope, $element, $attrs, $parse) {
                var getter, setter, val;
                val = $attrs.ngInitial || $attrs.value;
                getter = $parse($attrs.ngModel);
                setter = getter.assign;
                setter($scope, val);
            }
        ]
    };
});


