import React, {useState} from 'react'

const KidsForm = ({kid, onSave}) => {

    const [pin, setPin] = useState(kid?.pin)
    const [name, setName] = useState(kid?.name)
    const [age, setAge] = useState(kid?.age)

    const handleSubmit = () => {
        onSave({pin, name, age, _id: kid._id})
    }

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
                    <a id="prevImage">◀</a>
                    <img className="profile-image choosing" id="image" src=" " alt="Profile Image"/>
                    <a id="nextImage">▶</a>
                </div>

                <Submit id="submit-pin"/>
                <Button>Go Back</Button>
            </form>
        </>
    )
}

export default KidsForm