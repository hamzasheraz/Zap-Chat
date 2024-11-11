import { connect } from "@/backend/dbConfig/dbConfig";
import User from "@/backend/models/usermodel";

connect();

export default async function VerifyEmail(req, res) {
  try{

  }
  catch(error){
    return res.status(500).json({ error });
  }
}