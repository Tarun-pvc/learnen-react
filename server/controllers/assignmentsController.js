const Assignment = require('../models/AssignmentModel');

const createAssignment = async (req, res, next) => {
    console.log("Inside createAssignment function");
    const { title, deadline, link } = req.body;
    try {
        const assignment = new Assignment({
            title,
            deadline,
            link
        });
        await assignment.save();
        res.status(201).json({ message: "Assignment created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not create assignment" });
        next(err);
    }
}

const getAssignments = async (req, res, next) => {
    console.log("Inside getAssignments function");
    try {
        const assignments = await Assignment.find();
        res.status(200).json({ assignments: assignments });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not fetch assignments" });
        next(err);
    }
}

module.exports = {
    createAssignment,
    getAssignments
}

// .cr-assignment-assigned-item {
//     margin-top: 3vh;
//     background-color: #112D4E;
//     width: 90%;
//     border-radius: 5px;
//     margin-left: 1rem;
//     border-top-right-radius: 10px;
//     border-bottom-right-radius: 10px;
// }