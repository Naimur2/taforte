const contacts = [
    {
        _id: 1,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "John Doe",
        phone: "123456789",
    },
    {
        _id: 2,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "John Doe",
        phone: "123456789",
    },
    {
        _id: 3,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "John Doe",
        phone: "123456789",
    },
    {
        _id: 4,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "John Doe",
        phone: "123456789",
    },
    {
        _id: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "John Doe",
        phone: "123456789",
    },
    {
        _id: 6,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "John Doe",
        phone: "123456789",
    },
    {
        _id: 7,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "John Doe",
        phone: "123456789",
    },
];

export default contacts;

export const getContacts = () => {
    return contacts;
};

export const insertContact = (contact) => {
    contact._id = contacts.length + 1;
    contacts.push(contact);
};

export const updateContact = (contact) => {
    const index = contacts.findIndex((c) => c._id === contact._id);
    contacts[index] = contact;
};

export const deleteContact = (id) => {
    const index = contacts.findIndex((c) => c._id === id);
    contacts.splice(index, 1);
};
