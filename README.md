# Surprise Breathtaking Buddy
HackZurich2019 Repo
This is the GitHub repository for the BBS - Team on HackZurich2019

##Challenge:
No. 15 - SBB Surprise Travel

The challenge was to create a surprise travel app for the Swiss Railways SBB in order to bring get more people using the railway instead of the car for leisure travel. The main idea was to shift travelers from peek hours also have the highest ticket prices, to times with less occupancy and lower fares. 

##Solution:

Our application combines the surprising journey in to the unknown and takes it to the next level by presenting the user with a text based adventure. 

SBB - Surprise Journey guides the client from the initial point of sale to the destination of travel. The customer is presented with puzzles about the destination and kept guessing where the journey will take them until they are already on the rails. 

As we realise that even in today's day and age, not everyone possesses a smartphone we tailored the service to work even on a SMS basis alongside dedicated chat services. 

The social angle a train journey was also an important aspect for us while developing the application. Our goal was it to be able to connect people embarking on the Surprise Journey by offering them an possibility to share trips and meet at designated locations in the train. 

##Technial implementation

Find and book the journey. 

Offering the service to the potential customers is done via a mobile optimized website build in vue.js . The users only need to enter the departure location, the desired departure time and the preference for either a hiking trip or a city-visit.
Calling the SBB API with these parameters gave a list of possible locations, from which the cheapest one was selected. The user is at this point presented with the option to like and share the suggestion and book it, or disregard the offers and try another time. 

Going on an andventure with the client
We created an adventure for a selected destination in this proof of concept, based on retro-style text based adventures the client is guided from the point of departure to the destination. Twilio enabled us to send puzzles about the location directly to the phone in a serverless form. 

```
"question": "Now that you have found your seat and we are departing, it is time to let you know where we are going. In this place, one of the most famous composers of the 1900th century has lived and even married",
"name": "composer",
"type": "adventure.COMPOSER",
"validate": {
	"allowed_values": {
		"list": [
			"Richard Wagner",
			"Wagner Richard",
			"R. Wagner",
			"Wagner"
		]
	},							
```

## Deployment

Our application was deployed on netlify (https://www.netlify.com/)

## Created With

* [Vue.js](https://vuejs.org/) - The web framework used
* [Twillio](https://www.twilio.com/) - Chat integration

## Authors

* Peter Buchmann
* Tobias Weisskopf
*  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

The following sites were used as inspiration for the application:

https://www.getyourguide.de/s/?q=Berne&customerSearch=1&searchSource=2&p=1
https://app.ophigo.com/
https://www.tiktok.com/en/
https://space10-community.github.io/conversational-form/landingpage/
https://www.sbb.ch/de/freizeit-ferien/freizeitangebote/tagesausfluege.html



