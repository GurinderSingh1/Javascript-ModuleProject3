//Created an object template for a vacation rental property with following properties
function Property(name, price, rating, location, rooms,availability,features){
    this.name = name
    this.price = price; 
    this.rating = rating; 
    this.location = location; 
    this.rooms = rooms; 
    this.availability = availability; 
    this.features = features; 
  }   

  //Created a method to display the description of the property that would be inherited

Property.prototype.description = function () {
  let main = document.querySelector('main'); //using dom select 'main' element

  let newPara = document.createElement('p'); //using dom to create paragraph

  let sentence = 'Hi '+this.name+' Under '+this.price+' with a rating of '+this.rating+' at '+this.location
  +' with '+this.rooms+' rooms available '+' we '+this.availability+' features '+this.features;

  //creating element using 7 properties
  newPara.innerHTML = sentence; 

  main.appendChild(newPara);  //Adding a paragraph inside the element 'p'

  console.log(sentence);  //displaying the sentence in the console

  alert('Hi, this is '+this.name+' Under '+this.price+' with a rating of '+this.rating+' at '+this.location
      +' with '+this.rooms+' available '+' and availabilty= '+this.availability+' and features '+this.features);
//using alert popping up the same sentence
  };

  Property.prototype.available= function () {
    let main = document.querySelector('section'); //using dom select 'main' element

    let newPara = document.createElement('h6'); //using dom to create paragraph

    let sentence = 'Available= '+this.availability ;

    //creating element using 7 properties
    newPara.innerHTML = sentence; 

    main.appendChild(newPara);  //Adding a paragraph inside the element 'p'
    
  console.log(sentence);  //displaying the sentence in the console

  alert('Available= '+this.availability);
//using alert popping up the same sentence
     
      };

      //Created object instance for 3 different vacation rental properties

  let room = new Property('Hotel Grande',300,4,'Quebec',4,'YES','hotbath');

   let room1= new Property('Hotel Inn',200,4.5,'Toronto',3,'NO','Swimming Pool');

   let room2= new Property('J&W Mariott hotel',500,5,'Vancover',5,'YES','Gym');



   //Create an object template for special rate properties that inherits from the property object

      function SpecialRate(name, price, rating, location, rooms,availability,features,specialRate) {

        //inherits the properties from the property object
        Property.call(this, name, price, rating, location, rooms,availability,features); 

        //adding new property special rate
        this.specialRate =specialRate;
        
      }

      SpecialRate.prototype = Object.create(Property.prototype);

      //Instance object for SpecialRate
      let rate1 =new SpecialRate('Hotel Grande',300,4,'Quebec',4,'yes','hotbath','jeje'); 

      //adding a method function to show the reduced rate
    var special={
      specialRate : function() {
         return price-((price/100)*20);
      }
      
    }

//Create an object template for super host properties that inherits from the main property object


   
    function SuperHost(name, price, rating, location, rooms,availability,features,type) {

      //inherits the properties from the property object
      Property.call(this, name, price, rating, location, rooms,availability,features); 

      //adding new property type
      this.type = type ; 
  }

      SuperHost.prototype = Object.create(Property.prototype);

   //Instance object for SuperHost
      let rate =new SuperHost('Hotel Grande',300,4,'Quebec',4,'yes','hotbath','jeje');