import React from 'react';
import './style.css';
import images from '../../assets/images'

function CanvasChat(props) {
    return (
      <section className="chat_container" >
        <div className="search_user_container">
          <input placeholder='Найти участника' className="search_user" />
          <img alt="search" src={images.search} className='search_icon' />
        </div>
        <div className='chat_screen'>
          <div class="message message--user-1">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people"/>
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-2">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people" />
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-1">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people"/>
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-2">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people" />
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-1">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people"/>
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-2">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people" />
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-1">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people"/>
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-2">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people" />
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-1">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people"/>
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
          <div class="message message--user-2">
            <time class="message__time">21.02.2017 21:12:07</time>
            <figure class="message__author-pic">
              <img src="https://placeimg.com/40/40/people" />
            </figure>
            <div class="message__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus.</p>
            </div>
          </div>
        </div>
      </section>
 
    );
}

export default CanvasChat;
