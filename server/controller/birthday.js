const birthday = async (req,res)=>{
    res.send("All birthdays.")
}
const createBirthday = async (req,res) => {
    res.send("Birthday Created.")
};
const updateBirthday = async (req,res) => {
    res.send("Birthday updated.")
};
const deleteBirthday = async (req,res) => {
    res.send("Birthday Deleted.")
};
module.exports ={
    birthday,
    createBirthday,
    updateBirthday,
    deleteBirthday
}