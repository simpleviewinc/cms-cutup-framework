// use jQuery $.load method to load content in other .html files
$(function(){
    var includes = $("[data-include]");

    $.each(includes, function(index, element){
        var file = $(element).attr("data-include") + ".html";

        $(this).load(file, function(){
            // fire event after file has been loaded so we know when to attach event listeners
            var event = document.createEvent("Event");
            var eventName = $(element).attr("data-include") + "Imported";
            event.initEvent(eventName, true, true);
            document.dispatchEvent(event);
        });
    })
})