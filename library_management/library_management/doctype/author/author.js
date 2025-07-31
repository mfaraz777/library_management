// Copyright (c) 2025, Mujahid_Faraz and contributors
// For license information, please see license.txt

frappe.ui.form.on("Author", {
    onload(frm) {
        toggleDateOfDeath(frm);
    },
    is_dead(frm) {
        toggleDateOfDeath(frm);
    },
    validate(frm) {
        toggleDateOfDeath(frm);
        validate_dob_and_dod(frm);
    }
});

function toggleDateOfDeath(frm) {
    const isDead = frm.doc.is_dead;

    frm.set_df_property("date_of_death", "reqd", isDead ? 1 : 0);
    frm.set_df_property("date_of_death", "hidden", !isDead);

    if (!isDead && frm.doc.date_of_death) {
        frm.set_value("date_of_death", null);
    }
}

function validate_dob_and_dod(frm) {
    if (frm.doc.date_of_birth && frm.doc.date_of_death) {
        const dob = frappe.datetime.str_to_obj(frm.doc.date_of_birth);
        const dod = frappe.datetime.str_to_obj(frm.doc.date_of_death);

        if (dod < dob) {
            frappe.throw("Date of Death cannot be before Date of Birth");
        }
    }
}
