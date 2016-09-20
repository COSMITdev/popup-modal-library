# "On Mouse Leave" Library

This is a library/collection of useful "on mouse leave" Modals with the goal to speed up
prototyping of HTML apps running as static sites

# Demos

[Here](https://popup-modal-library.herokuapp.com) is the link to see what all this useful html, css and js code can do for your prototip!

# How to use each of them

## Mailchimp Subscriber

1. Copy the file mailchimp.css inside your stylesheet folder
2. Copy the file mailchimp.js inside your javascripts folder
3. Copy the content of <div id="mailchimpModal"> to your HTML file
4. Reference the imported files on your HTML file
5. Change variables and references like <form action=""> to your Mailchimp embeded IDs

## PayPal 1 Button Payment

1. Copy the file paypal.css inside your stylesheet folder
2. Copy the file paypal.js inside your javascripts folder
3. Copy the content of <div id="paypalModal"> to your HTML file
4. Reference the imported files on your HTML file
5. Change the value on line `<input type="hidden" name="hosted_button_id" value="886S5UX64LZE8">` for your PayPal Vendor ID
