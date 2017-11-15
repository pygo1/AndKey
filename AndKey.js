$.fn.AndKey = function(options) {
    "use strict"
    var _options ={
        bindKey:"",
        model:"once",//once loop
        interval:50,
        context:this,
        callBack:function(){}
    };
    $.extend(_options,options);

    var bindKeyArr = (_options.bindKey).split("+");

    $(this).attr("tabindex",0).focus();

    var keyStatus = {};
    var keyForm = {
        "A":65,
        "B":66,
        "C":67,
        "D":68,
        "E":69,
        "F":70,
        "G":71,
        "H":72,
        "I":73,
        "J":74,
        "K":75,
        "L":76,
        "M":77,
        "N":78,
        "O":79,
        "p":80,
        "Q":81,
        "R":82,
        "S":83,
        "T":84,
        "U":85,
        "V":86,
        "W":87,
        "X":88,
        "Y":69,
        "Z":90,
        "0":48,
        "1":49,
        "2":50,
        "3":51,
        "4":52,
        "5":53,
        "6":54,
        "7":55,
        "8":56,
        "9":57,
        //数字键盘按键 加R开头
        "R0":96,
        "R1":97,
        "R2":98,
        "R3":99,
        "R4":100,
        "R5":101,
        "R6":102,
        "R7":103,
        "R8":104,
        "R9":105,
        "R*":106,
        "R+":107,
        "Renter":108,
        "R-":109,
        "R.":110,
        "R/":111,
        //键盘
        "enter":13,
        "shift":16,
        "ctrl":17,
        "alt":18,
        "leftArrow":37,
        "upArrow":38,
        "rightArrow":39,
        "downArrow":40
    };
    var setListen;//定时
    if(bindKeyArr.length){
        for(var index in keyForm){
            for(var i = 0;i<bindKeyArr.length;i++){
                if(bindKeyArr[i] == index){
                    keyStatus[keyForm[index]] = {status:false,key:bindKeyArr[i]};
                    break;
                }
            }
        }
    }
    var Flag = true;
    function setListenFun(){
        if(Flag){
            Flag = false;
            setListen = setInterval(function(){
                for(var item in keyStatus){
                    if(!keyStatus[item]["status"]){
                        return;
                    }
                }
                if(_options.model == "loop"){
                    //TODO
                }else if(_options.model == "once"){
                    clearInterval(setListen);
                }
                _options.callBack.apply(_options.context || this);
            },_options.interval);
        }
    }
    $(this).on("keyup",function(e){
        clearInterval(setListen);
        Flag = true;
        keyStatus.hasOwnProperty(e.keyCode) && (keyStatus[e.keyCode]["status"] = false);
    });
    $(this).on("keydown",function(e){
        setListenFun();
        keyStatus.hasOwnProperty(e.keyCode) && (keyStatus[e.keyCode]["status"] = true);
    });

}
