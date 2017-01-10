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

        /* This suite is for just a single RSS feed definition.
        */
        describe('RSS Feed', function() {
          var feed;

          /* Check that RSS feed object has a non-empty URL property.
           */
          it('has a valid url', function() {
            for (var i = 0, l = allFeeds.length; i < l; i++) {
              feed = allFeeds[i];
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe('');
            }
          });

          /* Check that RSS feed object has a non-empty name property.
           */
          it('has a valid name', function() {
            for (var i = 0, l = allFeeds.length; i < l; i++) {
              feed = allFeeds[i];
              expect(feed.name).toBeDefined();
              expect(feed.name).not.toBe('');
            }
          });
        });
    });

    /* This suite tests the menu existance and functionality.
    */
    describe('The menu', function() {
      var $menuIcon, slideMenu, body;

      /* Get necessary DOM elements. Not necessary as each spec uses different
       * DOM elements, but I used beforeAll for practice. Otherwise only the
       * same DOM element used in multiple specs would be defined here.
       */
      beforeAll(function() {
        slideMenu = document.getElementsByClassName('slide-menu');
        body = document.getElementsByTagName('body')[0];
        $menuIcon = $('.menu-icon-link');
      });

      /* Test that there is at least one sliding menu on the page.
       */
      it('has at least one sliding menu', function() {
        expect(slideMenu.length).not.toBe(0);
      });

      /* Test for initial sliding menu state to be hidden.
       */
      it('is hidden', function() {
        expect(body.classList).toContain('menu-hidden');
      });

      /* Test that the sliding menu is visible on the menu icon click and not
       * visible after a second menu icon click.
       */
      it('is changing visibility when menu icon is clicked', function() {
        $menuIcon.trigger('click');
        expect(body.classList).not.toContain('menu-hidden');
        $menuIcon.trigger('click');
        expect(body.classList).toContain('menu-hidden');
      });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
