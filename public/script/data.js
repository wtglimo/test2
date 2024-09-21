function copyFollowUp(quote) {
    const name = quote.customer_name;
    const vehicleKey = quote.vehicle_type;
    const price = parseFloat(quote.total_amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    const vehicleInfo = vehicles[vehicleKey] || {
      vehicleName: "Unknown Vehicle",
      imageUrl: "https://example.com/default.jpg",
      vehicleLink: "#"
    };
  
    const reserveLink = "https://wtglimo.com/reservation-limo.php";
  
    const message = `
      <p>Hi ${name},</p><br>
      <p style="margin-bottom: 10px;">The quote of <span style="font-weight:bold;font-size:15px;">$${price}</span> is <strong>expiring soon.</strong> Therefore, I'm reaching out to see if you're still interested in the <a href="${vehicleInfo.vehicleLink}" style="font-weight:bold;font-size:15px;color:black;text-decoration:none;" target="_blank">${vehicleInfo.vehicleName}</a> or have any questions.</p>
      <p><img src="${vehicleInfo.imageUrl}" alt="${vehicleKey}" style="max-width: 100%; max-height: 200px; border-radius: 8px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); width: 100%; height: auto; object-fit: cover;"></p>
      <p><a href="${vehicleInfo.vehicleLink}" style="font-weight:bold;font-size:15px;margin-bottom:20px;" target="_blank">View More</a></p>
      <p style="margin-top: 20px;">A 20% deposit is required to hold the vehicle. The availability is limited.</p>
      <p style="margin-bottom:20px;">Secure your vehicle now!</p>
      <p><a href="${reserveLink}" style="display: inline; background-color: #008000; color: white; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-size: 16px; margin-bottom: 5px;" target="_blank">RESERVE NOW</a></p>
      <hr>
    `;
  
    // Create a temporary element to hold the message
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = message;
  
    // Copy the message to clipboard
    const range = document.createRange();
    range.selectNodeContents(tempDiv);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('copy');
      alert('Follow-up message copied to clipboard.');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy the follow-up message. Please try again.');
    }
    selection.removeAllRanges();
  }
  