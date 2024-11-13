import user from "../model/userSchema.js";


export const addUser = async (req, res) => {
    const data = req.body;
    try {
        const newUser = new user(data);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log(`error while calling api ${error}`);
        res.status(400).json(error);
    }
};


export const getAllUser = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(`error while calling api ${error}`);
        res.status(400).json(error);
    }
};


export const getUserById = async (request, response) => {
    try{
        const user = await user.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
    const { id } = request.params;
    const { name, username, email, phone } = request.body;

    try {
        const editUser = await user.findByIdAndUpdate(
            id,
            { name, username, email, phone },
            { new: true }
        );
        response.status(200).json(editUser);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


export const deleteUserById = async (request, response) => {
    const { id } = request.params;
    try {
        await user.findByIdAndDelete(id);
        response.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}