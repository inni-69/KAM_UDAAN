import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = ({ restaurantId }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await axios.get(`https://kam-udaan-4.onrender.com/api/contacts/restaurant/${restaurantId}`);
                setContacts(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load contacts.');
                setLoading(false);
            }
        };

        fetchContacts();
    }, [restaurantId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="text-purple-600 text-lg font-semibold">
                    Loading Contacts...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-purple-50 border border-purple-200 text-purple-600 px-4 py-3 rounded-lg">
                {error}
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-purple-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">Restaurant Contacts</h2>
            </div>

            <div className="p-6">
                {contacts.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No contacts found.</p>
                        <Link 
                            to={`/restaurants/${restaurantId}/contacts/new`}
                            className="mt-4 inline-block text-purple-600 hover:text-purple-700"
                        >
                            + Add your first contact
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {contacts.map(contact => (
                            <div 
                                key={contact._id}
                                className="flex items-center justify-between p-4 hover:bg-purple-50 rounded-lg border border-purple-100 transition-colors duration-150"
                            >
                                <div className="flex-1">
                                    <Link 
                                        to={`/contacts/${contact._id}`}
                                        className="text-lg font-medium text-gray-900 hover:text-purple-600"
                                    >
                                        {contact.name}
                                    </Link>
                                    <p className="text-gray-500 text-sm mt-1">{contact.role}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Link
                                        to={`/contacts/${contact._id}`}
                                        className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactList;
