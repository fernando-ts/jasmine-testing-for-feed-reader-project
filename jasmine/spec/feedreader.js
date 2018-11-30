//-> $() function to wait until the DOM is ready 
$(function () {
    //-> Test suite 1, containing a set of tests
    describe('RSS Feeds', function () {
        //-> Test if allFeeds variable has been defined with values
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //-> Test if the there is a URL defined with values in the allFeeds array 
        it('URLs are defined with values', () => {
            for (const feedObj of allFeeds) {
                expect(feedObj.url).toBeDefined();
                expect(feedObj.url.length).not.toBe(0);
            }
        });

        //-> Test if the there is a NAME defined with values in the allFeeds array
        it('Feed names defined with values', () => {
            for (const feedObj of allFeeds) {
                expect(feedObj.name).toBeDefined();
                expect(feedObj.name.length).not.toBe(0);
            }
        })
    });


    //-> Test suite 2
    describe('The menu', function () {
        //-> Test if menu element is hidden by default
        it('has menu hidden', () =>{
            const bodyElement = document.querySelector('body');
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
        });

        //-> Test if menu element toggles its visibility when clicked 
        it('toggles menu on/off when icon is clicked', () => {
            const bodyElement = document.querySelector('body');
            const menuIcon = document.querySelector('.menu-icon-link');

            menuIcon.click();
            expect(bodyElement.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
        });
    });


    //-> Test suite 3
    describe('Initial Entries', function () {
        //-> Async. test, when loadFeed is called there is at least a single .entry element within .feed 
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('there is one or more initial entries', (done) => {
            const feedContainer = document.querySelector('.feed').querySelectorAll('.entry');
            expect(feedContainer.length > 0).toBe(true);
            done();
        });
    });


    //-> Test suite 4
    describe('New Feed Selection', function () {
        //-> Async. test, when a new FEED is loaded, the content changes 
        let firstLoadOfFeed;
        let secondLoadOfFeed;  
        beforeEach(function (done) {
            loadFeed(0, () => {
                firstLoadOfFeed = document.querySelector('.feed').querySelector('.entry');
            });
            
            loadFeed(1, () => {
                secondLoadOfFeed = document.querySelector('.feed').querySelector('.entry');
                done();
            });
        });

        it('New content when new feed is loaded', (done) => {
            expect(firstLoadOfFeed).not.toBe(secondLoadOfFeed);
            done();
        });
    });  
}());
