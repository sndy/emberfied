import Ember from 'ember';
import RouteTracker from '../mixins/route-tracker';

export default Ember.Route.extend(RouteTracker, {
    setupApp: function () {
        var evt = document.createEvent('Event');
        evt.initEvent('_htmlReady', true, true);
        document.dispatchEvent(evt);
    }.on('didInsertElement')
});
