import { usersMockup } from "../../data/usersMockup.js";
import { generateArrayPromises } from "../generateArrayPromises.js";
import { createUser } from "../users/createUser.js";

export const fillUser = async () => {
	const promiseCreateUsers = generateArrayPromises(usersMockup, createUser);
	const usersCreated = await Promise.all(promiseCreateUsers);
	return usersCreated;
};
