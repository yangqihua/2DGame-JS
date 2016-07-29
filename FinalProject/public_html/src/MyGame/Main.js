/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global gEngine, Scene */

function Main(){
    
}

gEngine.Core.inheritPrototype(Main,Scene);

Main.prototype.initialize = function(){

    gManager.CameraManager.initManager();


    var camera = new Camera(
        vec2.fromValues(0,0),
        50,
        [20,20,400,400]
    );
    gManager.CameraManager.registerCamera(camera,2);

};

Main.prototype.draw = function(){

    while(true){
        // 得到当前的相机
        var camera = gManager.CameraManager.nextCamera();
        if(camera){

            // 渲染物体
            //
            // gManager.ObjectsPool.renderAll(camera);
        }
        // 这一帧渲染结束
        else {
            gManager.CameraManager.moveIndexToHead();
            return;
        }
    }
};

Main.prototype.update = function(){

    // 更新输入

    // 更新物体池内物体

    // 更新相机
};