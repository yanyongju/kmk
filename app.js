
angular.module('app',['ui.router','angularCSS','once','play'])

.controller('hotCtrl',function($scope,$http){
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

            $scope.hotarr = arr;
      })
})
.controller('actionCtrl',function($scope){
    $scope.actionArr=[{
        "img":"https://ctcdn.comicool.cn/tucao_xiaobanner_nana_20170302.jpg?imageView2/2/w/270",
    },{
        "img":"https://ctcdn.comicool.cn/youxirensheng_banner_nana_20170116.jpg?imageView2/2/w/270"
    }]
    console.log($scope.actionArr)
})
.controller('newCtrl',function($scope){
    $scope.newArr = [{
        "img":"https://cdn.comicool.cn/693_ccover_hp_288ac5c97ba01b30.jpg?imageView2/2/w/180",
        "title":"家有萌萌哒",        
    },{
        "img":"https://cdn.comicool.cn/707_ccover_hp_a543c9ca382d65f3.jpg?imageView2/2/w/180",
        "title":"猫咪甜品屋",
    },{
        "img":"https://cdn.comicool.cn/11765_ccover_hp_e730bb983b38d8bf.jpg?imageView2/2/w/180",
        "title":"尸间断",
    },{
        "img":"https://cdn.comicool.cn/11651_ccover_hp_d6265eb81c63927a.jpg?imageView2/2/w/180",
        "title":"风鬼传说",
    }]

    $scope.newArr1 = [{
        "img":"https://cdn.comicool.cn/12096_ccover_hp_3c165a9bccdb12ed.jpg?imageView2/2/w/180",
        "title":"BOSS哥哥你欠揍",
    },{
        "img":"https://cdn.comicool.cn/10964_ccover_hp_e610601982e49aef.jpg?imageView2/2/w/180",
        "title":"恶魔日记",
    },{
        "img":"https://cdn.comicool.cn/12207_ccover_hp_7216dbf5ffca85bc.jpg?imageView2/2/w/180",
        "title":"婚途陌路",
    },{
        "img":"https://cdn.comicool.cn/12104_ccover_hp_f55a4a7aa06d5f48.jpg?imageView2/2/w/180",
        "title":"模颜奇谈",
    }]
})


$.get('http://localhost:3000/hotjson',function(res){
        var h = res.data;
        var str = ''
        for(var i = 0;i <h.length;i++){
            str+='<span>\
                    <img src="'+h[i].img+'" alt="">\
                    <h3 class="hot_title">'+h[i].title+'</h3>\
                    <p class="hot_desc">'+h[i].desc+'</p>\
                 </span>'
        }
        $('#hot_new').html(str);

})

$.get('http://localhost:3000/tougaojson',function(res){
        var h = res.data;
        var str = ''
        for(var i = 0;i <h.length;i++){
            str+='<span>\
                    <img src="'+h[i].img+'" alt="">\
                    <h3 class="hot_title">'+h[i].title+'</h3>\
                    <p class="hot_desc">'+h[i].desc+'</p>\
                 </span>'
        }
        $('#hot_tougao').html(str);

})

$.get('http://localhost:3000/paihangjson',function(res){
        var h = res.data;
        var str = ''
        for(var i = 0;i <h.length;i++){
            str+='<li>\
                    <img src="'+h[i].img+'" alt="">\
                    <div><h3 class="hot_title">'+h[i].number+' '+h[i].title+'</h3>\
                    <p class="hot_desc">'+h[i].desc+'</p></div>\
                 </li>'
        }
        $('#hot_ul').html(str);

})