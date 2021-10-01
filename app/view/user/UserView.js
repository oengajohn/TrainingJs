Ext.define('TrainingJs.view.user.UserView', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'userview',
    controller: 'userviewcontroller',

    store: {
        type: 'users'
    },
    title: 'Users',
    selModel: 'checkboxmodel',
    columns: [{
            text: '#',
            dataIndex: 'id'
        },
        {
            text: 'First',
            dataIndex: 'first'
        },
        {
            text: 'Last',
            dataIndex: 'last'
        },
        {
            text: 'Handle',
            dataIndex: 'handle'
        },

    ],
    tbar: [{
            text: 'Add',
            tooltip: 'Add new User',
            handler: 'onAddClick'
        },
        {
            text: 'Details',
            tooltip: 'View details of selected user'
        },
        {
            text: 'Remove',
            tooltip: 'Remove user from list'
        },
    ]

});