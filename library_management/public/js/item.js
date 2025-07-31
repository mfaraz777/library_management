frappe.ui.form.on('Item', {
    refresh: function (frm) {
        toggle_subgenre_field(frm);
    },

    custom_genre: function (frm) {
        toggle_subgenre_field(frm);

        frm.set_query('custom_subgenre', function () {
            return {
                filters: {
                    genre: frm.doc.custom_genre
                }
            };
        });
    }
});

function toggle_subgenre_field(frm) {
    if (!frm.doc.custom_genre) {
        frm.set_value('custom_subgenre', '');
        frm.set_df_property('custom_subgenre', 'read_only', 1);
    } else {
        frm.set_df_property('custom_subgenre', 'read_only', 0);
    }
}