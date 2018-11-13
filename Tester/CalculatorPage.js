var CalculatorPage=function(){
	 
	this.number1=element(By.model("first"));
	this.number2=element(By.model("second"));
	this.result=element(By.xpath("//h2[@class='ng-binding']"));
	this.goButton=element(By.id("gobutton"));
	this.operationSelector=element(By.model("operator"));
	this.resultTable=element.all(By.repeater("result in memory")).first();

	
	this.fillNumber1=function(){
		this.number1.sendKeys("20").then(function(){
			console.log("Number1 entered");
		});
		
	};
	
	this.fillNumber2=function(){
		this.number2.sendKeys("30").then(function(){
			console.log("number2 entered");
		});
		
	};
	
	this.getResult=function(){
		//var Ec=protractor.ExpectedConditions;
		//browser.wait(Ec.and(Ec.textToBePresentInElement(this.result)));
		return this.result.getText().then(function(result){
			return result;
		});
		
	};
	
	this.clickGoButton=function(){
		
		this.goButton.click().then(function(){
			console.log("Go! button clicked");
		});
		
	};
	
	this.selectOperation=function(optionNumber){
		this.operationSelector.all(by.tagName('option')).then(function(options){
	        options[optionNumber].click();
	      });

    };
    
     this.getResultsFromTable=function(){
    	
    	return this.resultTable.all(by.tagName("td")).then( async function(cols){
    	 var set=new Set();
       for(var i=0;i<3;i++)
    	   {
    	   await  cols[i].getText().then(function(text){
    	    	 set.add(text);
    	     });
    	   }
       return set;

    	});
    	
    	
    	
    };
	
	
	
};


module.exports=CalculatorPage;