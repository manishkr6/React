function Hello() {

    let myName = 'Manish'
    let contactNo = 8927436941

    let fullName = () => {
        return 'Manish Kumar Baitha'
    }
     
    return <h3>
        Hello this is the future speaking. I am your master {myName}. <br/>
        Full Name : {fullName()} <br/>
        Contact Number : {contactNo}
    </h3>
}

export default Hello;

// 1:53