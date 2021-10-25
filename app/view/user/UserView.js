Ext.define('TrainingJs.view.user.UserView', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'userview',

    controller: 'userviewcontroller',

    store: {
        type: 'users'
    },
    title: 'Users',
    tbar: [{
            text: 'showForm',
            handler: 'onShowForm'
        },
        {
            text: 'Remove',
            handler: 'onRemoveButtonClick',
        },
    ],
    selModel: 'checkboxmodel',
    columns: [{
            text: '#',
            dataIndex: 'id'
        },
        {
            text: 'Name',
            dataIndex: 'name'
        },
        {
            text: 'Company Name',
            dataIndex: 'companyName'
        },

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }


});