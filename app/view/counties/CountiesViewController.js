Ext.define('TrainingJs.view.counties.CountiesViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.countiesviewcontroller',
    /**
     * Called when the view is created
     */
    mixins: [
        'TrainingJs.mixins.GridMixin',
    ],
    onReferenceKeyRender: (value, metaData, record, rowIndex, colIndex, store, view) => {
        console.log(record);
        return record.get('code') + "-" + record.get('name');

    },
    onShowForm: function() {
        Ext.create({
            // xtype: 'cartesianchartwindow'
            xtype: 'simplebarwindow'
        });
    },
    init: function() {
        this.loadGridStore();
    },
    onGridCellDoubleClick: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {

    },
    onGridRowClick: function(grid, record, element, rowIndex, e, eOpts) {
        let countyformpanel = Ext.ComponentQuery.query('countyformpanel')[0];
        countyformpanel.getViewModel().
        set('record', record);

    },
    onCountyAdd: function() {

    },
    onDetailsButtonClick: () => {

    },
});