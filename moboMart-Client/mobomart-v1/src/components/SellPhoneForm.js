import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import '../css/SellPhoneForm.css';
import { useNavigate } from 'react-router-dom';

const SellPhoneForm = () => {
    // const [formData, setFormData] = useState({
    //     model: '',
    //     ram: '',
    //     rom: '',
    //     expectedPrice: '',
    //     phoneAge: '',
    //     hasBill: false,
    //     hasWarranty: false
    // });

    const [model, setModel] = useState('');
    const [ram, setRam] = useState('');
    const [rom, setRom] = useState('');
    const [expectedPrice, setExpectedPrice] = useState('');
    const [phoneAge, setPhoneAge] = useState('');
    const [hasBill, setHasBill] = useState(false);
    const [hasWarranty, setHasWarranty] = useState(false);
    const [image, setImage] = useState(null);



    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     if (name === 'expectedPrice' && value < 0) {
    //         return;
    //     }

    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleBillChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         hasBill: e.target.checked,
    //     });
    // };

    // const handleWarrantyChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         hasWarranty: e.target.checked,
    //     });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const payload = {
        //     model: formData.model,
        //     ram: formData.ram,
        //     rom: formData.rom,
        //     expectedPrice: formData.expectedPrice,
        //     phoneAge: formData.phoneAge,
        //     hasBill: formData.hasBill,
        //     hasWarranty: formData.hasWarranty,
        // };

        const formData = new FormData();
        formData.append('model', model);
        formData.append('ram', ram);
        formData.append('rom', rom);
        formData.append('expectedPrice', expectedPrice);
        formData.append('phoneAge', phoneAge);
        formData.append('hasBill', hasBill);
        formData.append('hasWarranty', hasWarranty);
        formData.append('image', image);


        try {
            const response = await axios.post(`/api/v1/old-products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
        });

            if (response.status === 200) {
                alert(`Phone added successfully! Response: ${response.data}`);
                navigate('/old-smartphone');
            } else {
                alert('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="sell-phone-form">
            <h2>Sell Your Phone</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        // value={formData.model}
                        // onChange={handleChange}
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ram">RAM</label>
                    <select
                        id="ram"
                        name="ram"
                        // value={formData.ram}
                        // onChange={handleChange}
                        value={ram}
                        onChange={(e) => setRam(e.target.value)}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="1">1 GB</option>
                        <option value="2">2 GB</option>
                        <option value="4">4 GB</option>
                        <option value="6">6 GB</option>
                        <option value="8">8 GB</option>
                        <option value="16">16 GB</option>

                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="rom">Storage</label>
                    <select
                        id="rom"
                        name="rom"
                        // value={formData.rom}
                        // onChange={handleChange}
                        value={rom}
                        onChange={(e) => setRom(e.target.value)}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="16">16 GB</option>
                        <option value="32">32 GB</option>
                        <option value="64">64 GB</option>
                        <option value="128">128 GB</option>
                        <option value="256">256 GB</option>
                        <option value="512">512 GB</option>
                        <option value="1024">1 TB</option>

                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="expectedPrice">Expected Price (Rs)</label>
                    <input
                        type="number"
                        id="expectedPrice"
                        name="expectedPrice"
                        // value={formData.expectedPrice}
                        // onChange={handleChange}
                        value={expectedPrice}
                        onChange={(e) => setExpectedPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneAge">How Old is the Phone?</label>
                    <select
                        id="phoneAge"
                        name="phoneAge"
                        // value={formData.phoneAge}
                        // onChange={handleChange}
                        value={phoneAge}
                        onChange={(e) => setPhoneAge(e.target.value)}
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
                        // checked={formData.hasBill}
                        // onChange={handleBillChange}
                        value={hasBill}
                        onChange={(e) => setHasBill(e.target.checked)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="hasWarranty">Is there any warranty/guarantee?</label>
                    <input
                        type="checkbox"
                        id="hasWarranty"
                        name="hasWarranty"
                        // checked={formData.hasWarranty}
                        // onChange={handleWarrantyChange}
                        value={hasWarranty}
                        onChange={(e) => setHasWarranty(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>



                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default SellPhoneForm;
