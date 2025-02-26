// const DateContest = require("../models/DateContest");
// const moment = require("moment-timezone");

// const TIMEZONE = "Asia/Kolkata";

// exports.getActiveContests = async (req, res) => {
//     try {
//         const now = moment().tz(TIMEZONE);
//         const todayDate = now.format("D MMM");
//         const timeNow = now.format("HH:mm");

//         const activeContests = await DateContest.find({
//             date: { $ne: todayDate },
//         });

//         if (timeNow <= "09:10") {
//             const todayContest = await DateContest.findOne({ date: todayDate });
//             if (todayContest) {
//                 activeContests.unshift(todayContest);
//             }
//         }

//         return res.json({ status: "success", contests: activeContests });
//     } catch (error) {
//         return res.status(500).json({ status: "error", message: error.message });
//     }
// };

// exports.getConcludedContests = async (req, res) => {
//     try {
//         const concludedContests = await DateContest.find({ status: "concluded" });
//         return res.json({ status: "success", contests: concludedContests });
//     } catch (error) {
//         return res.status(500).json({ status: "error", message: error.message });
//     }
// };

// exports.updateContestStatus = async () => {
//     try {
//         const now = moment().tz(TIMEZONE);
//         const todayDate = now.format("D MMM");
//         const timeNow = now.format("HH:mm");

//         // Move today's contest to "concluded" after 3:31 PM
//         if (timeNow >= "15:31") {
//             await DateContest.updateOne(
//                 { date: todayDate },
//                 { $set: { status: "concluded" } }
//             );

//             // Create next day's contest if not exists
//             const futureMoment = moment().tz(TIMEZONE).add(1, "days");
//             const nextDate = futureMoment.format("D MMM");
//             const nextDay = futureMoment.format("ddd").toUpperCase();

//             const nextContestExists = await DateContest.findOne({ date: nextDate });
//             if (!nextContestExists) {
//                 await DateContest.create({
//                     exchange: "NSE",
//                     date: nextDate,
//                     day: nextDay,
//                     endTime: "15:30",
//                     status: "upcoming",
//                 });
//             }
//         }
//     } catch (error) {
//         console.error("Error updating contest status:", error);
//     }
// };

// exports.createContest = async (req, res) => {
//     try {
//         const { exchange, date, day, endTime } = req.body;

//         const existingContest = await DateContest.findOne({ date });
//         if (existingContest) {
//             return res.status(400).json({ status: "error", message: "Contest already exists for this date" });
//         }

//         const newContest = new DateContest({
//             exchange,
//             date,
//             day,
//             endTime,
//             status: "upcoming",
//         });

//         await newContest.save();
//         res.json({ status: "success", contest: newContest });
//     } catch (error) {
//         res.status(500).json({ status: "error", message: error.message });
//     }
// };

// // Run status update every minute (for automation)
// setInterval(exports.updateContestStatus, 60000);



const DateContest = require("../models/DateContest");
const moment = require("moment-timezone");

const TIMEZONE = "Asia/Kolkata";

// ✅ Get contest details for a specific date (when a user clicks "Join")
// ✅ Get all contests for a specific date
exports.getContestsByDate = async (req, res) => {
    try {
        const { date } = req.params; // Extract date from request URL

        // Fetch all contests for the given date
        const contests = await DateContest.find({ date });

        // Check if contests exist for that date
        if (!contests.length) {
            return res.status(404).json({ status: "error", message: "No contests found for this date." });
        }

        return res.json({ status: "success", contests });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
};


// ✅ Get active contests (excluding concluded ones)
exports.getActiveContests = async (req, res) => {
    try {
        const now = moment().tz(TIMEZONE);
        const todayDate = now.format("D MMM"); // Format: "26 FEB"

        // Fetch only upcoming or ongoing contests (excluding concluded and past ones)
        const activeContests = await DateContest.find({
            status: { $in: ["upcoming", "ongoing"] },
            date: { $gte: todayDate } // Ensures past contests are not included
        });

        return res.json({ status: "success", contests: activeContests });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
};


// ✅ Update contest statuses automatically
exports.updateContestStatus = async () => {
    try {
        const now = moment().tz(TIMEZONE);
        const todayDate = now.format("D MMM");
        const timeNow = now.format("HH:mm");

        // Move today's contest to "concluded" after 3:31 PM
        if (timeNow >= "15:31") {
            await DateContest.updateOne(
                { date: todayDate },
                { $set: { status: "concluded" } }
            );

            // Create next day's contest dynamically if not exists
            const futureMoment = moment().tz(TIMEZONE).add(1, "days");
            const nextDate = futureMoment.format("D MMM");
            const nextDay = futureMoment.format("ddd").toUpperCase();

            const nextContestExists = await DateContest.findOne({ date: nextDate });
            if (!nextContestExists) {
                await DateContest.insertMany([
                    {
                        exchange: "NSE",
                        date: nextDate,
                        day: nextDay,
                        endTime: "15:30",
                        status: "upcoming",
                    },
                    {
                        exchange: "BSE",
                        date: nextDate,
                        day: nextDay,
                        endTime: "15:30",
                        status: "upcoming",
                    }
                ]);
            }
        }
    } catch (error) {
        console.error("Error updating contest status:", error);
    }
};

// 🕒 Run status update automatically every minute
setInterval(exports.updateContestStatus, 60000);
