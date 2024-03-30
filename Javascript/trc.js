// Function to load the public key from the ASC file
async function loadPublicKey() {
    const response = await fetch('/public_PGP_key.asc');
    const publicKeyArmored = await response.text();
    return publicKeyArmored;
}

// Function to encrypt the browser user agent with the public key
async function encryptUserAgent(publicKeyArmored) {
    const userAgent = navigator.userAgent;
    const publicKey = (await openpgp.key.readArmored(publicKeyArmored)).keys[0];
    const { data: encryptedUserAgent } = await openpgp.encrypt({
        message: openpgp.message.fromText(userAgent),
        publicKeys: publicKey
    });
    return encryptedUserAgent;
}

// Function to submit the form with encrypted data using AJAX
async function submitEncryptedData(encryptedUserAgent) {
    const formData = new FormData();
    formData.append('encrypted_user_agent', encryptedUserAgent);

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
    const publicKeyArmored = await loadPublicKey();
    const encryptedUserAgent = await encryptUserAgent(publicKeyArmored);
    await submitEncryptedData(encryptedUserAgent);
}

// Call the function automatically when the page loads
window.addEventListener('load', () => {
    autoSubmitEncryptedData();
});