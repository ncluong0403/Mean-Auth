import Role from "../models/Role.js";

export const createRole = async (req, res) => {
  const { role } = req.body;
  const roleExists = await Role.findOne({ role: role });
  try {
    if (role) {
      if (roleExists) {
        return res.status(400).send("Role already exists");
      } else {
        const newRole = await Role.create({ role: role });
        return res.send(newRole);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

export const updateRole = async (req, res) => {
  const roleId = req.params.id;
  const { role } = req.body;
  try {
    const roleExists = await Role.findOne({ role: role });
    if (roleExists) {
      return res.status(400).send("Role already exists");
    } else {
      const updatedRole = await Role.findByIdAndUpdate(
        { _id: roleId },
        { role: role },
        { new: true } // this will return the updated role
      );
      return res.send(updatedRole);
    }
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};

export const deleteRole = async (req, res) => {
  const roleId = req.params.id;
  const roleExists = await Role.findById({ _id: roleId });
  try {
    if (!roleExists) {
      return res.status(400).send("Role does not exist or deleted");
    }
    await Role.findByIdAndDelete({ _id: roleId });
    return res.send("Role deleted successfully");
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find({});
    return res.status(400).send(roles);
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};
