$(document).ready(function(){

    $(".project-category-button").click(function(){
        var filterValue = $(this).attr('data-filter');
        
        if(filterValue == "all")
        {
            $(".all").show("slow");
        }
        else
        {
            $(".all").not('.'+filterValue).hide("slow");
            $(".all").filter('.'+filterValue).show("slow");
            
        }
    });

});