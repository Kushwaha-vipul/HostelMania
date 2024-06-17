const {Schema,model}=require("mongoose");

const messTTSchema= new Schema({
  day: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  meals: {
    type: Object,
    required: true,
  },
  breakfast: { 
    type: Array,
    required: true,
    of: String,
  },
  lunch: {
    type: Array,
    required: true,
    of: String,
  },
  snack: {
    type: Array,
    required: true,
    of: String,
  },
  dinner: {
    type: Array,
    required: true,
    of: String,
  },
  timings: {
    type: Object,
    required: true,
  },
});

const Messtt=new model("Messtt",messTTSchema);
module.exports=Messtt;