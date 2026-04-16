const mongoose=reqire('mongoose');
const student =new mongoose.schema({
    roll_no :{
        type:Number,
        reqire:true,
        unique:true
    },
    student_name :{
        type:String,
        reqire:true,
    },
})