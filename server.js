const exp=require('express');
const app=exp();
app.use(exp.json());
let students=[{id:1,name:"John",age:20},{id:2,name:"Jane",age:22},{id:3,name:"Doe",age:21},{id:4,name:"Smith",age:23}];
app.post('/students',(req,res)=>{
    let newStudent=req.body;
    students.push(newStudent);
    res.send({message:"Student added successfully",students:students});
});
app.get('/students',(req,res)=>{
    res.send(students);
});
app.put('/students/:id',(req,res)=>{
    let studentId=parseInt(req.params.id);
    let updatedStudent=req.body;
    let idx=students.findIndex(student=>student.id===studentId);  

    if(idx!==-1){
        students[idx]=updatedStudent;
        res.send({message:"Student updated successfully",students:students});
    }   
    else{
        res.status(404).send({message:"Student not found"});
    }
});
app.delete('/students/:id',(req,res)=>{
    let studentId=parseInt(req.params.id);  
    let idx=students.findIndex(student=>student.id===studentId);      
    if(idx!==-1){
        students.splice(idx,1);
        res.send({message:"Student deleted successfully",students:students});
    }   
    else{
        res.status(404).send({message:"Student not found"});
    }           
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
