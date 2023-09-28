# Frontend Mentor BMI Calculator 

## The [BMI Calculator](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T) is a Premium Challenge at [Frontend Mentor](https://www.frontendmentor.io/home).

## The project:

The challenge is designed to test more advanced layout skills, HTML form skills, and Vanilla JS skills. The shifting layouts are designed to be more challenging as they differ quite a bit at different screen sizes and there is little guidance on BMI calculations, so it required a lot of research to figure out how to calculate both metric and imperial BMIs, and then feed that back in a meaningful way to the user while keeping the JS as DRY as possible.

## My process:

After reviewing the design files, I decided to use Flexbox and absolute/relative positioning to creates this layout as there were a lot of oddly positioned elements. 

I finished the initial HTML and CSS (and a smidge if JS) but throughout the challenge I wasn't happy. It really felt as if I were having to fight CSS to get what I wanted on the screen. 

After a lot of soul searching, I decided to cut my losses and convert my existing code to use CSS grid instead. This was no small undertaking as it involved huge changes to my markup (goodbye flex containers everywhere), removing an awful lot of CSS which was a bit of a wrench as I had sweated over a lot of it. Also, despite having used grid in previous projects I wasn't super confident so had to do a lot of learning and research.

## Key learning:

While it was a tough decision it was the correct one to make. It was actually a very useful exercise as I ran into all sorts of problems and it was a challenge to keep my CSS under control, especially when I had to delete huge blocks and track these deletions at different screen sizes. While it would have been easier to just delete everything and start again, I decided to embrace the challenge and it was very worth it.

Inputs have proven to be a challenge here too. The floating nature of elements over the inputs themselves, border colour changes and toggling of inputs all threw up some challenges but the input hygiene around long numbers and restricting minus numbers (ensuring the long results didn't look very strange) had me chasing my tail a bit.

Finally getting to grips with Grid was a revelation after (like many devs I feel) I've been putting off getting too far into it as Flexbox is always just "easier". I've been stunned by how many problems using Grid just solves and how many headaches it removes once you commit to using it. Grid template areas and using min-max and auto carefully for columns and rows has made responsive design far simpler. While this does have a tendency to make CSS a bit more verbose I feel it does make it simpler to read and understand and if I needed to adjusting the layout it would be a comparative breeze. The markup is also far simpler and much easier on the eye which is especially important with the relative complexity and shifting nature of the details capture section. 

## Final thoughts and takeaways:

Despite the wrench of converting my code from Flexbox/positioning to Grid I thoroughly enjoyed this challenge. Grid will now be first choice for layouts and I'm sure there are ways to reduce the amount of code I've used here.

I've also decided to change my working method. I initially decided to work on the entire mobile layout, then tablet, then desktop, and then worked on making it all responsive. Doing it this way involved me having to re-write a whole lot of code and chasing bugs when I introduce a CSS property which then cascades down through my style sheet. In future, I'll work on each section mobile > tablet > desktop in a responsive fashion so that once each section is done, it really is done. This should speed up the whole process, reduce re-writing code and make creating my next app a whole lot smoother.

