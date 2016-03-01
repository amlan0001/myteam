(function(){
  var app = angular.module("myApp",['angular-svg-round-progress']).controller('demoCtrl', ['$scope', '$interval', '$timeout', '$window','$rootScope', 'roundProgressService', function($scope, $interval, $timeout, $window, roundProgressService){
            $scope.max =            100;
            $scope.offset =         1;
            $scope.timerCurrent =   0;
            $scope.uploadCurrent =  0;
            $scope.stroke =         10;
            $scope.radius =         100;
            $scope.isSemi =         false;
            $scope.rounded =        false;
            $scope.responsive =     false;
            $scope.clockwise =      true;
            $scope.currentColor = '#34495E';
            $scope.bgColor =        '#eaeaea';
            $scope.duration =       800;
            $scope.currentAnimation = 'easeOutCubic';
            $scope.animationDelay = 0;
            $scope.increment = function(amount){
                $scope.current+=(amount || 1);
            };


            $scope.teamDetail = [
          { id: 1, teamPercent: 60, status:"bactive" },
          { id: 2, teamPercent: 20,  status:""},
          { id: 3, teamPercent: 10, status: "" }
            ];
            $scope.current = $scope.teamDetail[0].teamPercent;
            $scope.teamData = [
                { id: 1, name: 'Ayush', teamPercent: 60 , userid:1 ,selected:false},
                { id: 1, name: 'Mohit', teamPercent: 20, userid: 2, selected: false },
                { id: 1, name: 'Amlan', teamPercent: 10, userid: 3, selected: false },
                { id: 1, name: 'Apeksha', teamPercent: 70, userid: 4, selected: false },
                { id: 1, name: 'Rohit', teamPercent: 90, userid: 5, selected: false },
                { id: 2, name: 'Palak', teamPercent: 30, userid: 1, selected: false },
                { id: 2, name: 'Rohit', teamPercent: 90, userid: 2, selected: false },
                { id: 2, name: 'Palak', teamPercent: 30, userid: 3, selected: false },
                { id: 2, name: 'Ayush', teamPercent: 60, userid: 4, selected: false },
                { id: 2, name: 'Mohit', teamPercent: 20, userid: 5, selected: false },
                { id: 3, name: 'Amlan', teamPercent: 10, userid: 1, selected: false },
                { id: 3, name: 'Apeksha', teamPercent: 70, userid: 2, selected: false },
                { id: 3, name: 'Rohit', teamPercent: 90, userid: 3, selected: false },
                { id: 3, name: 'Palak', teamPercent: 30, userid: 4, selected: false },
                { id: 3, name: 'Rohit', teamPercent: 90, userid: 5, selected: false },
                { id: 4, name: 'Palak', teamPercent: 30, userid: 6, selected: false },
                { id: 4, name: 'Ayush', teamPercent: 60, userid: 2, selected: false },
                { id: 4, name: 'Mohit', teamPercent: 20, userid: 3, selected: false },
                { id: 4, name: 'Amlan', teamPercent: 10, userid: 4, selected: false },
                { id: 4, name: 'Apeksha', teamPercent: 70, userid: 5, selected: false },
                { id: 5, name: 'Rohit', teamPercent: 90, userid: 1, selected: false },
                { id: 5, name: 'Palak', teamPercent: 30, userid: 2, selected: false },
                { id: 5, name: 'Rohit', teamPercent: 90, userid: 3, selected: false },
                { id: 5, name: 'Palak', teamPercent: 30, userid: 4, selected: false },
            ];

            $scope.teamSize = team;
            $scope.msg = 1;
            $scope.func = function (obj) {
                $scope.msg = obj.id;
                $scope.current = obj.teamPercent;
                $(".teamNumberLink").removeClass('bactive');
                
               
            };
            
            $scope.animations = [];
            angular.forEach(roundProgressService.animations, function(value, key){
                $scope.animations.push(key);
            });
            $scope.getStyle = function(){
                var transform = ($scope.isSemi ? '' : 'translateY(-150%) ') + 'translateX(-50%)';
                return {
                    'top': $scope.isSemi ? 'auto' : '130px',
                    'bottom': $scope.isSemi ? '5%' : 'auto',
                    'left': '180px',
                    'transform': transform,
                    '-moz-transform': transform,
                    '-webkit-transform': transform,
                    'font-size': $scope.radius/4 + 'px'
                };
            };
            $scope.getColor = function(){
                return $scope.currentColor;
            };
            $scope.showPreciseCurrent = function(amount){
                $timeout(function(){
                    if(amount <= 0){
                        $scope.preciseCurrent = $scope.current;
                    }else{
                        var math = $window.Math;
                        $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
                    }
                });
            };




            

           




            $scope.data = [{
                id: 1,
                label: "Team 1",
                fillColor: "rgba(83, 26, 255,0)",
                strokeColor: "#531aff",
                pointColor: "#531aff",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#531aff",
                values: [10, 20, 30, 40, 50, 60, 70, 80, 40, 50, 60, 90]
            },
                  {
                      id: 2,
                      label: "Team 2",
                      fillColor: "rgba(151,187,205,0)",
                      strokeColor: "rgba(151,187,205,1)",
                      pointColor: "rgba(151,187,205,1)",
                      pointStrokeColor: "#fff",
                      pointHighlightFill: "#fff",
                      pointHighlightStroke: "rgba(151,187,205,1)",
                      values: [11, 26, 12, 4, 59, 60, 78, 56, 78, 98, 76, 45]
                  },
              {
                  id: 3,
                  label: "Team 3",
                  fillColor: "rgba(17, 212, 180,0)",
                  strokeColor: "rgb(17, 212, 180)",
                  pointColor: "rgb(17, 212, 180)",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "rgb(17, 212, 180)",
                  values: [15, 28, 30, 89, 50, 64, 71, 56, 78, 90, 98, 97]
              },
              {
                  id: 4,
                  label: "Team 4",
                  fillColor: "rgba(255, 77, 166,0)",
                  strokeColor: "#ff4da6",
                  pointColor: "#ff4da6",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "#ff4da6",
                  values: [13, 52, 23, 74, 85, 76, 90, 78, 80, 84, 90, 67]
              },
              {
                  id: 5,
                  label: "Team 5",
                  fillColor: "rgba(255, 117, 26,0)",
                  strokeColor: "#ff751a",
                  pointColor: "#ff751a",
                  pointStrokeColor: "#fff",
                  pointHighlightFill: "#fff",
                  pointHighlightStroke: "#ff751a",
                  values: [21, 22, 63, 34, 75, 60, 100, 34, 12, 45, 68, 89]
              }];



            var options = {
                responsive: false,
                maintainAspectRatio: false,
            };




            var studentdata = [{
                id: 1,
                teamid: 1,
                label: "Student 1",
                values: [10, 40, 30, 50, 60, 60, 70, 40, 30, 20, 30, 20]
            },
                    {
                        id: 2,
                        teamid: 2,
                        label: "Student 2",
                        values: [11, 26, 12, 4, 59, 60, 78, 56, 78, 98, 76, 45]
                    },
                    {
                        id: 3,
                        teamid: 1,
                        label: "Student 3",

                        values: [15, 28, 30, 89, 50, 64, 71, 56, 78, 90, 98, 97]
                    },
                {
                    id: 4,
                    label: "Student 4",
                    teamid: 2,
                    values: [13, 52, 23, 74, 85, 76, 90, 78, 80, 84, 90, 67]
                },
                {
                    id: 5,
                    label: "Student 5",
                    teamid: 1,
                    values: [21, 22, 63, 34, 75, 60, 100, 34, 12, 45, 68, 89]
                }];

            $scope.studentid = 1;
            $scope.teamid = 1;
            var stud_data = [];
            for (var i = 0; i < studentdata.length; i++) {

                if ($scope.studentid == studentdata[i].id) {
                    var fill = {
                        id: studentdata[i].id,
                        label: studentdata[i].label,
                        fillColor: "rgba(255, 77, 166,0)",
                        strokeColor: "#ff4da6",
                        pointColor: "#ff4da6",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "#ff4da6",
                        data: studentdata[i].values
                    };

                    stud_data.push(fill);

                }

            }
            var index = $scope.teamid - 1;

            var team_data = $scope.data[index].values;

            var idd = stud_data.length + 1;

            var team_avg = {
                id: idd,
                label: "Average",
                fillColor: "rgba(220,220,220,0.4)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: team_data
            };

            stud_data.push(team_avg);
            var data2 = {
                labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"],
                datasets: stud_data

            };

            var ctx1 = document.getElementById("c2").getContext("2d");
            ctx1.canvas.width = 300;
            ctx1.canvas.height = 200;
            var MyNewChart = new Chart(ctx1).Line(data2, options);


            $scope.hoverin = function (hoveruserid,hoverteamid) {
                
                $scope.studentid = hoveruserid;
                $scope.teamid = hoverteamid;
                stud_data = [];
                for (var i = 0; i < studentdata.length; i++) {

                    if ($scope.studentid == studentdata[i].id) {
                        var fill = {
                            id: studentdata[i].id,
                            label: studentdata[i].label,
                            fillColor: "rgba(255, 77, 166,0)",
                            strokeColor: "#ff4da6",
                            pointColor: "#ff4da6",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "#ff4da6",
                            data: studentdata[i].values
                        };

                        stud_data.push(fill);

                    }

                }
                index = $scope.teamid - 1;

                team_data = $scope.data[index].values;

                idd = stud_data.length + 1;

                team_avg = {
                    id: idd,
                    label: "Average",
                    fillColor: "rgba(220,220,220,0.4)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: team_data
                };

                stud_data.push(team_avg);


                for (var i = 0; i < 12; i++) {

                    MyNewChart.datasets[0].points[i].value = stud_data[0].data[i];
                    MyNewChart.datasets[1].points[i].value = stud_data[1].data[i];
                }
                
                MyNewChart.update();
                $scope.showonhover = 1;
               

                for (var i = 0; i < $scope.teamData.length; i++) {
                    if ($scope.teamData[i].id == $scope.teamid && $scope.teamData[i].userid == $scope.studentid) {
                        $scope.teamData[i].selected = true;
                    }
                    else {
                        $scope.teamData[i].selected = false;
                    }
                }


            }

            $scope.hoverout = function (obj) {

                $scope.showonhover = 0;
            }



  }]);
  //var amlanChart = function ($scope) {
  //    $scope.data = [{
  //        id: 1,
  //        label: "Team 1",
  //        fillColor: "rgba(83, 26, 255,0)",
  //        strokeColor: "#531aff",
  //        pointColor: "#531aff",
  //        pointStrokeColor: "#fff",
  //        pointHighlightFill: "#fff",
  //        pointHighlightStroke: "#531aff",
  //        values: [10, 20, 30, 40, 50, 60, 70, 80, 40, 50, 60, 90]
  //    },
  //           {
  //               id: 2,
  //               label: "Team 2",
  //               fillColor: "rgba(151,187,205,0)",
  //               strokeColor: "rgba(151,187,205,1)",
  //               pointColor: "rgba(151,187,205,1)",
  //               pointStrokeColor: "#fff",
  //               pointHighlightFill: "#fff",
  //               pointHighlightStroke: "rgba(151,187,205,1)",
  //               values: [11, 26, 12, 4, 59, 60, 78, 56, 78, 98, 76, 45]
  //           },
  //       {
  //           id: 3,
  //           label: "Team 3",
  //           fillColor: "rgba(17, 212, 180,0)",
  //           strokeColor: "rgb(17, 212, 180)",
  //           pointColor: "rgb(17, 212, 180)",
  //           pointStrokeColor: "#fff",
  //           pointHighlightFill: "#fff",
  //           pointHighlightStroke: "rgb(17, 212, 180)",
  //           values: [15, 28, 30, 89, 50, 64, 71, 56, 78, 90, 98, 97]
  //       },
  //       {
  //           id: 4,
  //           label: "Team 4",
  //           fillColor: "rgba(255, 77, 166,0)",
  //           strokeColor: "#ff4da6",
  //           pointColor: "#ff4da6",
  //           pointStrokeColor: "#fff",
  //           pointHighlightFill: "#fff",
  //           pointHighlightStroke: "#ff4da6",
  //           values: [13, 52, 23, 74, 85, 76, 90, 78, 80, 84, 90, 67]
  //       },
  //       {
  //           id: 5,
  //           label: "Team 5",
  //           fillColor: "rgba(255, 117, 26,0)",
  //           strokeColor: "#ff751a",
  //           pointColor: "#ff751a",
  //           pointStrokeColor: "#fff",
  //           pointHighlightFill: "#fff",
  //           pointHighlightStroke: "#ff751a",
  //           values: [21, 22, 63, 34, 75, 60, 100, 34, 12, 45, 68, 89]
  //       }];



  //    var options = {
  //        responsive: false,
  //        maintainAspectRatio: false,
  //    };




  //    var studentdata = [{
  //        id: 1,
  //        teamid: 1,
  //        label: "Student 1",
  //        values: [10, 40, 30, 50, 60, 60, 70, 40, 30, 20, 30, 20]
  //    },
  //            {
  //                id: 2,
  //                teamid: 2,
  //                label: "Student 2",
  //                values: [11, 26, 12, 4, 59, 60, 78, 56, 78, 98, 76, 45]
  //            },
  //            {
  //                id: 3,
  //                teamid: 1,
  //                label: "Student 3",

  //                values: [15, 28, 30, 89, 50, 64, 71, 56, 78, 90, 98, 97]
  //            },
  //        {
  //            id: 4,
  //            label: "Student 4",
  //            teamid: 2,
  //            values: [13, 52, 23, 74, 85, 76, 90, 78, 80, 84, 90, 67]
  //        },
  //        {
  //            id: 5,
  //            label: "Student 5",
  //            teamid: 1,
  //            values: [21, 22, 63, 34, 75, 60, 100, 34, 12, 45, 68, 89]
  //        }];

  //    $scope.studentid = 1;
  //    $scope.teamid = 1;
  //    var stud_data = [];
  //    for (var i = 0; i < studentdata.length; i++) {

  //        if ($scope.studentid == studentdata[i].id && $scope.teamid == studentdata[i].teamid) {
  //            var fill = {
  //                id: studentdata[i].id,
  //                label: studentdata[i].label,
  //                fillColor: "rgba(255, 77, 166,0)",
  //                strokeColor: "#ff4da6",
  //                pointColor: "#ff4da6",
  //                pointStrokeColor: "#fff",
  //                pointHighlightFill: "#fff",
  //                pointHighlightStroke: "#ff4da6",
  //                data: studentdata[i].values
  //            };

  //            stud_data.push(fill);

  //        }

  //    }
  //    var index = $scope.teamid - 1;

  //    var team_data = $scope.data[index].values;

  //    var idd = stud_data.length + 1;

  //    var team_avg = {
  //        id: idd,
  //        label: "Average",
  //        fillColor: "rgba(220,220,220,0.4)",
  //        strokeColor: "rgba(220,220,220,1)",
  //        pointColor: "rgba(220,220,220,1)",
  //        pointStrokeColor: "#fff",
  //        pointHighlightFill: "#fff",
  //        pointHighlightStroke: "rgba(220,220,220,1)",
  //        data: team_data
  //    };

  //    stud_data.push(team_avg);
  //    var data2 = {
  //        labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"],
  //        datasets: stud_data

  //    };

  //    var ctx1 = document.getElementById("c2").getContext("2d");
  //    ctx1.canvas.width = 300;
  //    ctx1.canvas.height = 200;
  //    var MyNewChart = new Chart(ctx1).Line(data2, options);







  //};


  //app.controller("ChartController2", amlanChart);

  var team = 6;
  
}());