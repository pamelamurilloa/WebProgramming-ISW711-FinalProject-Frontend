import React, {useState} from 'react'
import Input from '../atoms/Input'
import Submit from '../atoms/Submit'
import Button from '../atoms/Button'

const KidsForm = ({onSave, onCancel, kid = null}) => {

    const [pin, setPin] = useState(kid?.pin)
    const [name, setName] = useState(kid?.name)
    const [age, setAge] = useState(kid?.age)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave({
            pin, 
            name, 
            age, 
            avatar:imageNumber,
            ... (kid && {_id:kid._id})
        })
    }

    const [imageNumber, setImageNumber] = useState(parseInt(kid?.avatar) || 1);

    const handlePrevClick = () => {
      setImageNumber(prevNumber => (prevNumber === 1 ? 8 : prevNumber - 1));
    };
  
    const handleNextClick = () => {
      setImageNumber(prevNumber => (prevNumber === 8 ? 1 : prevNumber + 1));
    };

    return (
        <>
            <h2 id="kid-form-title">Register a child</h2>
            <form id="submit-kid-changes" onSubmit={handleSubmit}>
                <Input
                    id="name" placeholder="Name" required                
                    value={name} 
                    onChange={setName}
                />
                <Input
                    className="password"
                    id="pin" placeholder="Pin" maxLength="6" minLength="6" required                
                    value={pin} 
                    onChange={setPin}
                />
                <Input
                    id="age" placeholder="Age" min="0" max="17" required                
                    value={age} 
                    onChange={setAge}
                />
                
                <div className="profile-image-container">
                    <a id="prevImage" onClick={handlePrevClick}>◀</a>
                    <img
                    className="profile-image choosing"
                    id="image"
                    src={`/profilePictures/profile${imageNumber}.png`}
                    alt="Profile Image"/>
                    <a id="nextImage" onClick={handleNextClick}>▶</a>
                </div>

                <Submit/>
                <Button onClick={onCancel}>Go Back</Button>
            </form>
        </>
    )
}

export default KidsForm