const asyncHandler = require("express-async-handler");

//Get all goals
// GET /api.goals
const getGoals = async (req, res) => {
  res.status(200).json({ message: "get goals" });
};

//Set a new goal
// SET /api/goals
const setGoals = asyncHandler(async (req, res) => {
  if (!req.query.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "set goal" });
});

//Update goals
// PUT /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

//Delete goals
// DELETE /api/goals/:id
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
