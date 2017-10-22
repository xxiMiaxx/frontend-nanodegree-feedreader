/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         var feedsLength= allFeeds.length;
         it('has a defined URL that\'s not empty', function(){
           for(var i=0; i<feedsLength; i++){
             // check the definiton of url's
             expect(allFeeds[i].url).toBeDefined();
             // check the length of the url
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a defined name and the name is not empty', function(){
           for(var i=0; i<feedsLength; i++){
             // check the definiton of all the names
             expect(allFeeds[i].name).toBeDefined();
             // check length of all the names
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });


    });


    /* TODO: Write a new test suite named "The menu" */
      describe('The menu', function(){


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('menu is hidden by default', function(){
           var hiddenElement =$('body').hasClass('menu-hidden');
           // check to see if the menu is hidden
           expect(hiddenElement).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */


          it('changes visibility when the icon is clicked', function(){
            // test if the menu displays when clicked
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            //test if the menu hide when clicked again
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
          });
        });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){


        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // asynchronous call
         beforeEach(function(done){
           loadFeed(0,done);
         });
         var entries = $('.feed').find('.entry');
         it('feed container has at least 1 entry',function(){
           expect(entries.length).not.toBeGreaterThan(0);
         });

});
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){

var before;
var after;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         // testing the new first feed to see if the loadfeed has loaded it
         beforeEach(function done(){
           loadFeed(1, function(){
              before = $('.feed').html();
               done();

           });
         });
         // test the change of the content
         it('is loaded so loadfeed change the content', function(){
           loadFeed(2, function(){
              after= $('.feed').html();
             expect(before).not.toBe(after);
             done();
           });
         });

       });

}());
