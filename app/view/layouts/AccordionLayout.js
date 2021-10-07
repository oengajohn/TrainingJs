Ext.define('TrainingJs.view.layouts.AccordionLayout', {
    extend: 'Ext.window.Window',
    xtype: 'accordionlayout',
    autoShow: true,
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    closable: true,
    maximizable: true,
    title: 'Accordion layout',
    height: 400,
    items: [{
            xtype: 'panel',
            layout: 'accordion',
            items: [{
                xtype: 'panel',
                title: 'Inner Panel One',
                html: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat`
            }, {
                xtype: 'panel',
                title: 'Inner Panel Two',
                html: `"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?`
            }, {
                xtype: 'panel',
                title: 'Inner Panel Three',
                html: `Due to the widespread use of tables across third-party widgets like calendars and date pickers, we’ve designed our tables to be opt-in. Just add the base class .table to any <table>, then extend with custom styles or our various included modifier classes.`
            }, ]
        }

    ]
});