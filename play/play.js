angular.module('play',[])
.config(function($stateProvider){
        console.log($stateProvider)

        $stateProvider.state('play',{
            url:'/play/:id',
            params:{
                id:null
            },
            templateUrl:'play/play.html',
            controller:function($scope,$stateParams,$http){
                var id= $stateParams.id;
                
                console.log(id);
                $http.get('public/home_page/yugao.json')
                .then(function(res){
                    return res.data
                })
                .then(function(data){
                    // console.log(data)
                    return data.data;
                })
                .then(function(arr){
                    console.log(id)
                   for(var i = 0;i<arr.length;i++){
                       if(arr[i].id == id){
                            $scope.img = arr[i].images;
                        }
                   }
                })
            }
        })
    })