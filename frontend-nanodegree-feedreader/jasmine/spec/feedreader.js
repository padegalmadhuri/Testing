/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
 $(function() {
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

        it('have URLs', function() {
            allFeeds.forEcah(function(feed){
             expect(feed.url).toBedefined();
             expect(feed.url.length).not.toBe(0);
            }
        });

        /*test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.*/
         it('have names', function() {
            allFeeds.forEach(function(feed){
             expect(feed.name)toBeDefined();
             expect(feed.name.length).not.toBe(0);
            }
        });
    });
          /*test that ensures the menu element is
         * hidden by default.*/
         describe('The menu', function() {
 
            it('is hidden by default', function() {
               expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        it('changes visibility when the menu icon is clicked', function() {


     //the menu display when clicked
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
        // the menu hide when clicked again
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
        //test that ensures when the loadFeed
         // function is called and completes its work, 
         describe('Initial Entries', function() {

         	 beforeEach(function(callback) {
            loadFeed(0, callback);
        });

        it('loadFeed function is called and completes its work with at least a single .entry element within the .feed container', function() {
            expect($('.feed.entry').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {
        // test that ensures when a new feed is loaded
         
        beforeEach(function(callback) {
            loadFeed(0);
            prevTopPost = $('.feed.entry').eq(0).html();

            loadFeed(1, callback);
        });

        it('when a new feed is loaded by the loadFeed function the content actually changes', function() {
            expect($('.entry').eq(0).html()).not.toEqual(prevTopPost);
        });
     });
}());
