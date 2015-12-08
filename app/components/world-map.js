import Ember from 'ember';
import ConfigMixin from 'emberfied/mixins/map-config';

export default Ember.Component.extend(ConfigMixin, {
	title: null,
	type: 'worldPopulationDensity',
	dataSeriesName: null,
	setupMap: function () {
		var config = this.get('Config.' + this.get('type'));
		jQuery.getJSON(config.dataUrl, (data)=> {
			config.optionsConfig.series.every((item)=>{
				if (item.name === this.get('dataSeriesName')) {
					item.data = data;
					return false;
				}
				return true;
			});
	        this.$('.map-area').highcharts('Map', config.optionsConfig);
	    });
	},
	renderMap: function () {
	    Ember.run.scheduleOnce('afterRender', this, this.setupMap);
	}.on('didInsertElement')
});
