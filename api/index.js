module.exports = (req, res) => {
  // Cek apakah request ke /.json atau /api
  if (req.url === '/' || req.url === '/.json') {
    const data = {
      DPMods_Security: {
        App_Status: {
          Admin_URL: "https://t.me/kepental",
          Banned_Devices: "hacker_hwid_001,hacker_hwid_002",
          Dialog_Subtitle: "Secure authentication required.",
          Dialog_Title: "SYSTEM ACCESS",
          Maintenance: false,
          Update_Link: "https://t.me/AppoloSX6_Channel",
          Update_Required: false
        }
      },
      Keys: {
        PinokCrack: {
          Banned: false,
          DeviceLimit: 9999,
          Devices: {
            "dummy": 0
          },
          ExpiryDate: "2029-12-31",
          Username: "PinokCrack"
        }
      }
    };
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } else {
    // 404 untuk path lain
    res.status(404).json({ error: "Not found" });
  }
};