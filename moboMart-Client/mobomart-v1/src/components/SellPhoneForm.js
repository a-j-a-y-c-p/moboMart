import React, { useState } from 'react';
import '../css/SellPhoneForm.css';

const SellPhoneForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        model: '',
        ram: '',
        rom: '',
        expectedPrice: '',
        phoneAge: '',
        hasBill: false,
        hasWarranty: false,
        images: [],
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle checkbox for bill and warranty
    const handleBillChange = (e) => {
        setFormData({
            ...formData,
            hasBill: e.target.checked,
        });
    };

    const handleWarrantyChange = (e) => {
        setFormData({
            ...formData,
            hasWarranty: e.target.checked,
        });
    };

    // Handle image uploads (limit to 3 images)
    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length <= 3) {
            setFormData({
                ...formData,
                images: [...files],
            });
        } else {
            alert('You can upload a maximum of 3 images.');
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here you can process the form data (e.g., send it to an API)
        alert('Form Submitted!');
    };

    return (
        <div className="sell-phone-form">
            <h2>Sell Your Phone</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ram">RAM (GB)</label>
                    <input
                        type="number"
                        id="ram"
                        name="ram"
                        value={formData.ram}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="rom">ROM (GB)</label>
                    <input
                        type="number"
                        id="rom"
                        name="rom"
                        value={formData.rom}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="expectedPrice">Expected Price (Rs)</label>
                    <input
                        type="number"
                        id="expectedPrice"
                        name="expectedPrice"
                        value={formData.expectedPrice}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneAge">How Old is the Phone?</label>
                    <select
                        id="phoneAge"
                        name="phoneAge"
                        value={formData.phoneAge}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="last6Months">Last 6 Months</option>
                        <option value="1To6Years">Between 1 Year and 6 Months</option>
                        <option value="moreThan1Year">More Than 1 Year</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="hasBill">Do you have the bill?</label>
                    <input
                        type="checkbox"
                        id="hasBill"
                        name="hasBill"
                        checked={formData.hasBill}
                        onChange={handleBillChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="hasWarranty">Is there any warranty/guarantee?</label>
                    <input
                        type="checkbox"
                        id="hasWarranty"
                        name="hasWarranty"
                        checked={formData.hasWarranty}
                        onChange={handleWarrantyChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="images">Upload Images (Max 3)</label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />
                    <div className="image-preview">
                        {formData.images.length > 0 &&
                            Array.from(formData.images).map((file, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={`preview ${index}`}
                                    className="image-thumbnail"
                                />
                            ))}
                    </div>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default SellPhoneForm;
