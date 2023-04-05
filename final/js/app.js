
function FormCheck(){
    err= "";
    var ret = false;
    
    isValidEmail();
    
    document.getElementById("errors").innerHTML = err;
    
    if(err==""){
        ret = true;
    }
    return ret;
}

function isValidEmail() {
    err = "";
    
    var email_pattern = /[a-z0-9]+@[a-z]+\.[a-z]]\.[a-z]{2,3}/;
    var user_email = documet.getElementById("email").value;
    
    if(email_pattern.test(user_email) == false){
        err += "Wrong format, Please try again";
    }
    
}

const { reviewData } = window;

window.onload = function () {

    var cardDisplay = document.getElementById("cards");
        cardDisplay.innerHTML = "";
  
    for(let i = 0; i < window.reviewData.length; i++){

            var thumbsup = document.createElement("img");
                thumbsup.setAttribute("src", "./src/r4.jpg");
                thumbsup.setAttribute("alt", `image`);
                thumbsup.setAttribute("class", "thumbs");

            let Card = document.createElement("div");
            
            var nameData = document.createElement("h5");
                thumbsup.setAttribute("class", "namedata");
            var reviewData = document.createElement("p");
                reviewData.setAttribute("class", "reviewdata");
            var rateData = document.createElement("span");
                rateData.setAttribute("class", "ratedata");
            var dateData = document.createElement("span");
                dateData.setAttribute("class", "datedata");

            Card.setAttribute("class", "cards");
            
            var name = document.createTextNode(window.reviewData[i].name + " said");
            var review = document.createTextNode(">>" + window.reviewData[i].review);
            var rate = document.createTextNode("Rate: " + window.reviewData[i].rate);
            var date = document.createTextNode(window.reviewData[i].date);
        

            nameData.appendChild(name);
            reviewData.appendChild(review);
            rateData.appendChild(rate);
            dateData.appendChild(date);

            Card.appendChild(thumbsup);
            Card.appendChild(nameData);
            Card.appendChild(reviewData);
            Card.appendChild(rateData);
            Card.appendChild(dateData);

            cardDisplay.appendChild(Card);
   
    }



//     var cardDisplay = document.getElementById("cards");
//     cardDisplay.innerHTML = "";
  
//   var thumbsup = document.createElement("img");
//   thumbsup.setAttribute("src", "../src/r4.jpg");
//   thumbsup.setAttribute("alt", `image`);

//   var Card = document.createElement("div");
//   var nameData = document.createElement("h5");
//   var reviewData = document.createElement("p");
//   var rateData = document.createElement("span");
//   var dateData = document.createElement("footer");



//   Card.setAttribute("class", "card");

//   var name = document.createTextNode(window.reviewData.name);
//   var review = document.createTextNode(window.reviewData.review);
//   var rate = document.createTextNode(window.reviewData.rate);
//   var date = document.createTextNode(window.reviewData.date);

//   nameData.appendChild(name);
//   reviewData.appendChild(review);
//   rateData.appendChild(rate);
//   dateData.appendChild(date);


//   Card.append(thumbsup , nameData, reviewData, rateData, dateData);
};

