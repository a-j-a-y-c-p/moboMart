import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig'; // Ensure you have axios configured here
import '../css/Details.css'; // Optional: Add styling here

const Details = () => {
    const { id } = useParams(); // Get the product ID from the route
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await api.get(`/api/v1/products/${id}`); // Fetch product by ID
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching product details:', err);
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="details-container">
            {/* Product Overview Section */}
            <section className="product-overview">
                <h1>{product.title}</h1>
                <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="details-image"
                />
                <p><strong>Price:</strong> rs {product.price}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Color:</strong> {product.color}</p>
            </section>

            {/* Technical Specifications Section */}
            <section className="technical-specifications">
                <h2>Technical Specifications</h2>
                <p><strong>SIM Type:</strong> {product.simType}</p>
                <p><strong>Hybrid Sim Slot:</strong> {product.hybridSimSlot ? 'Yes' : 'No'}</p>
                <p><strong>Quick Charging:</strong> {product.quickCharging ? 'Yes' : 'No'}</p>
                <p><strong>Sound Enhancements:</strong> {product.soundEnhancements}</p>
                <p><strong>Display Size (inches):</strong> {product.displaySizeInches}"</p>
                <p><strong>Resolution:</strong> {product.resolution}</p>
                <p><strong>Resolution Type:</strong> {product.resolutionType}</p>
                <p><strong>Operating System:</strong> {product.operatingSystem}</p>
                <p><strong>Processor Type:</strong> {product.processorType}</p>
                <p><strong>Processor Core:</strong> {product.processorCore}</p>
                <p><strong>Internal Storage:</strong> {product.internalStorage}</p>
            </section>

            {/* Camera Details Section */}
            <section className="camera-details">
                <h2>Camera Details</h2>
                <p><strong>Primary Camera:</strong> {product.primaryCamera}</p>
                <p><strong>Secondary Camera:</strong> {product.secondaryCamera}</p>
                <p><strong>Video Recording Resolution:</strong> {product.videoRecordingResolution}</p>
                <p><strong>Frame Rate:</strong> {product.frameRate}</p>
            </section>

            {/* Connectivity Section */}
            <section className="connectivity">
                <h2>Connectivity</h2>
                <p><strong>Supported Networks:</strong> {product.supportedNetworks}</p>
                <p><strong>Bluetooth Version:</strong> {product.bluetoothVersion}</p>
                <p><strong>Wi-Fi Version:</strong> {product.wifiVersion}</p>
                <p><strong>Sensors:</strong> {product.sensors}</p>
                <p><strong>Other Features:</strong> {product.otherFeatures}</p>
            </section>

            {/* Physical Attributes Section */}
            <section className="physical-attributes">
                <h2>Physical Attributes</h2>
                <p><strong>Battery Capacity:</strong> {product.batteryCapacity}</p>
                <p><strong>Width:</strong> {product.width}</p>
                <p><strong>Height:</strong> {product.height}</p>
                <p><strong>Depth:</strong> {product.depth}</p>
                <p><strong>Weight:</strong> {product.weight}</p>
            </section>
        </div>
    );
};

export default Details;
