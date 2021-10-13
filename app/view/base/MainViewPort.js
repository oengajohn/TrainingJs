Ext.define('TrainingJs.view.base.MainViewPort', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainviewport',
    layout: 'border',
    controller: 'mainviewportcontroller',
    items: [{
            region: 'north',
            html: '<h1 class="x-panel-header">Page Title</h1>',
            border: false,
            margin: '0 0 5 0'
        },
        {
            region: 'west',
            collapsible: true,
            title: 'Navigation',
            width: 150,
            // could use a TreePanel or AccordionLayout for navigational items,
            items: [{
                xtype: 'navigationpanel'
            }]
        },
        {
            region: 'south',
            title: 'South Panel',
            collapsible: true,
            html: 'Information goes here',
            split: true,
            height: 100,
            minHeight: 100
        },
        {
            region: 'east',
            title: 'East Panel',
            collapsible: true,
            split: true,
            width: 150
        },
        {
            region: 'center',
            itemId: 'center',
            xtype: 'tabpanel', // TabPanel itself has no title
            activeTab: 0,
            // First tab active by default
            items: [{
                title: 'Default Tab',
                html: 'The first tab\'s content. Others may be added dynamically'
            }, ]
        }
    ]

});