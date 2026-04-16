import PrimaryButton from "./buttons/PrimaryButton";

const WaitListJoin = () => {

    return (
    <div>
        <div 
        className="bg-white w-110 h-60 justify-center relative flex flex-col mx-auto tracking-[5%] 
         mb-32 rounded-2xl border-2 border-[#52AEEF] items-center shadow-[15px_15px_0px_#ABD8F6]" >
            
            <p className="text-center font-semibold text-[37.5px] tracking-normal pb-4 "> Start spending and <br></br>
            saving with <span className="text-[#52AEEF] font-normal" style={{fontFamily: '"gooddog-new", sans-serif'}}> confidence. </span>
            </p>
            <PrimaryButton
    buttonColor="#F5A243"
    borderColor="#F5A243"
    textColor="#ffffff"
    buttonWidth="150px"
    buttonHeight="40px"
    fontSize="20px"
/>
            
            
        </div>
</div>

    );

}
 export default WaitListJoin