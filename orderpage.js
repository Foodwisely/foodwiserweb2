/**
 * Created by sushil on 2/27/2016.
 */

var app = angular.module('commonModule', []);
app.controller('commonController', function($scope) {
    $scope.val = "John";
    $scope.categories = [{text: "North Indian", done: false},
        {text: "Bengali", done: false},
        {text: "Gujarati", done: false},
        {text: "Punjabi", done: false},
        {text: "Rajasthani", done: false}];

    $scope.lunchItems = [{title: "Veg Bengali Thali",
        desc: "A delightful combo of rice, chawal and daal A delightful combo of rice, chawal and daal A delightful combo of rice, " +
        "chawal and daal A delightful combo of rice, chawal and daal",
        calories: 166},
        {title: "Non-Veg Bengali Thali",
            desc: "A delightful combo of rice, chawal and daal and Chicken.",
            calories: 250},
        {title: "Veg Gujarati Thali",
            desc: "A delightful combo of rice, chawal and daal from the dry state of Gujrat",
            calories: 100},
        {title: "Veg Bengali Thali",
            desc: "A delightful combo of rice, chawal and daal A delightful combo of rice, chawal and daal A delightful combo of rice, " +
            "chawal and daal A delightful combo of rice, chawal and daal",
            calories: 166},
        {title: "Non-Veg Bengali Thali",
            desc: "A delightful combo of rice, chawal and daal and Chicken.",
            calories: 250},
        {title: "Veg Gujrati Thali",
            desc: "A delightful combo of rice, chawal and daal from the dry state of Gujrat",
            calories: 100}]

    $scope.tabmenuactivity = function(index){
    if(index==0)
    {
        //var url="http://localhost:63342/untitled3/orderpage.html"
        //window.location=url;
        document.getElementById('breakfastbar').style.display='block';
        document.getElementById('lunchbar').style.display='none';
        document.getElementById('dinnerbar').style.display='none';
        document.getElementById('partybar').style.display='none';
    }
        if(index==1)
        {
            document.getElementById('breakfastbar').style.display='none';
            document.getElementById('lunchbar').style.display='block';
            document.getElementById('dinnerbar').style.display='none';
            document.getElementById('partybar').style.display='none';
        }
        if(index==2){
            document.getElementById('breakfastbar').style.display='none';
            document.getElementById('lunchbar').style.display='none';
            document.getElementById('dinnerbar').style.display='block';
            document.getElementById('partybar').style.display='none';
        }
        if(index==3){
            document.getElementById('breakfastbar').style.display='none';
            document.getElementById('lunchbar').style.display='none';
            document.getElementById('dinnerbar').style.display='none';
            document.getElementById('partybar').style.display='block';
        }


    }






});


