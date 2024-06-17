const {Schema,model}=require("mongoose");

const serviceSchema=new Schema({
   worker:{
      type:String,
      required:true,
   },
         service:{
            type:String,
            required:true,
         },
         username:{
            type:String,
            required:true,
         },
         
         location:{
            type:String,
            required:true,
         },
       availability:{
            type:String,
            required:true,
         },
       
         submittedOn:{
            type:Date,
            default:Date.now,
            
         },
         description:{
            type:String,
            required:true,
         }
        
})
const service=new model("Service",serviceSchema)
module.exports=service;











{/* <div className="service-container">
<h1>Service Complaint System</h1>
<div className="complaint-form">

<form onSubmit={handleSubmit}>
    <div className="inputBox">
    <label htmlFor="worker">worker</label>
    <input
    type="text"
    name="worker"
    placeholder="worker"
    id="worker"
    required
    autoComplete="off"
    value={service.worker}
    onChange={handleInput}
   />
   </div>
    <div className="inputBox">
    <label htmlFor="service">service</label>
    <input
    type="text"
    name="service"
    placeholder=""
    id="service"
    required
    autoComplete="off"
    value={service.service}
    onChange={handleInput}
   />
   </div>
    <div className="inputBox">
    <label htmlFor="username">username</label>
    <input
    type="text"
    name="username"
    placeholder=""
    id="username"
    required
    autoComplete="off"
    value={service.username}
    onChange={handleInput}
   />
    </div>
    <div className="inputBox">
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="type your location"
        required
        autoComplete="off"
        value={service.location}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="availability">Time</label>
      <input
        type="time"
        name="availability:"
        id="availability:"
        placeholder="type your phone"
        required
        autoComplete="off"
        value={service.availability}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="submittedOn">Date</label>
      <input
        type="date"
        name="submittedOn"
        id="submittedOn"
        placeholder="type "
        required
        autoComplete="off"
        value={service.submittedOn}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="type "
        required
        autoComplete="off"
        value={service.description}
        onChange={handleInput}
      />
    </div>
  
    <button type="submit" style={{ float: 'left' }}>Submit</button>
</form>
</div>
<div className="complaint-form">

<form onSubmit={handleSubmit}>
    <div className="inputBox">
    <label htmlFor="worker">worker</label>
    <input
    type="text"
    name="worker"
    placeholder="worker"
    id="worker"
    required
    autoComplete="off"
    value={service.worker}
    onChange={handleInput}
   />
   </div>
    <div className="inputBox">
    <label htmlFor="service">service</label>
    <input
    type="text"
    name="service"
    placeholder=""
    id="service"
    required
    autoComplete="off"
    value={service.service}
    onChange={handleInput}
   />
   </div>
    <div className="inputBox">
    <label htmlFor="username">username</label>
    <input
    type="text"
    name="username"
    placeholder=""
    id="username"
    required
    autoComplete="off"
    value={service.username}
    onChange={handleInput}
   />
    </div>
    <div className="inputBox">
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="type your location"
        required
        autoComplete="off"
        value={service.location}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="availability">Time</label>
      <input
        type="time"
        name="availability:"
        id="availability:"
        placeholder="type your phone"
        required
        autoComplete="off"
        value={service.availability}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="submittedOn">Date</label>
      <input
        type="date"
        name="submittedOn"
        id="submittedOn"
        placeholder="type "
        required
        autoComplete="off"
        value={service.submittedOn}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="type "
        required
        autoComplete="off"
        value={service.description}
        onChange={handleInput}
      />
    </div>
  
    <button type="submit" style={{ float: 'left' }}>Submit</button>
</form>
</div>
<div className="complaint-form">

<form onSubmit={handleSubmit}>
    <div className="inputBox">
    <label htmlFor="worker">worker</label>
    <input
    type="text"
    name="worker"
    placeholder="worker"
    id="worker"
    required
    autoComplete="off"
    value={service.worker}
    onChange={handleInput}
   />
   </div>
    <div className="inputBox">
    <label htmlFor="service">service</label>
    <input
    type="text"
    name="service"
    placeholder=""
    id="service"
    required
    autoComplete="off"
    value={service.service}
    onChange={handleInput}
   />
   </div>
    <div className="inputBox">
    <label htmlFor="username">username</label>
    <input
    type="text"
    name="username"
    placeholder=""
    id="username"
    required
    autoComplete="off"
    value={service.username}
    onChange={handleInput}
   />
    </div>
    <div className="inputBox">
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="type your location"
        required
        autoComplete="off"
        value={service.location}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="availability">Time</label>
      <input
        type="time"
        name="availability:"
        id="availability:"
        placeholder="type your phone"
        required
        autoComplete="off"
        value={service.availability}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="submittedOn">Date</label>
      <input
        type="date"
        name="submittedOn"
        id="submittedOn"
        placeholder="type "
        required
        autoComplete="off"
        value={service.submittedOn}
        onChange={handleInput}
      />
    </div>
    <div className="inputBox">
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="type "
        required
        autoComplete="off"
        value={service.description}
        onChange={handleInput}
      />
    </div>
  
    <button type="submit" style={{ float: 'left' }}>Submit</button>
</form>
</div>
</div> */}
