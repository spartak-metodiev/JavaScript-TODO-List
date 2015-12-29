enterPress();



function getValue(){
	   var inputValue = document.getElementById( 'input' ).value;
	   var newDiv = document.createElement( 'div' );
		 var firstValue = document.createElement( 'p' );
		 var checkBox = document.createElement( 'input' );
     
     var label = document.createElement( 'label' );
		
     var exit = document.createElement( 'div' );
		 var leaveActive = document.getElementById( 'completed' );
		 var active = document.getElementById( 'active' );
		 var all = document.getElementById( 'all' );
		 checkBox.type = "checkbox";
       

		 firstValue.innerHTML += inputValue;


		 
		 newDiv.setAttribute( "class", "newDiv" );
		 firstValue.setAttribute( "class", "firstValue" );
		 exit.setAttribute( "class", "exit" );
		 checkBox.setAttribute( "class", "checkbox" );

		 exit.innerHTML += "x";

  
	   newDiv.appendChild( firstValue );
	   newDiv.appendChild( checkBox );
	   newDiv.appendChild( exit );
    
    
     document.getElementById( 'value' ).appendChild( newDiv );
     resetValue();

    //mark as complete
     checkBox.addEventListener( 'click', function(){
      


     if( checkBox.checked == true){
        firstValue.className += " true";
     
            

     } if( checkBox.checked == false ){
        firstValue.classList.remove( "true" );
            

        }

    } );



    // delete task

    exit.addEventListener( 'click', function(){
    	newDiv.remove();
    } );
	

	   //leave active completed
	  leaveActive.addEventListener( 'click', function(){

      leaveActive.setAttribute( "class", "border" )
      active.classList.remove( "border" );
      all.classList.remove( "border" );
      var div = document.getElementsByClassName( 'newDiv' );
      var inputCheck = document.getElementsByClassName( 'checkbox' );

      
       for( var i = 0; i < div.length; i++ ){

      	for( var j = 0; j < inputCheck.length; j++ ){


      	  	if( inputCheck[j].checked == false ){
                
      		      div[j].style.display = "none";

          
             }if(   inputCheck[j].checked === true && div[j].style.display === "none" ){
                div[j].style.display = "inline-block";

              }
  } }
		
} );
   //active
     active.addEventListener( 'click', function(){
  
        active.setAttribute( "class", "border" );
        leaveActive.classList.remove( "border" );
        all.classList.remove( "border" );
	      var div = document.getElementsByClassName( 'newDiv' );
        var inputCheck = document.getElementsByClassName( 'checkbox' );

      
        for( var i = 0; i < div.length; i++ ){
      	   for( var j = 0; j < inputCheck.length; j++ ){
      	
      	  	  if( inputCheck[j].checked == true ){
      		      div[j].style.display = "none";

              }if(   inputCheck[j].checked === false && div[j].style.display === "none" ){
                  div[j].style.display = "inline-block";

              }

  } }

} );

     all.addEventListener( 'click', function(){

          all.setAttribute( "class", "border" )
          active.classList.remove( "border" );
          leaveActive.classList.remove( "border" );
	        newDiv.style.display = "inline-block";

});

 
  
    
}

     function resetValue() {    
        document.getElementById("input").value = ""; 
     }


     function enterPress() {
       
        document.getElementById('input').onkeypress = function searchKeyPress(event) {
          if (event.keyCode == 13) {
            if( document.getElementById( 'input' ).value != '' ){
              document.getElementById('button').click();
        }
      }
    };

   
}




	

