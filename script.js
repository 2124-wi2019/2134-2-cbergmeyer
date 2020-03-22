/*Craig Bergmeyer
Script.js
INFO 2134
Thoendel
March 20, 2020*/


window.addEventListener('load', function() {
       
    
	//set function to handle a change in selection
	let mealSelector = document.getElementById('meal');
    
    mealSelector.addEventListener('change', function(){
    	// find the value of the selected option
    	let mealSelected = mealSelector.options[mealSelector.selectedIndex].value;
		let makeVis = document.getElementById('mealOptionsHolder');
    	// make options visible based off of selected value
    	if (mealSelected != ''){
    		
    		let makeVisBreak = document.getElementById('breakfastOptions');
    		let makeVisLunch = document.getElementById('lunchOptions');
    		let makeVisDinner = document.getElementById('dinnerOptions');
    		makeVis.className = 'visible';
    		// would probably also make some code to remove the radio button selected if meal is changed
    		
    		if (mealSelected == 'breakfast') {
    			makeVisBreak.className = 'visible';
    			makeVisLunch.className = 'hidden';
    			makeVisDinner.className = 'hidden';    			
    		}
    		else if (mealSelected == 'lunch') {
    			makeVisBreak.className = 'hidden';
    			makeVisLunch.className = 'visible';
    			makeVisDinner.className = 'hidden';	
    		}
    		else if (mealSelected == 'dinner') {
    			makeVisBreak.className = 'hidden';
    			makeVisLunch.className = 'hidden';
    			makeVisDinner.className = 'visible';
    		}
    		
    		
    	}
    	else {
    			makeVis.className = 'hidden';
    			
    	}
    	
    	

    })

    let fName = document.getElementById('firstName');
    	fName.addEventListener('blur', function (){
    		

    		//Check for properly entered format
    		
    		let fNameCheck = this.value;
    		let fName_f = '';
    		//check to make sure a string has been entered that is not a number

    		if (fNameCheck != '' || fNameCheck.isNaN){
    			
    			//Run though all letters and capitalize or "lowerize" accordingly
    			for (let x = 0; x < fName.value.length; x++){
    				if (x== 0){
    					fName_f += fName.value[x].toUpperCase();
    				}
    				else {
    					fName_f += fName.value[x].toLowerCase();
    				}
    			}
    		}
    		//alert and won't let you continue
    		else{errorMessage = 'First name cannot be blank or a number';
    			fName.focus();
    		}
    		// put corrected value in the form
    		fName.value = fName_f;

    		
    })

    let lName = document.getElementById('lastName');
    lName.addEventListener('blur', function (){
    		

    		//Check for properly entered format
    		
    		let lNameCheck = this.value;
    		let lName_f = '';
    		
    		//check to make sure a string has been entered that is not a number

    		if (lNameCheck != '' || lNameCheck.isNaN){
    			//Run though all letters and capitalize or "lowerize" accordingly
   			
    			for (let x = 0; x < lName.value.length; x++){
    				if (x== 0){
    					lName_f += lName.value[x].toUpperCase();
    				}
    				else {
    					lName_f += lName.value[x].toLowerCase();
    				}
    			}
    		}
    		//alert and won't let you continue
    		else{errorMessage = 'First name cannot be blank or a number';
    			lName.focus();
    		}
    		// put corrected value in the form
    		lName.value = lName_f;
    })

    let age = document.getElementById('age');
    	age.addEventListener('blur', function (){
    		
    		//set variables    		
    		let ageCheck = this.value;
    		
    		//check that input is a number
    		if (ageCheck == '' || isNaN(ageCheck)){
   				//alert and won't let you continue
    			//Chrome has an issue with infinite loop with alert without timerout function
    		
   				alert('Please enter a valid number!');
    			setTimeout(function(){
            	age.value = '';
    			age.focus();
        		},0);
    			
    		}
    		    		
    })	
	// Set variables needed
	let starSelector = document.getElementById('mealRating');
   	

    starSelector.addEventListener('change', function(){
    	

    	document.getElementById('commentsHolder').innerHTML = ''; 
		//reset the bool flag
		badRating = false;

		// get the value of the slection
		let starSelected = starSelector.options[starSelector.selectedIndex].value;
		
		//check if the rating is zero stars
			if (starSelected == '0'){

				badRating = true;
			}

	    	if (badRating) {
		    	//define variable for the elements I need
		    	let errorClass = document.getElementById("errorHolder");
		    	let commentHolder = document.getElementById('commentsHolder');
		    	//Create the label and the label text
		    	let commentLabel = document.createElement('label');
		    	let commentLabelText = document.createTextNode('You rated us zero stars! Please let us know why:');
		    	//create line break element
		    	let lineBreak = document.createElement('br');
		    	//create and define the box
		    	let commentBox = document.createElement('textarea');
		    	commentBox.id = 'userComments';
		    	commentBox.name = 'userComments';
		    	commentBox.rows = '5';
		    	commentBox.cols = '33';
		    	
		    	//Hide the error class
		    	if (!(errorClass.className == 'hidden')){
		    		if (errorClass.innerHTML.text == ''){

		    			errorClass.className = 'hidden';
		    		}
		    	}


		    	// make the comment holder visible and add the label, break and comment box
		    	commentHolder.className = 'visible';
		    	commentLabel.appendChild(commentLabelText);
		    	commentHolder.appendChild(commentLabel);
		    	commentHolder.appendChild(lineBreak);
		    	commentHolder.appendChild(commentBox);
				
	   	

		    }
		    else if (!badRating){
		    	let commentHolder = document.getElementById('commentsHolder');
				// Change the class back to hidden
				// text is cleared at the top 
		    	if (!(commentHolder.className == 'hidden')){
		    		commentHolder.className = 'hidden'
		    	}
		    }
		 

    })

    let myForm = document.getElementById('contactForm');
    let radioChecks = document.querySelectorAll('input');
    //sets and resets boolean value to false
	
	
	//Set error flag 
    let errorCheckBool = false;
      

    myForm.addEventListener('submit', function(e){
    	// prevent default for testing purposes
    	//e.preventDefault();
		// Clear previous errorbox
		document.getElementById('errorHolder').innerHTML = '';
		// reset boolean flag
		errorCheckBool = false;

		

		// Check first name for entry
		if (document.getElementById('firstName').value == ''){
			//Flag error check bool
			errorCheckBool = true;
			//Create a list and gives the list an id
			let fNameError = document.createElement('li');
			fNameError.id = 'errorList';
	  		// Enters the error text to be displayed
	  		let errorCode = document.createTextNode('First name is missing or blank!'); 
	  		// adds the text Node to the list element 
	 		fNameError.appendChild(errorCode); 
	  		//sets the position to insert the text
	  		let insertError = document.getElementById('errorHolder');
			//inserts the text
	  		document.getElementById('errorHolder').appendChild(fNameError);

    	}
    	// Check last name for entry
    	if (document.getElementById('lastName').value == ''){
			//Flag error check bool
			errorCheckBool = true;
			//Create a list and gives the list an id
			let lNameError = document.createElement('li');
			lNameError.id = 'errorList';
	  		// Enters the error text to be displayed
	  		let errorCode = document.createTextNode('Last name is missing or blank!'); 
	  		// adds the text Node to the list element 
	 		lNameError.appendChild(errorCode); 
	  		//sets the position to insert the text
	  		let insertError = document.getElementById('errorHolder');
			//inserts the text
	  		document.getElementById('errorHolder').appendChild(lNameError);	
    	}
		// Check email name for entry
    	if (document.getElementById('emailAddress').value == ''){
			//Flag error check bool
			errorCheckBool = true;
			//Create a list and gives the list an id
			let emailError = document.createElement('li');
			emailError.id = 'errorList';
	  		// Enters the error text to be displayed
	  		let errorCode = document.createTextNode('Email is missing or blank!'); 
	  		// adds the text Node to the list element 
	 		emailError.appendChild(errorCode); 
	  		//sets the position to insert the text
	  		let insertError = document.getElementById('errorHolder');
			//inserts the text
	  		document.getElementById('errorHolder').appendChild(emailError); 	
    	}
    	
    	if (document.getElementById('age').value == ''){
			//Flag error check bool
			errorCheckBool = true;
			//Create a list and gives the list an id
			let ageError = document.createElement('li');
			ageError.id = 'errorList';
	  		// Enters the error text to be displayed
	  		let errorCode = document.createTextNode('Age is missing or blank!');
	 		ageError.appendChild(errorCode); 
	  		//sets the position to insert the text
	  		let insertError = document.getElementById('errorHolder');
			//inserts the text
	  		document.getElementById("errorHolder").appendChild(ageError); 	
    	}
   		// Set up variables for radio validation
	    let bRadio = document.getElementsByTagName('input');
	    let mealSelected = mealSelector.options[mealSelector.selectedIndex].value;
	    let x = 0;
	    // Check for selection
	    if (mealSelected == ''){
	    	
	    } 
	    // Checks to make sure radio button for selected meal is checked
	    else if (mealSelected == 'breakfast'){
    		for (let i = 4; i < 7; i++){
   				if (bRadio[i].type == 'radio' && bRadio[i].checked){
   						x++;
   				}	
   			}
	    }
	    // Checks to make sure radio button for selected meal is checked
	    else if (mealSelected == 'lunch'){
    		for (let i = 7; i < 10; i++){
   				if (bRadio[i].type == 'radio' && bRadio[i].checked){
   						x++;
   				}	
   			}
	    }
	    // Checks to make sure radio button for selected meal is checked
	    else if (mealSelected == 'dinner'){
    		for (let i = 10; i < 13; i++){
   				if (bRadio[i].type == 'radio' && bRadio[i].checked){
   						x++;
   				}	
   			}
	    }
	    // error message
	    if (x == 0){
			//Flag error check bool
			errorCheckBool = true;
			//Create a list and gives the list an id
			let mealsSelectionError = document.createElement('li');
			mealsSelectionError.id = 'errorList';
	  		// Enters the error text to be displayed
	  		let errorCode = document.createTextNode('You must make a meal selection!'); 
	  		// adds the text Node to the list element 
	 		mealsSelectionError.appendChild(errorCode); 
	  		//sets the position to insert the text
	  		let insertError = document.getElementById('errorHolder');
			//inserts the text
	  		document.getElementById("errorHolder").appendChild(mealsSelectionError); 	
    	
		}	
		

		// Set variables needed
		let starSelector = document.getElementById('mealRating');
    	let starSelected = starSelector.options[starSelector.selectedIndex].value;
    	let userComments = document.getElementById('userComments');
		// Check that a rating has been selected

		if (starSelected == ''){
			//Flag error check bool
			errorCheckBool = true;
			//Create a list and gives the list an id
			let starSelectionError = document.createElement('li');
			starSelectionError.id = 'errorList';
	  		// Enters the error text to be displayed
	  		let errorCode = document.createTextNode('You must make a star selection!'); 
	  		// adds the text Node to the list element 
	 		starSelectionError.appendChild(errorCode); 
	  		//sets the position to insert the text
	  		let insertError = document.getElementById('errorHolder');
			//inserts the text
	  		document.getElementById('errorHolder').appendChild(starSelectionError);
		}
		if (userComments != null){
			if (userComments.value == ''){
				errorCheckBool = true;
				//Create a list and gives the list an id
				let starSelectionError = document.createElement('li');
				starSelectionError.id = 'errorList';
		  		// Enters the error text to be displayed
		  		let errorCode = document.createTextNode('Please give us feedback!'); 
		  		// adds the text Node to the list element 
		 		starSelectionError.appendChild(errorCode); 
		  		//sets the position to insert the text
		  		let insertError = document.getElementById('errorHolder');
				//inserts the text
		  		document.getElementById('errorHolder').appendChild(starSelectionError);
			}
		}
		
		
		
	    
		//for testing star ratings without any other info needed
		//errorCheckBool = false;

	    if (errorCheckBool){
	    	
	    	//creates a paragraph element for the header text
			let errorMessage = document.createElement('p');
			errorMessage.id = 'errorHeader';
			let errorCode = document.createTextNode('Error! Please correct the following items before you can submit the form:');
			errorMessage.appendChild(errorCode);
			// places header text on the top of any list created
			let  errorHolder = document.getElementById('errorHolder');
	  		errorHolder.appendChild(errorMessage);
			errorHolder.insertBefore(errorMessage, errorHolder.firstChild)
			//defines the class to be used for the error-holder div
			let errorClass = document.getElementById("errorHolder");
  			//errorClass.classList.add("errorBox");
   			errorClass.className = 'errorBox';

  			//prevents the default action of the submit button
			e.preventDefault();

	    }
	    
		    	    	
    })
	
	 myForm.addEventListener('reset', function(e){

	 	let errorHolder = document.getElementById('errorHolder');
	 	let mealOptionsHolder = document.getElementById('mealOptionsHolder');
	 	let commentsHolder = document.getElementById('commentsHolder')
	 	if (errorHolder.className != 'hidden'){
	    	errorHolder.className = 'hidden';
	    	errorHolder.innerHTML.text = '';
	    }
	    
	   if (mealOptionsHolder.className != 'hidden'){
	    	mealOptionsHolder.className = 'hidden';
	    }

	    if (commentsHolder.className != 'hidden'){
	    	commentsHolder.className = 'hidden';
	    	commentsHolder.innerHTML.text = '';
	    }
	    let fName = document.getElementById('firstName');
	    fName.focus();
	 })

});
