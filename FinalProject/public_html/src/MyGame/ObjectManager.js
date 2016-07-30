//  Global variable EngineCore
//  the following syntax enforces there can only be one instance of EngineCore object
"use strict";  // Operate in Strict mode such that variables must be declared before used!

var ObjectManager = ObjectManager || {};

ObjectPool = (function () {
     // Initialize the object set
     this.mObjectArray = [];
     this.mObjectState = []; //To define each object if it is in use 
                            //if in use ,state is False;
                            //not in use,True and you can use it.
     // define the initial size
     this.MAX_POOLSIZE = 10; 
     


     var setMaxSize =function(size){
          this.MAX_POOLSIZE = size;
     }

     var getSize = function() {
          // get the size of current object Array
          return this.mObjectArray.length;
     };
     
     var addObject = function(ob) {
          // add new project into this pool
          // and the project is not in use
          this.mObjectArray.push(ob);
          this.mObjectState.push(True);
     };
     var removeObject = function(ob){
          var index = this.mSet.indexOf(obj);
               if (index > -1){
                    this.mObjectArray.splice(index, 1);
                    this.mObjectState.splice(index,1);
               }
     }

     var resetState = function(id){
          this.mObjectState[i] = False; // it is in use
     };

     var renderAll = function(camera){
          for(var i = 0 ; i < mObjectArray.length; i++){
               this.mObjectArray[i].draw(camera);
          }
     };   
     var mPubulic={
          setMaxSize:setMaxSize;
          resetState:resetState;
          getSize:getSize;
          addProject:addProject;

          renderAll:renderAll;
     }    

     return mPubulic;
}());

