# Animated, Interactive Law Wheel in the Heavens

VIEW LIVE DEMO HERE:
https://thelawwheel.herokuapp.com
(note that it may take a few moments for the Heroku server to start)
 
[logo]

# Technologies Used

- JavaScript (ES5)
- jQuery
- HTML5
- CSS3
- Node.js
- Bower

# Overview

This is an animated wheel of Buddhist and Daoist symbols that spins on a starry background.   When it is moused-over (or tapped, if on mobile), the wheel will light up, and it will begin absorbing and releasing energy, illuminating a divine being and his heavenly host.  The components of the wheel spin independently, and the wheel spins as a whole as well.  The spinning reverses directions every nine spins, and, likewise, the energy being absorbed and released alternates with the direction of the wheel's spin.

# How It Was Made

The wheel was created with 12 images (of the buddhist and daoist symbols in different positions) animated by repeatedly showing them like a flip-book with JavaScript.  The opening animated movement of the wheel, the changing background color of the wheel, and the spinning of the wheel were all CSS3.  The wheel lights up because there are actually two wheels spinning simultaneously, a light and a dark, that get hidden and displayed based on the mouseover position.

The stars in the background are just a few black-grey blobs on a white screen tiled out over the whole window that move with CSS; this alone produces the twinkling effect.

The image of the heavenly beings was a painting that was converted to black and white, and then the white was removed, leaving only the black parts of the image.  It was placed under the wheel and over the stars.  The white energy that is absorbed and released by the wheel is simply a rounded box-shadow that is placed under the image of the heavenly beings, which "fills in" the missing white color.

# Getting Started

1 - Clone the repository (git clone https://github.com/thecodercody/falun/tree/master)

2 - Go into the root directory

3 - npm install

4 - bower install

5 - Navigate to localhost:3000 in any browser on any device

6 - Click "PLAY"

7 - Mouse over the wheel to see it light up and emit energy if on desktop; tap the wheel if on mobile

# License

This project uses the following license: MIT