import { useForm } from 'react-hook-form'
import './Home.css'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
export default function Education(){
    const branches=['computer','IT','AIDS','Mechanical','Other']
    const degreeName=['10th','12th','Diploma','Btech','BE']
    const {register,handleSubmit,formState:{errors},reset}=useForm()
    const [educations,setEducations] = useState( localStorage.getItem('educations') != null ? JSON.parse(localStorage.getItem('educations')) : [])
    // const [certifications, setCertifications] = useState([{ certificationTitle: '', issuingOrganization: '', issueDate: '', expirationDate: '', description: '' }])

    useEffect(() =>{
        localStorage.setItem('educations',JSON.stringify(educations))
    },[educations])

    const onAddEducations=(data) =>{
        // console.log(data)
        setEducations([
            ...educations,
            data
        ])
        reset()
        toast.success('Education added successfully !!!')
    }
    return(
        <>
        <div className='education-container'>
            <div className='title'>
                <h2>Educational Information</h2>
            </div>
            <form onSubmit={handleSubmit(onAddEducations)}>
                <div  className='input-fields'>
                    <label>Degree Name</label>
                   <div className="field">
                    <select {...register('degree',{
                        required:'Degree name is required..!!'
                    })}>
                        <option value='' selected>Select Your Branch</option>
                        {
                            degreeName.map((item,key)=>{
                                return(
                                    <option value={item} key={key}>{item}</option>
                                )
                            })
                        }
                    </select>
                    {errors.degree && <p>{errors.degree.message}</p>}
                   </div>
                </div>
                
                
                <div  className='input-fields'>
                    <label>Branch Name</label>
                   <div className="field">
                        <select {...register('branch',{
                        required:'Branch name is required..!!'
                    })}>
                        <option value='' selected>Select Your Branch</option>
                        {
                            branches.map((item,key)=>{
                                return(
                                    <option value={item} key={key}>{item}</option>
                                )
                            })
                        }
                    </select>
                    {errors.branch && <p>{errors.branch.message}</p>}
                   </div>
                </div>
                <div className='input-fields'>
                <label>Degree start Date</label>
                <div className="field">
                    <input type='date'{...register('sdate',{
                        required:'Start date is required',
                    
                    })}></input>
                    {errors.sdate && <p>{errors.sdate.message}</p>}
                </div>
            </div>
            <div className='input-fields'>
                <label>Degree End Date</label>
                <div className="field">
                <input type='date'{...register('edate',{
                        required:'End date is required',
                    
                    })}></input>
                    {errors.edate && <p>{errors.edate.message}</p>}
                </div>
            </div>
            <div className='input-fields'>
                <label>Percentage</label>
                <div className="field">
                    <input type='number'{...register('percent',{
                        required:'Percentage is required',
                    
                    })}></input>
                    {errors.percent && <p>{errors.percent.message}</p>}
                </div>
            </div>
            <button type='submit'>Save</button>
            </form>
        </div>
        </>
    )
}