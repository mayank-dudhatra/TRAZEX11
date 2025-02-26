
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB Connection Error:', err));

// // Use routes
// app.use(userRoutes);

// app.listen(3000, () => console.log('Server running on port 3000'));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
// const teamRoutes = require('./routes/teamRoutes');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB Connection Error:', err));

// app.use(userRoutes);
// app.use(teamRoutes);

// app.listen(3000, () => console.log('Server running on port 3000'));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
// const teamRoutes = require('./routes/teamRoutes');
// const contestRoutes = require('./routes/contestRoutes');
// const dateContestRoutes = require('./routes/dateContestRoutes');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB Connection Error:', err));

// app.use(userRoutes);
// app.use(teamRoutes);
// app.use(contestRoutes);
// app.use("/api", dateContestRoutes);
// app.listen(3000, () => console.log('Server running on port 3000'));



// Corrected Code 



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cron = require("node-cron");
// const moment = require("moment-timezone");

// const userRoutes = require("./routes/userRoutes");
// const teamRoutes = require("./routes/teamRoutes");
// const contestRoutes = require("./routes/contestRoutes");
// const dateContestRoutes = require("./routes/dateContestRoutes");
// const DateContest = require("./models/DateContest");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect("mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// app.use(userRoutes);
// app.use(teamRoutes);
// app.use(contestRoutes);
// app.use("/api", dateContestRoutes);

// // 🕞 Schedule Task: Move Today's Contest to "Concluded" at 3:31 PM
// cron.schedule("31 15 * * *", async () => {
//   try {
//     const today = moment().tz("Asia/Kolkata").format("D MMM");
//     await DateContest.updateMany({ date: today }, { $set: { status: "concluded" } });
//     console.log(`✅ Contest for ${today} moved to 'Concluded' at 3:31 PM.`);
//   } catch (error) {
//     console.error("❌ Error updating contest status:", error);
//   }
// });

// // 🌙 Schedule Task: Create a Contest for the Next Day at Midnight
// cron.schedule("0 0 * * *", async () => {
//   try {
//     const futureMoment = moment().tz("Asia/Kolkata").add(1, "days");
//     const newDate = futureMoment.format("D MMM");
//     const newDay = futureMoment.format("ddd").toUpperCase();

//     const contestExists = await DateContest.findOne({ date: newDate });
//     if (!contestExists) {
//       const newContest = new DateContest({
//         exchange: "NSE",
//         date: newDate,
//         day: newDay,
//         endTime: "15:30",
//         joinedCount: 0,
//         status: "upcoming",
//       });

//       await newContest.save();
//       console.log(`✅ Created a new contest for ${newDate} at Midnight.`);
//     } else {
//       console.log(`⏳ Contest for ${newDate} already exists.`);
//     }
//   } catch (error) {
//     console.error("❌ Error creating new contest:", error);
//   }
// });

// app.listen(3000, () => console.log("🚀 Server running on port 3000"));




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require("node-cron");
const moment = require("moment-timezone");

const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
// const contestRoutes = require("./routes/contestRoutes");
const dateContestRoutes = require("./routes/dateContestRoutes");
const DateContest = require("./models/DateContest");
const newcontestRoutes = require("./routes/newcontestRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use(userRoutes);
app.use(teamRoutes);
// app.use(contestRoutes);
app.use("/api", dateContestRoutes);
app.use("/api1", newcontestRoutes);

// 🕞 Auto-update contest status daily at 3:31 PM
cron.schedule("31 15 * * *", async () => {
    try {
        const today = moment().tz("Asia/Kolkata").format("D MMM");
        await DateContest.updateMany({ date: today }, { $set: { status: "concluded" } });
        console.log(`✅ Contest for ${today} moved to 'Concluded'.`);
    } catch (error) {
        console.error("❌ Error updating contest status:", error);
    }
});

// 🌙 Auto-create the next day's contest at midnight
cron.schedule("0 0 * * *", async () => {
    try {
        const futureMoment = moment().tz("Asia/Kolkata").add(1, "days");
        const newDate = futureMoment.format("D MMM");
        const newDay = futureMoment.format("ddd").toUpperCase();

        const contestExists = await DateContest.findOne({ date: newDate });
        if (!contestExists) {
            await DateContest.create({
                exchange: "NSE",
                date: newDate,
                day: newDay,
                endTime: "15:30",
                status: "upcoming",
            });
            console.log(`✅ Created a new contest for ${newDate}.`);
        }
    } catch (error) {
        console.error("❌ Error creating new contest:", error);
    }
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
