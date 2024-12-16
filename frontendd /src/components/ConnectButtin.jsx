import { FunctionComponent } from "react";
import {
    useAccount,
    useConnect,
    useDisconnect,
    useStarkProfile,
    useBalance
} from "@starknet-react/core";

const StarkNetConnectButton = () => {
    const { address } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { data: profile } = useStarkProfile({ address });
    const { data: userBalance, error } = useBalance({
        address: address,
      });

    return !address ? (
        <div className="">
            {connectors.map((connector) => {
                if (connector.available()) {
                    return (
                        <div key={connector.id}>
                            <button className="btn" onClick={() => connect({ connector })}>

                                Connect {connector.name}

                            </button>
                        </div>
                    );
                }
            })}
        </div>
    ) : (
    

    <>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Wallet</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">connected to {address}</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <li><button onClick={() => disconnect()}>Disconnect</button></li>
    <p>User Balance: {userBalance?.formatted}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
    );
};

export default StarkNetConnectButton;