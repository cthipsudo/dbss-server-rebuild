module.exports.deleteEntries = (obj) => {
  return obj.deleteMany({});
};

module.exports.insertEntries = async (data, Obj) => {
  for (let row of data) {
    const rowEntry = await new Obj(row);
    await rowEntry.save();
  }
};
