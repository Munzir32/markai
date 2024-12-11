use starknet::ContractAddress;


#[starknet::interface]
pub trait IMarkAI<TContractState> {
    fn saveMarkAIResponse(ref self: TContractState, responseGenerated: felt252, content: felt252, owner: ContractAddress);
    fn get_owner(self: @TContractState) -> ContractAddress;
    fn get_content(self: @TContractState, content: felt252) -> felt252;
    fn get_responseGenerated(self: @TContractState, responseGenerated: felt252) -> felt252;
    fn get_package(self: @TContractState, package: felt252) -> felt252;

}

#[starknet::contract]
mod MarKAI {
        use starknet::ContractAddress;

        #[storage]
    struct Storage {
        responseGenerated: felt252, 
        content: felt252,
        owner: ContractAddress,
        package: felt252;
    }


     #[abi(embed_v0)]
    impl MarkAIImpl of super::IMarkAI<ContractState> {
        fn saveMarkAIResponse(ref self: ContractState, responseGenerated: felt252, content: felt252, owner: ContractAddress) {
            self.responseGenerated.write(responseGenerated);
            self.content.write(content)
        } 

        fn get_auditresponse(self: @ContractState, contractResponse: felt252) -> felt252 {
                self.contractResponse.read()
        }

        fn get_responseGenerated(self: @ContractState, content: felt252) -> felt252 {
            self.content.read()
        }

        fn get_owner(self: @ContractState) -> ContractAddress {
            self.owner.read()
        }

        fn get_package(self: @ContractState, package: felt252) -> felt252 {
            self.package.read()
        }
    }


}