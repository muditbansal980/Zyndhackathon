const fs = require("fs");
async function handlebenefits(req,res){
    // try{
    //     const benefits = fs.readFileSync("../sample_government_schemes_1000.json", "utf-8");
    //     console.log(benefits);
    //     const data = JSON.parse(benefits);
    //     console.log(data);
    //     res.status(200).json(data);
    // }catch(err){
    //     res.status(500).json({error: "Internal Server Error"});
    // }
    fs.readFile("./sample_government_schemes_1000.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        try {
            const jsonData = JSON.parse(data);
            res.status(200).json(jsonData);
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
module.exports={handlebenefits};