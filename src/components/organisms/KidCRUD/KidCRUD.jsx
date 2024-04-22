import React from 'react'

// local imports
import Button from '../../atoms/Button/Button'

const KidCRUD = () => {

    const [pin, setPin] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <section id="kid-section">
            <h3>Kids</h3>

            <div className="profiles" id="profile-grid">
            </div>

            <div className="popup">
                <div className="popup-content">
                    <h2 id="kid-form-title">Register a child</h2>
                    <form id="submit-kid-changes">
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

                        <Input
                            id="kidId" type="hidden"                
                            value={kidId} 
                            onChange={setKidId}
                        />

                        <Submit id="submit-pin"/>
                        {/* <input id="submit-pin" className="main-button" type="submit" value="Confirm"> */}
                        <Button>Go Back</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default KidCRUD