import pwrContract from "../utils/Connections";
import web3 from "../web3";

export const transfer = async(address) => {
    let response = await pwrContract.methods.transfer(address, 1)
}