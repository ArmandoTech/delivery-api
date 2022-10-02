import { usersMockup } from "../../data/usersMockup.js";
import { createUser } from "../createUser.js";
import { generateArrayPromises } from "../generateArrayPromises.js";

export const fillUser = async () => {
	const promiseCreateUsers = generateArrayPromises(usersMockup, createUser);
	const usersCreated = await Promise.all(promiseCreateUsers);
	return usersCreated;
};
