const Schedule=require("../models/ScheduleModel")
const Room = require("../models/RoomModel");

const addSchedule=async(req,res,next)=>{
    const {title,time,link,courseId}=req.body;

    try{
        const schedule = new Schedule({
            title,
            time,
            link
        })
        const room = await Room.findById(courseId);
        if(!room){
            return res.status(404).json({ error: "Room not found" });
        }

        room.schedule.push(schedule);
        await room.save();
        await schedule.save();

        res.status(201).json({ message: "Schedule added successfully" });
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: "Could not create schedule" });
        next(err);
    }
}

const getScheduleByCourse = async(req,res,next)=>{
    try{
        const {courseId} = req.body;

        const room = await Room.findById(courseId);
        const roomSchedules = await room.schedule;
        const schedules= await Schedule.find({_id:{ $in: roomSchedules }});
        res.status(200).json({ schedules: schedules});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: "Could not fetch schedules" });
        next(err);
    }
}
const getSchedule = async (req, res, next) => {
    try {
        let { joinedRooms, createdRooms } = req.body;
        let students=[];
        let total=0;
        const joinedRoomSchedules = await Room.find({ _id: { $in: joinedRooms } })
            .populate('schedule')
            .then(rooms => rooms.flatMap(room => room.schedule));
        const createdRoomSchedules = await Room.find({ _id: { $in: createdRooms } })
            .populate('schedule')
            .then(rooms => rooms.flatMap(room => room.schedule));
        const allSchedules = [...joinedRoomSchedules, ...createdRoomSchedules];
        const schedules= await Schedule.find({_id:{ $in: allSchedules }});
        // console.log(allSchedules);

        for (const room of createdRooms) {
            const roomData = await Room.findById(room);
            if(roomData.participants.length>0){
                total=total+parseInt(roomData.participants.length);
                students.push({ name: roomData.title, value: roomData.participants.length });
            }
            
          }

        res.status(200).json({ schedules: schedules,students:students,total:total});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not fetch schedules" });
        next(err);
    }
}





module.exports={
    addSchedule,
    getScheduleByCourse,
    getSchedule
}