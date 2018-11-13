var log4js = require('log4js');

var WebElementActions=function(){
	
	this.logger = log4js.getLogger();
	
	
	this.log=function(message){
		console.log("message");
		this.logger.level ="info";
		this.logger.info(message);
	};
	
	
	this.waitUntil=function(element,condition){
		
		var EC = protractor.ExpectedConditions;
		if(condition==1)
		 browser.wait(EC.elementToBeClickable(element), 5000);
		else if(condition==2)
			browser.wait(EC.alertIsPresent(), 5000);
	};
	
	
	this.clickButton=function(buttonElement){
		
		this.waitUntil(buttonElement,1);
		return buttonElement.click();
		
	};
	
	
	this.fillTextField=function(element){
		
		element.sendKeys().then(function(){
			console.log("Filled Text Filed");
		});
		
	};
	
	this.selectFromDropdown=function(element,option){
		
		element.all(by.tagName('option')).then(function(options){
	        options[option].click();
	      });	
		
	};
	
	
	this.handleAcceptAlert=function(){
		
		this.waitUntil(null,2);
		try{
			browser.switchTo().alert().accept().then(function(){
				console.log("alert handled sucessfully");
			});
		}
		catch(err){
			console.log("unable to handle alert");
		}
		
		
	};
	
	this.getRowFromTable=function(webTable,containgcolumnValue)
	{
		
	};
	
	
};

module.exports=WebElementActions;
