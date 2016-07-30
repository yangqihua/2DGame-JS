//  Global variable ObjectPool
//  the following syntax enforces there can only be one instance of ObjectPool
"use strict"; 
// Operate in Strict mode such that variables must be declared before used!

var ObjectPool = ObjectPool || {};

ObjectPool = (function () {
     // Initialize the object set
     this.mObjectArray = [];
     this.mObjectState = []; //To define each object if it is in use 
                             //if in use ,state is False;
                             //not in use,True and you can use it.
     // define the initial size
     this.MAX_POOLSIZE = 10; 

     // set the max size if needed
     var setMaxSize =function(size){
          this.MAX_POOLSIZE = size;
     };

     // get the size of current object Array
     var getSize = function() {
          return this.mObjectArray.length;
     };
     
     // add obj and set the initial state
     var addObject = function(ob) {
          // add new project into this pool
          // and the project is not in use
          this.mObjectArray.push(ob);
          this.mObjectState.push(True);
     };

     //remove it
     var removeObject = function(ob){
          var index = this.mSet.indexOf(obj);
               if (index > -1){
                    this.mObjectArray.splice(index, 1);
                    this.mObjectState.splice(index,1);
               }
     };

     // get the obj through id
     var getObjectAt = function (index) {
          return this.mObjectArray[index];
     };

     // use the obj
     var activeState = function(id){
          this.mObjectState[i] = False; // it is in use
     };

     // reset it
     var resetState = function(id){
          this.mObjectState[i] = True; // it is in use
     };

     var resetAll =function(){
          for(var i = 0;i < this.mObjectArray.length; i++){
               this.resetState(i);
          }
     };

     var renderAll = function(camera){
          for(var i = 0 ; i < mObjectArray.length; i++){
               if(this.mObjectState){
                    this.mObjectArray[i].draw(camera);
                    activeState(i);
               }
          }
     };   

     var mPubulic={
          setMaxSize:setMaxSize;   //set the largest size of this pool
          resetState:resetState;   //reset some state of the obj
          activeState:activeState; //active some state of the obj
          getSize:getSize;         //get the current size
          addProject:addProject;   //add
          getObjectAt:getObjectAt; //get one obj by id
          resetAll:resetAll;       //reset all obj to state true
          renderAll:renderAll;     //render all obj
     };    

     return mPubulic;
}());

