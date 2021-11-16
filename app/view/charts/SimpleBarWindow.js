Ext.define('TrainingJs.view.charts.SimpleBarWindow', {
    extend: 'Ext.window.Window',
    xtype: 'simplebarwindow',
    width: 500,

    autoShow: true,
    modal: true,
    items: [{
        xtype: 'chart',
        width: 500,
        height: 300,
        shadow: true,
        insetPadding: '20 10',
        store: {
            type: 'economysectorsstore'
        },
        axes: [
            // Y axis
            {
                type: 'numeric',
                position: 'left',
                fields: 'score',
                grid: true,
                maximum: 100,
                title: 'Score',
                // renderer: function(axis, label, layoutContext) {
                //     return Ext.util.Format.number(layoutContext.renderer(label) / 1000, '0,000');
                // }
            },
            // X Axis
            {
                type: 'category',
                position: 'bottom',
                fields: 'subject',
                grid: true
            }
        ],
        // legend: {
        //     docked: 'right'
        // },

        // Chart Type
        series: [{
            type: 'bar',
            xField: 'subject',
            yField: 'score',
            colors: ['#D4CDAB']
        }]
    }]



})