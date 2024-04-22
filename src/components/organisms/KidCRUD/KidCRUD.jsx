import React from 'react'

// local imports
import Button from '../../atoms/Button/Button'
import KidsForm from '../../molecules/KidsForm/KidsForm'

const KidCRUD = () => {

    const [pin, setPin] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <section id="kid-section">
            <h3>Kids</h3>

            <div className="profiles" id="profile-grid">
            </div>

            <PopUp>
                <KidsForm />
            </PopUp>
        </section>
    )
}

export default KidCRUD