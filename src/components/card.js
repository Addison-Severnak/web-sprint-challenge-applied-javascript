import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardWrapper = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthorContainer = document.createElement('div');
  const cardImgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthor = document.createElement('span');

  cardWrapper.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorContainer.classList.add('author');
  cardImgContainer.classList.add('img-container');

  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(cardAuthorContainer);
  cardAuthorContainer.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardImg);
  cardAuthorContainer.appendChild(cardAuthor);

  cardHeadline.textContent = article.headline;
  cardImg.src = article.authorPhoto;
  cardImg.alt = "photo of author";
  cardAuthor.textContent = article.authorName;

  return cardWrapper;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


  const cardAppend = document.querySelector(selector);

  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    console.log(res.data);
    for(let i = 0; i < res.data.articles.bootstrap.length; i++){
      const cardWrapperBS = Card(res.data.articles.bootstrap[i]);
      cardAppend.appendChild(cardWrapperBS); 
    }
    for(let i = 0; i < res.data.articles.javascript.length; i++){
      const cardWrapperJS = Card(res.data.articles.javascript[i]);
      cardAppend.appendChild(cardWrapperJS);
    }
    for(let i = 0; i < res.data.articles.jquery.length; i++){
      const cardWrapperJQ = Card(res.data.articles.jquery[i]);
      cardAppend.appendChild(cardWrapperJQ);
    }
    for(let i = 0; i < res.data.articles.node.length; i++){
      const cardWrapperNode = Card(res.data.articles.node[i]);
      cardAppend.appendChild(cardWrapperNode);
    }
    for(let i = 0; i < res.data.articles.technology.length; i++){
      const cardWrapperTech = Card(res.data.articles.technology[i]);
      cardAppend.appendChild(cardWrapperTech);
    }
  })
}

export { Card, cardAppender }
