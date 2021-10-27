Ext.define('TrainingJs.view.counties.CountiesView', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'countiesview',
    reference: 'countiesview',
    controller: 'countiesviewcontroller',
    loadMask: true,
    stripeRows: true,
    bind: {
        title: '{myTitle}',
    },
    selModel: 'checkboxmodel',
    viewModel: {
        type: 'countiesviewmodel'
    },
    store: {
        type: 'counties',
    },
    columns: [{
            text: 'ID',
            dataIndex: 'id'
        },
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Code',
            dataIndex: 'code'
        },
        {
            text: 'Reference Key',
            dataIndex: 'referenceKey',
            renderer: 'onReferenceKeyRender'
        }

    ],
    lbar: [],
    rbar: [],
    tbar: {
        overFlowHandler: 'menu',
        items: [{
            text: 'Add New County',
            handler: 'onCountyAdd',
        }, {
            text: 'Details',
            bind: {
                disabled: '{!countiesview.selection}'
            },
            handler: 'onDetailsButtonClick',
        }],
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display',

    },
    listeners: {
        celldblclick: 'onGridCellDoubleClick',
        rowclick: 'onGridRowClick',
    },

});