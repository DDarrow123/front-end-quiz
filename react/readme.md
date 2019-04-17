## 1stdibs.com front-end developer React quiz

Using React and Flux architecture render Single Page Application with these pages:
- Browse - all the items on the page, [browse example](./examples/browse.png)
- Item - detail page with more info about the item, [item example](./examples/item.png)

### Server side notes
Steps to run local server:
- `npm install` - install dependencies
- `npm run start` - run webpack server
- `npm run dev` - run Express.js server

At this point you should be able to access `localhost:3000` in your browser.

*Everything should work with Node `v8.0.0` and up.*

### Client side notes
Page JavaScript files are located in `/src` folder.

Webpack will compile all your CSS and JS assets.

### Requirements
**Browse page:**

- Fetch items data from server side using this endpoint: `[GET] /browse`
- Render items, example [layout](./examples/browse.png)
- Add `Load More` button, which should fetch additional items from the same endpoint

**Item page:**

- Fetch item data from server side using this endpoint: `[GET] /item/{id}`
- Render item, example [layout](./examples/item.png)

**Bonus points:**
Add item favoriting:
- Item can be added and removed to/from favorites from both pages by clicking on the `heart` icon
- Favorited items should be stored server side (db, file or your own solution)
- Examples: [favorite on browse](./examples/favorite-browse.png) and [favorite on item](./examples/favorite-item.png)

### Other Notes:
- Initial App setup is done with [Create React App](https://github.com/facebookincubator/create-react-app)
- You can use any [Flux](https://facebook.github.io/flux/) framework, Redux is preferable, but not a must 
- You can use [ES6 features](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills)
- You can change Create React App or Express.js configs/setup as you like
- You can use any framework for CSS or just write your own styles. Don't need to totally match given examples


### My Notes - Devon Darrow:

Hello! 

For this challenge, here are a few additional project notes: 

1. **Viewing the project** To run and view the project, setup remains the same as noted in the above in the 'Server side notes' section, once you've cloned down the repo to a folder of your choice. First, `cd` into '1stdibs-react-challenge,' then `cd` into 'front-end-quiz,' and lastly `cd` into the 'react' folder. From here, as noted above, the below will get the servers up and running:

- `npm install` - install dependencies
- `npm run start` - run webpack server
- `npm run dev` - run Express.js server

2. **Browse page:** Here I used a simple fetch to render all items on the main page by passing down the set state to the 'Brands' component

3. **Item page:** Here to note, I used my local state array rather then fetching to the endpoint: `[GET] /item/{id}` every time. I think it just helps optimize performance if you don't have to do a fetch every time you click on an item but rather can use the array of items already present. I did write a function to also handle this endpoint just to demonstrate two ways of doing it. 

4. **Bonus points:** This section was definitely the most difficult as I used Lowdb, a small local JSON database,  (https://github.com/typicode/lowdb), to make the item favoriting work. I haven't really worked with an Express server before so it was an interesting challenge both understanding its structure more and how to incorporate Lowdb so I could not only add a field to the current JSON data structure, but also toggle my new field to be true or false depending on clicking the heart. Additionally, making sure that the Brand and Item page were in sync with the favoriting and writing to the JSON was also a unique challenge. I started out with two copies of the same object, so had to rewrite my code to only have one copy of an object from the array I passed down to the Brands page so that no matter where I favorited, the heart status would be the same. 

5. **Styling** I used custom CSS including grids (because Grids are the best that ever was and manually calculating margins and columns/row widths is no fun) and flexbox. I didn't totally match fonts and colors, but if given the specs, I would absolutely change things to match.  

** Throughout the project I tried to maintain good patterns like NOT MUTATING STATE (eek). I didn't implement redux but I am actively learning it so in the next iteration, I would implement redux. Additionally, I think a good use case for it would be if a user needed to log in and out of their session.  

I hope you enjoy!! 
