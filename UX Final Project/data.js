$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        item: [
            {
                const CAT_COST = 25;
                
            },
            {
                const DOG_COST = 50;

            
            },
            {
                const BIRD_COST = 25;
            },
            {
                name: "Chicken",
                price: "2"
            }
        ],

        show: false
    })
    $("#target").html(rendered);
});