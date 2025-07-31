# Copyright (c) 2025, Mujahid_Faraz and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class SubGenre(Document):
	def autoname(self):
		self.name = f"{self.genre}-{self.sub_genre}"
