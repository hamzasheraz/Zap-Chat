import { connect } from "@/backend/dbConfig/dbConfig";
import getDatafromToken from "@/helpers/getDatafromToken";
import User from "@/backend/models/user";

connect();
export default async function Addcontact(req, res) {
    if (req.method === 'POST') {
        try {
            const user_id = await getDatafromToken(req);
            const user = await User.findById(user_id);
            const { personToAdd } = req.body.personToAdd;

            if (personToAdd.email === user.email) {
                return res.status(400).json({ message: "You can't add yourself as a contact" });
            }

            const newContact = await User.findOne({ email: personToAdd.email }).select("_id email firstName lastName profilePicture");

            if (!newContact) {
                return res.status(404).json({ message: "User not found" });
            }

            const contactExists = user.contacts.find(contact => contact.email === newContact.email);

            if (contactExists) {
                return res.status(400).json({ message: "Contact already exists" });
            }

            await User.findByIdAndUpdate(user_id, {
                $push: {
                    contacts: newContact
                }
            });
            return res.status(201).json({ message: "Contact added successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}