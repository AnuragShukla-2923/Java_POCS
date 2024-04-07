import CustomNavbar from "./CustomNavbar";

const Base= ({title="Welcome to our Website",children})=>{
    return (
        <div className="container-fluid p-0 m-0">
            {/* <h1>This is Header</h1> */}
            <CustomNavbar/>


          

          {children}

             {/* <h1>This is footer</h1> */}

       </div>
    )

};
export default Base;