# Feed Reader Testing, Project Overview

The aim of the project is to test an already built web-based application that reads RSS feeds. **Jasmine** is the test framework chosed for the task which is already included as CDN. The Red Green Blue cycle will be shortened just to Red Green cycle since the application is already built.  


## Getting Started

1. Dowload or clone this repository.

2. Look for *jasmine* folder inside the main directory, then for the *spec* folder. Finally look for the *feedreader.js* file where the test with a set of suites has been written/coded.
3. Open the *index.html* file in your browser to see the results of the tests passed and most importantly to **get familiar with the application.**



## Main Directory Structure 

The project has the following main folders containing its respective sub-directories/files and individual files.  
* CSS folder
* fonts folder
* jasmine folder
* JS folder 
* eslint file
* HTML file 
* json file 
* README file 


## Further Information About The Test 
Here you get extra infromation in order to understand the development done for the test. The test was written in the *feedreader.js.* To better understand it it is recommended to take a look at *app.js* and *index.html* files which are part of the reason for the test.  The following are the main tests specifications that we are evaluating (as we can also see in the comments in the *feedreader.js* file):

1. Ensure that the *allFeeds* variable is declared and has values in *app.js.*

2. Ensure that inside *allFeeds* there is an URL defined and that is not empty. Also, a NAME is defined and not empty. 
3. Ensure that the MENU element is hidden by default.  
4. Ensure that the visibility of the MENU changes when it is clicked. 
5. Ensure that there is at least one initial feed entry element when the *loadFeed* function is called. 
6. Ensure that new feed is loaded by the *loadFeed* function when called for the second time. 

**Note:** The last two test are implemented with async. approach. 


# Acknowledgements
The *style.css, index.html, app.js as the starter code* provided by [Udacity](https://www.udacity.com/)
