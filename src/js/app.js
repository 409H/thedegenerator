// Emoji picker from: https://codepen.io/lufutu/pen/gWygjW

$(document).on("click","#emoji-picker",function(e){
    e.preventDefault();
    e.stopPropagation();
     $('.intercom-composer-emoji-popover').toggleClass("active");
 });
 
 $(document).click(function (e) {
     if ($(e.target).attr('class') != '.intercom-composer-emoji-popover' && $(e.target).parents(".intercom-composer-emoji-popover").length == 0) {
         $(".intercom-composer-emoji-popover").removeClass("active");
     }
 });
 
 $(document).on("click",".intercom-emoji-picker-emoji",function(e){
     $("#brand_input").val($(this).html());
     $("#emoji-picker").html($(this).html());
     $(".intercom-composer-emoji-popover").removeClass("active");
 });
 
 $('.intercom-composer-popover-input').on('input', function() {
     var query = this.value;
     if(query != ""){
       $(".intercom-emoji-picker-emoji:not([title*='"+query+"'])").hide();
     }
     else{
       $(".intercom-emoji-picker-emoji").show();
     }
 });