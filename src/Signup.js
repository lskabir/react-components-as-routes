import React from 'react'

class Signup extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <input type='text' name='username' placeholder='Username' />
                </div>
                <div>
                    <input type='password' name='password' placeholder='Password' />
                </div>
                    <input type='submit' value='Signup' />
            </form>
        )
    }
}

export default Signup