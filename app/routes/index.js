import Ember from 'ember';

export default Ember.Route.extend({
    setupApp: function () {
        var evt = document.createEvent('Event');
        evt.initEvent('_htmlReady', true, true);
        document.dispatchEvent(evt);
    }.on('didInsertElement'),
    actions: {
        didTransition () {
            this._super.apply(this, arguments);
            _paq.push(['trackEvent', 'Vists', 'RouteTraversed', 'Home']);
        }
    }
});
