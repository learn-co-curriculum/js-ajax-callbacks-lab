# Ajax Lab

## Objectives
+ Use Ajax `get` method
+ Use `success` callback
+ Use `error` callback

## Intro
Let's test out our new Ajax skills by making a "Mad Lib" Maker. [Mad Libs](http://www.madlibs.com/) are paragraphs of text where certain verbs and nouns are missing. It's the job of the reader to pick random words to fill these gaps. The result is usually riduculous and makes for a good laugh.

For our Mad Lib maker, we will have a static sentence that will include blanks for one missing noun and one missing verb. The HTML page will also have two associated buttons, one for nouns and one for verbs.  When the user clicks the button, we will load words from an external HTML file using ajax and randomly select a word to add to the sentence.

Hopefully when we are done we will have made the world a better place.

Note: It's recommended you run ```python -m SimpleHTTPServer``` in your lab folder to start a simple server to host your files.

## Instructions
All of the HTML and javascript files have been provided. The file ```index.html``` has the mad lib UI. You will be adding your code to ```script.js```. There are also Jasemine tests under ```specs``` that you can run by loading the ```SpecRunner.html``` file in Firefox to test your work.

### A. Random Noun Button
For all spans with class ```noun``` a randomly selected word from ```noun.html``` will be inserted.

1. Bind a click event to the noun button.
2. Inside of the function, use the jQuery ```$.get``` method to load the ```noun.html``` file.
3.  Using a callback function, split the data returned by each newline or ```\n```. This will create an array of nouns for us to pick from.
4. Use jquery to get all the span elements with the ```noun``` class.
5. For each element:
  a. Using ```Math.random```, pick a random index for the nouns array.
  b. Use the random index from (5.a) to select a noun from the nouns array.
  c. Replace the HTML within the span tag with the noun from (5.b).

### B. Random Verb Button
For all spans with class ```verb``` a randomly selected word from ```verb.html``` will be inserted.

1. Bind a click event to the verb button.
2. Inside of the function, use the jQuery ```$.get``` method to load the ```verb.html``` file.
3.  Using a callback function, split the data returned by each newline or ```\n```. This will create an array of verbs for us to pick from.
4. Use jquery to get all the span elements with the ```verb``` class.
5. For each element:
  a. Using ```Math.random```, pick a random index for the verbs array.
  b. Use the random index from (5.a) to select a verb from the verbs array.
  c. Replace the HTML within the span tag with the verb from (5.b).

### Errors
1. Add a callback to handle errors. The error should alert the user something went wrong and display the error.
2. In order to test that this works, replace the url in ```.get``` to the non-existent ```words.html``` file.
