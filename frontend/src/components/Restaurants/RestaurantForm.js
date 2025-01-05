import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        status: 'New',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (isEdit) {
            const fetchRestaurant = async () => {
                try {
                    const res = await axios.get(`https://kam-udaan-4.onrender.com/api/restaurants/${id}`);
                    setFormData({
                        name: res.data.name,
                        address: res.data.address || '',
                        city: res.data.city || '',
                        state: res.data.state || '',
                        zipcode: res.data.zipcode || '',
                        status: res.data.status || 'New',
                    });
                } catch (err) {
                    console.error(err);
                    setError('Failed to load restaurant data.');
                }
            };
            fetchRestaurant();
        }
    }, [id, isEdit]);

    const { name, address, city, state, zipcode, status } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`https://kam-udaan-4.onrender.com/api/restaurants/${id}`, formData);
                navigate(-1);
            } else {
               await axios.post('https://kam-udaan-4.onrender.com/api/restaurants', formData);
                navigate(-1);
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Failed to save restaurant.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-6">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-pink-800 mb-6">
                        {isEdit ? 'Edit' : 'Add New'} Restaurant
                    </h2>

                    {error && (
                        <div className="bg-pink-100 border border-pink-400 text-pink-700 px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-pink-700 font-medium">
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-pink-700 font-medium">
                                Address:
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={address}
                                onChange={onChange}
                                className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-pink-700 font-medium">
                                    City:
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={onChange}
                                    className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-pink-700 font-medium">
                                    State:
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    value={state}
                                    onChange={onChange}
                                    className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-pink-700 font-medium">
                                Zipcode:
                            </label>
                            <input
                                type="text"
                                name="zipcode"
                                value={zipcode}
                                onChange={onChange}
                                className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-pink-700 font-medium">
                                Status:
                            </label>
                            <select
                                name="status"
                                value={status}
                                onChange={onChange}
                                className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Negotiation">Negotiation</option>
                                <option value="Closed">Closed</option>
                                <option value="Active">Active</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white py-3 px-6 rounded-md font-medium hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        >
                            {isEdit ? 'Update' : 'Create'} Restaurant
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RestaurantForm;
