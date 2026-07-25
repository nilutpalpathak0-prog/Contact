// ===============================
// SHARE DIGITAL CARD
// ===============================

function shareCard(){

const shareData = {
title: "Sudarshan Thakur",
text: "Secretary, Srimanta Sankaradeva Kalakshetra Society",
url: window.location.href
};

if(navigator.share){

navigator.share(shareData);

}else{

navigator.clipboard.writeText(window.location.href);

alert("Link copied to clipboard.");

}

}


// ===============================
// ADD CONTACT
// ===============================

function addContact(){

/*
Modern browsers do not allow websites
to directly create contacts.

The best supported solution is to open
a vCard.
*/

window.location.href="contact.vcf";

}


// ===============================
// COPY MOBILE
// ===============================

function copyMobile(){

navigator.clipboard.writeText("9864077046");

alert("Mobile number copied.");

}


// ===============================
// COPY EMAIL
// ===============================

function copyEmail(){

navigator.clipboard.writeText("secy.ssk@gmail.com");

alert("Email copied.");

}


// ===============================
// LONG PRESS EVENTS
// ===============================

document.addEventListener("DOMContentLoaded",function(){

const mobile=document.querySelector('a[href^="tel:+919864077046"]');

if(mobile){

mobile.addEventListener("contextmenu",function(e){

e.preventDefault();

copyMobile();

});

}

const email=document.querySelector('a[href^="mailto:secy.ssk@gmail.com"]');

if(email){

email.addEventListener("contextmenu",function(e){

e.preventDefault();

copyEmail();

});

}

});
