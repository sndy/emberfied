import Ember from 'ember';
import ConfigMixin from 'emberfied/mixins/dashboard-config';

export default Ember.Route.extend(ConfigMixin, {
    setupController (controller) {
        this._super.apply(this, arguments);
        if (this.Config) {
            this.Config = Ember.Object.create(this.Config);
            controller.set('Config', this.Config);
            controller.set('selectedMap', this.Config.selectedMap);
        }
    },
    actions: {
        invalidateSession: function () {
            this.get('session').invalidate();
        },
        reDraw (param) {
        	Ember.$('#' + param).highcharts().redraw();
        },
        didTransition () {
            this._super.apply(this, arguments);
            _paq.push(['trackEvent', 'Vists', 'RouteTraversed', 'Dashboard']);
        }
    }
});