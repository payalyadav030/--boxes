$(document).ready(function(){
    var box = [];


    $('.box').on('click', function(){
      var item=  $(this).css({
            'z-index':'1',
            'border':'2px solid black'
        })
        console.log(item)
        var item1 = $(this).attr('class')

        box.push(item1);
        console.log(box)
        //console.log(box[0])

        if(box.length ==2){
           
            var a = box[0];
            console.log(a);
            var b = box[1];
            console.log(b);

               //console.log( box[1]);
            if(a == b){
                console.log("ok")
                $(this).css("z-index", "auto")
            }
            box = []
        }    
    })
})