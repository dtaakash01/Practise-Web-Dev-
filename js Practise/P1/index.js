console.log("Hello");

//Immediately invokabel functions

(function() {
    console.log("TAta");
})();

//Property Function

const todo =  {
    add: function(){
        return 2+2
    },
    sub: function(){
        return 2-2
    }
}

todo.mul = function(){
    return 2*2
}

console.log(todo.add());