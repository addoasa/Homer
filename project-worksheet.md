# Project Overview

****************API-LINK*************** 
https://3d.io/docs/api/2/furniture.html
***************************************

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

Homer is an app that will allow a user to build their own customized home with furniture that can be accessed from an API.
THe user can search for an item and decide whether or not they want that item in their home. This is great for interior designers and people who want to have a visual representation of all the things that they want to add to their new or current home all in one place.

## Wireframes
https://res.cloudinary.com/ddz7dotz5/image/upload/v1547534467/IMG_4070.jpg

1) In the first wire frame users will type into the search input field which will render furniture items by name.
	Search results will accumulate below the search bar.
2) In the second Wireframe users can click the icon on a search result. That search resutlt will then populate the top of the 	     webpage forming a moodboard of furniture.

## Priority Matrix

https://res.cloudinary.com/ddz7dotz5/image/upload/v1547534474/IMG_4078.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### SAMPLE.....
#### MVP 

- Get data from furniture api 
- Create work space area (where favorites will be rendered) 
- Implement search function
- Implement favoriting function

#### PostMVP 
- Allow users to log in and have the favorites saved


## React Architectural Design

https://res.cloudinary.com/ddz7dotz5/image/upload/v1547534481/IMG_4081.jpg

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| Workspace | This will render the favorited furniture items | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Fetch from Api | H | 3hrs| 0hrs |
| Render Search Results Component based on API filter | H | 4hrs| 0hrs |
| Create an onClick system(likely pushing into an array)for Favorites moodboard | H | 3hrs| 0hrs |
| Render favorites moodboard | H | 2hrs| 0hrs |


| Total | H | 12hrs| 0hrs | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
