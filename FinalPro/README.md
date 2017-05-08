# Final Project
### Brooke Swenumson

This was a continuation of my project for lesson 9. I added in sound effects and a countdown for the amount of 'bullets' fired. This project as a whole was very difficult, but I ended up learning several new techniques.

## Overview & Problems

When I first started this, I was working on the homework 9 assignment, make two objects aware of one another. I wanted to take it farther. How could I "shoot" something, like in a game. I began with creating the 'planets'. I created a class for them and called them into my sketch. Next I created the destroyer. I wanted it to move on the x axis with the mouse, but remain static on the y axis. Then I created the bullet.

The bullets were the hardest thing for me. At first I added them to the destroyer class, so I could get them to appear to shoot out of the destroyer. My big problem here was that after I clicked the mouse the bullet still followed it on the x axis.

I then moved it into the planet class, thinking that when I do edge detection it would be easier to have everything together. Again I had many problems with the mapping and having the mouse click change weather it was showing clearly or not. Finally I made it's own class.

I still had to have an extra lesson to work out the kinks, but once I learned about using 'null' I was able to create a variable that kept the bullet on a static x value once it was shot. I also ended up mapping to when the mouse is released rather when it is pressed.

I also learned that you can call different objects in different classes before they are called in the sketch file. This allowed be to create edge detection and thus remove the bullet and the hit planet from the canvas.

Lastly I added sound files as well as a count down to show how many shots are left. At the end I added a rather mediocre 'yay' track that I found to be hilarious ( you get that if you win) otherwise there is a nice horn track to represent loosing.
