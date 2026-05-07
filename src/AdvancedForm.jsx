import {useState} from "react";


function AdvancedForm() {

const [formData, setformData] = useState({
        gender:"",
        agree:"false",
        country:"India"
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
     }


     const handleChange = (e) => {
        const {name, type, value, checked} = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: type === "checked" ? checked : value
        })) 
     }

    return (
       <form onSubmit ={handleSubmit}>
        <h2>Form with CheckBox, Radio & Select</h2>

        <lebel>
            Gender: 

            <imput 
            type="radio" 
            name="gender" 
            value="Male"     
            checked={formData.gender === "Male"}      
            onChange={handleChange}
 />
            Male  
        </lebel>

        <lebel>
            <imput 
            type="radio" 
            name="gender" 
            value="Male"   
            checked={formData.gender === "female"}         
            onChange={handleChange}
/>
            Female
        </lebel>
            <br />

        <label>
            country:
            <select name="country" 
            value={formData.country}
            onChange={handleChange}>
                <option value="India" >India</option>
                <option value="USA" >USA</option>
                <option value="UK" >UK</option>
            </select>
        </label>
        <br />

        <label>
            <input 
            type="checkbox" 
            name = "agree" 
            checked={formData.agree}
            onChange={handleChange}

            />
            agree to treams and consitions
        </label>
        <br />

        <button type="submit">Submit</button>

       </form> 
    )
}

export default AdvancedForm