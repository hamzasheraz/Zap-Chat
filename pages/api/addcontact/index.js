import { connect } from "@/backend/dbConfig/dbConfig";
import getDatafromToken from "@/helpers/getDatafromToken";
import User from "@/backend/models/user";

connect();
export default async function Addcontact(req, res) {
    if (req.method === 'POST') {
        try {
            const user_id = await getDatafromToken(req);
            const user = await User.findById(user_id);
            const { personToAdd } = req.body;
            if (personToAdd.email === user.email) {
                return res.status(400).json({ error: "You can't add yourself as a contact" });
            }

            const newContact = await User.findOne({ email: personToAdd.email }).select("_id email firstName lastName profilePicture");

            if (!newContact) {
                return res.status(404).json({ error: "User not found" });
            }

            const contactExists = user.contacts.find(contact => contact.email === newContact.email);

            if (contactExists) {
                return res.status(400).json({ error: "Contact already exists" });
            }

            if (personToAdd.name) {
                const nameParts = personToAdd.name.split(" ");
                newContact.firstName = nameParts[0];
                newContact.lastName = nameParts[1] || "";
            }

            await User.findByIdAndUpdate(user_id, {
                $push: {
                    contacts: newContact
                }
            });
            return res.status(201).json({ message: "Contact added successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
}