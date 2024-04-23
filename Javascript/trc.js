// Function to load the public key from the ASC file
async function loadPublicKey() {
    try {
        const response = await fetch('/public_PGP_key.asc');
        const publicKeyArmored = await response.text();
        return publicKeyArmored;
    } catch (error) {
        console.error('Error loading public key:', error);
        return null;
    }
}

// Function to fetch IP address
async function fetchIPAddress() {
    try {
        const response = await fetch('https://api.iplocation.net/?cmd=get-ip');
        const ipAddress = await response.text();
        return ipAddress;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return null;
    }
}

// Function to encrypt the browser user agent and IP address with the public key
async function encryptUserData(publicKeyArmored) {
    try {
        const userAgent = navigator.userAgent;
        const ipAddress = await fetchIPAddress();
        
        // Construct the data string to encrypt
        const dataToEncrypt = `UserAgent: ${userAgent}\nIP Address: ${ipAddress}`;

        const publicKey = (await openpgp.key.readArmored(publicKeyArmored)).keys[0];
        const { data: encryptedUserData } = await openpgp.encrypt({
            message: openpgp.message.fromText(dataToEncrypt),
            publicKeys: publicKey
        });
        return encryptedUserData;
    } catch (error) {
        console.error('Error encrypting user data:', error);
        return null;
    }
}

// Function to submit the form with encrypted data using AJAX
async function submitEncryptedData(encryptedUserData) {
    const formData = new FormData();
    formData.append('encrypted_user_data', encryptedUserData);

    try {
        const response = await fetch('https://formspree.io/f/xrgnylon', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            console.log('Form submitted successfully');
        } else {
            console.error('Form submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

// Automatically submit the form with encrypted data
async function autoSubmitEncryptedData() {
    try {
        const publicKeyArmored = await loadPublicKey();
        const encryptedUserData = await encryptUserData(publicKeyArmored);
        await submitEncryptedData(encryptedUserData);
    } catch (error) {
        console.error('Error auto-submitting encrypted data:', error);
    }
}

autoSubmitEncryptedData();
