import prisma from "./prisma";

export const getContact = async () => {
  try {
    const contact = await prisma.contact.findMany();
    return contact;
  } catch (error) {
    console.log(error);
  }

};