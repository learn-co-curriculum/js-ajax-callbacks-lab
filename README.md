# Ajax Lab

## Objectives
+ Use Ajax `get` method
+ Use `success` callback
+ Use `error` callback

## Intro
Let's test out our new Ajax skills by making a "Mad Lib" Maker. [Mad Libs](http://www.madlibs.com/) are paragraphs of text where certain verbs and nouns are missing. It's the job of the reader to pick random words to fill these gaps. The result is usually ridiculous and makes for a good laugh.

For our Mad Lib maker, we will have a static sentence that will include blanks for one missing noun and one missing verb. The HTML page will also have two associated buttons, one for nouns and one for verbs.  When the user clicks the button, we will load words from an external HTML file using Ajax and randomly select a word to add to the sentence.

Hopefully when we are done we will have made the world a better place.

Note: It's recommended you run `python -m SimpleHTTPServer` in your lab folder to start a simple server to host your files.

## Instructions

All of the HTML and Javascript files have been provided. The file `index.html` has the mad lib UI. You will be adding your code to `script.js`. You can run the tests by entering `learn` or `learn -b` in terminal.

1. When a user clicks the noun button, load the words from the
   `noun.html`.
2. Randomly select a word for each blank noun in the phrase.
3. Insert the noun into each noun `span`.
4. When a user clicks the verb button, load the words from the
   `verb.html`.
5. Randomly select a word for each blank verb in the phrase.
6. Insert the verb into each verb `span`.
7. Bind a click event to the verb button.

### Errors
1. Add a callback to handle errors. The error should alert the user something went wrong and display the error.
2. In order to test that this works, replace the url in `.get` to the non-existent `words.html` file.

### Resources

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-ajax-callbacks-lab' title='Ajax Lab'>Ajax Lab</a> on Learn.co and start learning to code for free.</p>
