import { createContext, useState  } from "react";

 const PayInfoContext = createContext()

export function PayInfoProvider({children}) {

    const [payInfo, setPayInfo] = useState({
        cardName:'',
        cardNumber:'',
        cardExpireDate:'',
        cardCVC:''
    })

    return(
        <PayInfoContext.Provider value={{payInfo, setPayInfo}}>
            {children}
        </PayInfoContext.Provider>
    )
}

export default PayInfoContext;