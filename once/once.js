angular.module('once',[])
.config(function($stateProvider){
        console.log($stateProvider)

        $stateProvider.state('once',{
            url:'/once/:id',
            params:{
                id:null
            },
            templateUrl:'once/once.html',
            controller:function($scope,$stateParams,$http){
                var id= $stateParams.id;
                $scope.active = function(){
                    console.log(1)
                    console.log(this)
                    $('span').removeClass('active');
                    $(this).addClass('active');
                }
                $http.get('public/home_page/hott.json')
                .then(function(res){
                    return res.data
                })
                .then(function(data){
                    // console.log(data)
                    return data.data;
                })
                .then(function(arr){
                    console.log(arr)
                    for(var i = 0; i < arr.length;i++){
                        if(arr[i].id == id){
                            $scope.img = arr[i].img_big;
                            $scope.once_arr = arr[i].arry;
                        }
                    }
                })
            }
        })
    })