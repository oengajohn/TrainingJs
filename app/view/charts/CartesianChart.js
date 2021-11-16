Ext.define('TrainingJs.view.charts.CartesianChartWindow', {
    extend: 'Ext.window.Window',
    xtype: 'cartesianchartwindow',
    width: 500,

    autoShow: true,
    modal: true,
    items: [{
        xtype: 'chart',
        width: 500,
        height: 300,
        store: {
            type: 'areamodelstore'
        },
        interactions: {
            type: 'panzoom'
        },

        legend: {
            docked: 'right'
        },

        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true
        }, {
            type: 'category',
            position: 'bottom',
            visibleRange: [0, 0.4]
        }],

        series: [{
            type: 'area',
            xField: 'name',
            yField: ['g1', 'g2'],
            title: ['G1', 'G2'],
            style: {
                stroke: '#666666',
                fillOpacity: 0.8
            }
        }]
    }]



})