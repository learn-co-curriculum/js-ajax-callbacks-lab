# Ajax Lab

## Objectives

+ Use Ajax `get` method
+ Use `success` callback
+ Use `error` callback
+ Read API documentation
+ Use Handlebars templates to render responses.

## Introduction

Let's use our new Ajax skills to work by making a Github repository search
client. This lab will test your ability to use jQuery's `$.get` function with callbacks, and give you some more practice reading API documentation.

We're also going to practice using Handlebars templates with Ajax,
and bringing these tools altogether to create a dynamic application.

All of the HTML and javascript files have been provided. The file `index.html` has a basic two column structure, and you'll add your JavaScript code to `script.js`. There are also tests, so don't forget to run them, and load your page up in the browser to make sure everything's working!

## Instructions

We're making a Github repository search client. It should take a user's
search terms, query the Github search API for repositories, and display
the results in the left-hand column. The user can then click various
links in each repository to get more detailed information in the
right-hand column.

1. Create a "Search Repositories" link that calls a `searchRepositories`
   function on click, takes the value of a `searchTerms` text input and queries the
Github repository search API.
2. Display the collection of repositories inside the `results` div.
   Include repository name, description, and a link to the html url.
Also include repository owner login, repository owner
avatar as an image, and a link to the owner's profile page. **Hint:**
Pay close attention to the structure of the search results!
3. Add a "Show Commits" link to each repository result that will call a `showCommits` function
   that gets the repository's commitss from the Github API and display them in the `details` div. For each commit, list the SHA, the author, the author's login, and the author's avatar as an image.
4. Handle errors on each API call. If `$.get` fails, call a function
   `displayError` and display "I'm sorry, there's been
   an error. Please try again." in the `errors` div.
**Hint:** You can test your error callbacks by turning off wi-fi or
temporarily changing the URL you use in the `$.get` request.
5. Use Handlebars templates to render your results instead of
building your HTML in your JavaScript functions. Extract the user data
sections into a partial called `userDetails` that can be reused for both the repository
results and the commits. Register the partial in the provided
`handlebarsSetup` function.

## Resources

- [jQuery.get](http://api.jquery.com/jquery.get/)
- [Github API](https://developer.github.com/v3/)
- [Handlebars](http://handlebarsjs.com/)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-ajax-callbacks-lab'>Reading from the GitHub API with jQuery AJAX Lab</a> on Learn.co and start learning to code for free.</p>
