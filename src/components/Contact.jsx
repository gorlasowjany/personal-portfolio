import React,{useState} from "react";
const Contact = () =>{
    const [form,setForm] = useState({name:'',email:'',message:''})
    const [status,setStatus] =useState('')
    const handleChange = e => {
        const {name,value} = e.target;
        setForm(prev => ({...prev,[name]:value}))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('Sending...')
        try{
            const response= await fetch('/api/contact',
            {
                method:'POST',
                headers:{'Content-type': 'application/json'},
                body:JSON.stringify(form),
            })
            const data = await response.json()
            setStatus(data.status)
            setForm({name:'',email:'',message:''})
        }
        catch(error){
            console.error('Error sending message:',error)
            setStatus('something went wrong')
        }
    }
    return(
        <section className="w-full py-12 px-6 bg-white dark:bg-gray-800">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-4" >
                 <input
                    type="text" name="name" placeholder="Your name" 
                    value={form.name} onChange={handleChange} 
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white" required
                 />
                 <input
                    type="email" name="email" placeholder="your email" 
                    value={form.email} onChange={handleChange} 
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white" required
                 />
                 <textarea
                     name="message" placeholder="Your Message" rows="5"
                    value={form.message} onChange={handleChange} 
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white" required
                 />
                 <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700" >Send</button>
                 {status && <p className="text-center mt-2 text-sm">{status}</p>}   
                    
                </form>
            </div>
        </section>
    )
}
export default Contact