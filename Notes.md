<!--
Step 1 : Create react app -> npx create-react-app .
Step 2 : Install React-router-dom library -> npm install react-router-dom
Step 3 : run the project -> npm start

step 4 : clean the code from App.js 
Step 5 : Change the title -> public -> index.html

Step 6 :  Create folder Structure src -> Components, Context, Pages

Step 7 :  Create folder structure Components -> Assets , Navbar -> Navbar.jsx, Navbar.css

Step 8 : Add Navbar.jsx in App.js

step 9 : Navbar.jsx -> rfce -> className : navbar

Step 10 copy paste the Assets folder from google drive 

Step 11 create navbar using html + css 

step 12 create useState variable change the state of the underline in shop ul


Step 13 Pages -> (Shop.jsx , LoginSignup.jsx, Cart.jsx, Product.jsx , ShopCategory.jsx ) -> rafc

Step 14 In App.js setup our routes

import {BrowserRouter, Routes, Route} from 'react-router-dom'

Wrap Navbar from BrowserRouter : This Navbar will be available in all the Components

Create Routes for Route 

Step 15 Link this Route with the Navigation bar
use Link tag

Step 16 Create Hero Component for our Shop Page
In Components -> Create Hero folder -> Hero.jsx -> rafce -> write html 
-> Hero.css -> Write Css

Mount this Hero.jsx in Shop.jsx

Step 17 Components -> items(folder) -> item.jsx -> rafce -> Write HTML
-> item.css -> css

We use this item in different component
So create the popular component for our shop page

Step 18 Components -> Popular -> Popular.jsx -> rafce
Popular.css

Here we use data.js file for products

we import this data_product in our popular component

popular.jsx 

popular.css for design popular.jsx

Step 19 Create offer banner for our shop page Components 
-> Offers 
-> Offers.jsx
-> Offers.css 

import Offers.css to Offers.jsx

Mount this Offers.jsx to Shop.jsx


Step 20 Create Collection Components Where ever our new added product displayed


We will map the new collection data with in the state using Item Components 

NewCollections 
-> NewCollections.jsx
-> NewCollections.css (Css property same of popular.css)

Now we will mount this components in Shop.jsx


Step 21 Now Create Newsletter Subscription box
NewsLetter -> NewsLetter.jsx 
-> NewsLetter.css

Now Mount this NewsLetter component in Shop.jsx

We change in newCollectiontion.css only newcollection remove height and add margin-bottom 

Step 22 Create  Footer component -> Footer.jsx 
-> Footer.css


 

->