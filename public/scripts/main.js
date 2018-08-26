var allPages = document.getElementsByClassName('page');
var container = new Vue({
    el: '#container',
    data: {},
    methods: {
        hideAll: function() {
            for (var i = 0; i < allPages.length; i++) {
                allPages[i].classList.add('hidden');
            }
        },
        home: function() {
            container.hideAll();
            document.getElementById('p1').classList.remove('hidden');
        },
        change: function() {
            container.hideAll();
            document.getElementById('p2').classList.remove('hidden');
        }
    }
})
container.home();
